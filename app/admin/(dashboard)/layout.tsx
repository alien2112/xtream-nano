'use client';

import { useEffect, useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Check localStorage immediately
        if (typeof window !== 'undefined') {
            const auth = localStorage.getItem('admin_authenticated');
            if (auth === 'true') {
                setIsAuthenticated(true);
            } else {
                // Use window.location for immediate redirect
                window.location.href = '/admin/login';
            }
        }
    }, []);

    // Don't render anything until mounted (client-side)
    if (!mounted) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>جاري التحميل...</div>
            </div>
        );
    }

    // If not authenticated, don't render (redirect will happen)
    if (!isAuthenticated) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div>جاري إعادة التوجيه...</div>
            </div>
        );
    }

    return (
        <div className={styles.layout}>
            <Sidebar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
