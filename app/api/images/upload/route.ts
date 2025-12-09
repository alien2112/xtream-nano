import { NextRequest, NextResponse } from 'next/server';
import { uploadToGridFS } from '@/lib/gridfs';

export const dynamic = 'force-dynamic';
export const maxDuration = 30; // 30 seconds for Vercel Pro, 10s for Hobby
export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file provided' }, { status: 400 });
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            return NextResponse.json({ error: 'File must be an image' }, { status: 400 });
        }

        // Validate file size (max 10MB)
        const maxSize = 10 * 1024 * 1024; // 10MB
        if (file.size > maxSize) {
            return NextResponse.json({ error: 'File size exceeds 10MB limit' }, { status: 400 });
        }

        // Convert file to buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        // Upload to GridFS
        const fileId = await uploadToGridFS(buffer, file.name, file.type);

        if (!fileId) {
            throw new Error('Upload failed - no file ID returned');
        }

        return NextResponse.json({ 
            success: true, 
            fileId,
            url: `/api/images/${fileId}`
        });
    } catch (error: any) {
        console.error('Failed to upload image:', error);
        const errorMessage = error?.message || 'Failed to upload image';
        return NextResponse.json({ 
            error: errorMessage,
            details: error?.stack 
        }, { status: 500 });
    }
}

