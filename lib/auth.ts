import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET_KEY = process.env.JWT_SECRET_KEY || 'your-secret-key-change-this';

if (!process.env.JWT_SECRET_KEY) {
    console.warn('Warning: JWT_SECRET_KEY not set, using default. This is insecure in production!');
}

const key = new TextEncoder().encode(SECRET_KEY);

export async function signToken(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(key);
}

export async function verifyToken(token: string) {
    try {
        const { payload } = await jwtVerify(token, key, {
            algorithms: ['HS256'],
        });
        return payload;
    } catch (error) {
        return null;
    }
}

export async function getSession() {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get('admin_token')?.value;
        if (!token) return null;
        return await verifyToken(token);
    } catch (error) {
        console.error('Error getting session:', error);
        return null;
    }
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_token');
}
