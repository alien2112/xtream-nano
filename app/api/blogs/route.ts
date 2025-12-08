import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, unstable_cache } from 'next/cache';
import connectDB from '@/lib/db';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';

// Cached blogs list
const getCachedBlogs = unstable_cache(
    async () => {
        await connectDB();
        const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
        return blogs.map((blog: any) => ({
            ...blog,
            _id: blog._id.toString(),
        }));
    },
    ['blogs-list'],
    { revalidate: 14400, tags: ['blogs'] } // 4 hours
);

export async function GET() {
    try {
        const blogs = await getCachedBlogs();
        return NextResponse.json(blogs);
    } catch (error) {
        console.error('Failed to fetch blogs:', error);
        return NextResponse.json({ error: 'فشل في جلب المقالات' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        console.log('Received blog body:', JSON.stringify(body, null, 2));

        // Remove any old English fields if they exist
        const { title, description, ...cleanBody } = body;
        
        // Ensure featured is always a boolean (explicitly set to false if not explicitly true)
        cleanBody.featured = !!(cleanBody.featured === true || cleanBody.featured === 'true' || cleanBody.featured === 1);
        
        console.log('Clean blog body:', JSON.stringify(cleanBody, null, 2));

        // Validate required fields
        if (!cleanBody.titleAr || !cleanBody.descriptionAr || !cleanBody.slug) {
            return NextResponse.json({ 
                error: 'الحقول المطلوبة مفقودة',
                details: `titleAr: ${!!cleanBody.titleAr}, descriptionAr: ${!!cleanBody.descriptionAr}, slug: ${!!cleanBody.slug}`
            }, { status: 400 });
        }

        const blog = await Blog.create(cleanBody) as any;
        console.log('Blog created successfully:', blog._id);

        // Invalidate cache
        revalidateTag('blogs', 'max');

        const blogObj = {
            ...blog.toObject(),
            _id: blog._id.toString(),
        };

        return NextResponse.json(blogObj, { status: 201 });
    } catch (error: any) {
        console.error('Failed to create blog - Full error:', error);
        console.error('Error name:', error?.name);
        console.error('Error message:', error?.message);
        if (error?.errors) {
            console.error('Validation errors:', error.errors);
        }
        const errorMessage = error?.message || 'فشل في إنشاء المقال';
        const errorDetails = error?.errors ? Object.keys(error.errors).map(key => `${key}: ${error.errors[key].message}`).join(', ') : '';
        return NextResponse.json({ 
            error: errorMessage,
            details: errorDetails,
            errorName: error?.name
        }, { status: 500 });
    }
}
