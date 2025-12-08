'use client';

import Sidebar from '@/components/admin/Sidebar';
import AuthWrapper from './AuthWrapper';
import styles from './dashboard.module.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthWrapper>
            <div className={styles.layout}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </AuthWrapper>
    );
}
