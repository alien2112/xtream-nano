import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const blog = await Blog.findById(id).lean();

        if (!blog) {
            return NextResponse.json({ error: 'المقال غير موجود' }, { status: 404 });
        }

        return NextResponse.json({
            ...blog,
            _id: (blog as any)._id.toString(),
        });
    } catch (error) {
        console.error('Failed to fetch blog:', error);
        return NextResponse.json({ error: 'فشل في جلب المقال' }, { status: 500 });
    }
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const body = await req.json();

        // Remove any old English fields if they exist
        const { title, description, ...cleanBody } = body;
        
        // Ensure featured is always a boolean (explicitly set to false if not explicitly true)
        cleanBody.featured = !!(cleanBody.featured === true || cleanBody.featured === 'true' || cleanBody.featured === 1);

        const blog = await Blog.findByIdAndUpdate(
            id,
            { ...cleanBody, updatedAt: new Date() },
            { new: true, runValidators: true }
        ).lean();

        if (!blog) {
            return NextResponse.json({ error: 'المقال غير موجود' }, { status: 404 });
        }

        // Invalidate cache
        revalidateTag('blogs', 'max');

        return NextResponse.json({
            ...blog,
            _id: (blog as any)._id.toString(),
        });
    } catch (error: any) {
        console.error('Failed to update blog:', error);
        const errorMessage = error?.message || 'فشل في تحديث المقال';
        const errorDetails = error?.errors ? Object.keys(error.errors).map(key => `${key}: ${error.errors[key].message}`).join(', ') : '';
        return NextResponse.json({ 
            error: errorMessage,
            details: errorDetails 
        }, { status: 500 });
    }
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectDB();
        const { id } = await params;
        const blog = await Blog.findByIdAndDelete(id);

        if (!blog) {
            return NextResponse.json({ error: 'المقال غير موجود' }, { status: 404 });
        }

        // Invalidate cache
        revalidateTag('blogs', 'max');

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete blog:', error);
        return NextResponse.json({ error: 'فشل في حذف المقال' }, { status: 500 });
    }
}
