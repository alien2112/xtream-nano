import { NextRequest, NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();

        // Hardcoded admin credentials
        const ADMIN_USERNAME = 'admin';
        const ADMIN_PASSWORD = 'admin123';

        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            const token = await signToken({ username });

            const response = NextResponse.json({ success: true });
            
            // Cookie settings optimized for Vercel
            const isProduction = process.env.VERCEL || process.env.NODE_ENV === 'production';
            
            response.cookies.set('admin_token', token, {
                httpOnly: true,
                secure: isProduction, // Always secure on Vercel
                sameSite: 'lax', // Changed from 'strict' for better compatibility
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });

            return response;
        }

        return NextResponse.json({ error: 'بيانات الدخول غير صحيحة' }, { status: 401 });
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'خطأ في الخادم' }, { status: 500 });
    }
}
