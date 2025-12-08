import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag, unstable_cache } from 'next/cache';
import connectDB from '@/lib/db';
import Service from '@/models/Service';

export const dynamic = 'force-dynamic';

// Cached services list
const getCachedServices = unstable_cache(
    async () => {
        await connectDB();
        const services = await Service.find().sort({ order: 1, createdAt: -1 }).lean();
        return services.map((service: any) => ({
            ...service,
            _id: service._id.toString(),
        }));
    },
    ['services-list'],
    { revalidate: 14400, tags: ['services'] } // 4 hours
);

export async function GET(req: NextRequest) {
    try {
        const services = await getCachedServices();
        return NextResponse.json(services);
    } catch (error) {
        console.error('Failed to fetch services:', error);
        return NextResponse.json({ error: 'فشل في جلب الخدمات' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const body = await req.json();
        console.log('Received body:', JSON.stringify(body, null, 2));

        // Remove any old English fields if they exist
        const { title, description, ...cleanBody } = body;
        
        // Ensure featured is always a boolean (explicitly set to false if not explicitly true)
        cleanBody.featured = !!(cleanBody.featured === true || cleanBody.featured === 'true' || cleanBody.featured === 1);
        
        console.log('Clean body:', JSON.stringify(cleanBody, null, 2));

        // Validate required fields
        if (!cleanBody.titleAr || !cleanBody.descriptionAr || !cleanBody.slug) {
            return NextResponse.json({ 
                error: 'الحقول المطلوبة مفقودة',
                details: `titleAr: ${!!cleanBody.titleAr}, descriptionAr: ${!!cleanBody.descriptionAr}, slug: ${!!cleanBody.slug}`
            }, { status: 400 });
        }

        const service = await Service.create(cleanBody) as any;
        console.log('Service created successfully:', service._id);

        // Invalidate cache
        revalidateTag('services', 'max');

        const serviceObj = {
            ...service.toObject(),
            _id: service._id.toString(),
        };

        return NextResponse.json(serviceObj, { status: 201 });
    } catch (error: any) {
        console.error('Failed to create service - Full error:', error);
        console.error('Error name:', error?.name);
        console.error('Error message:', error?.message);
        if (error?.errors) {
            console.error('Validation errors:', error.errors);
        }
        const errorMessage = error?.message || 'فشل في إنشاء الخدمة';
        const errorDetails = error?.errors ? Object.keys(error.errors).map(key => `${key}: ${error.errors[key].message}`).join(', ') : '';
        return NextResponse.json({ 
            error: errorMessage,
            details: errorDetails,
            errorName: error?.name
        }, { status: 500 });
    }
}
