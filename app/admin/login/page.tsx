'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Simple hardcoded check - no API call needed
        if (username === 'admin' && password === 'admin123') {
            // Store in localStorage
            localStorage.setItem('admin_authenticated', 'true');
            // Redirect
            window.location.href = '/admin';
        } else {
            setError('بيانات الدخول غير صحيحة');
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logoContainer}>
                    <img src="/logo.png" alt="Xtreme Nano" className={styles.logo} />
                </div>
                <h1 className={styles.title}>لوحة التحكم</h1>
                <p className={styles.subtitle}>قم بتسجيل الدخول للوصول إلى لوحة الإدارة</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username" className={styles.label}>اسم المستخدم</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.input}
                            placeholder="أدخل اسم المستخدم"
                            required
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>كلمة المرور</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="أدخل كلمة المرور"
                            required
                        />
                    </div>
                    {error && <div className={styles.error}>{error}</div>}
                    <button type="submit" className={styles.button} disabled={loading}>
                        {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                    </button>
                </form>
            </div>
        </div>
    );
}
