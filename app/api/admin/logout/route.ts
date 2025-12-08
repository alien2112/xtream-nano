import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function POST() {
    try {
        const cookieStore = await cookies();
        const response = NextResponse.json({ success: true });
        
        // Delete cookie with same settings as login
        response.cookies.set('admin_token', '', {
            httpOnly: true,
            secure: process.env.VERCEL || process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 0,
            path: '/',
        });
        
        return response;
    } catch (error) {
        console.error('Logout error:', error);
        return NextResponse.json({ error: 'خطأ في الخادم' }, { status: 500 });
    }
}
