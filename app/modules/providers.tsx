'use client';

import { Onest } from 'next/font/google';
import { CSSProperties } from 'react';
import themes from '@/app/themes';
import { useCookiesServer } from './CookiesProvider/CookieProvider';

const onest = Onest({ subsets: ['latin'] });

export const getTheme = (theme: string) => {
    const keys = Object.keys(themes);
    if (!keys.includes(theme)) return themes.default;

    return themes[theme];
};

const Providers = ({ children }: { children: React.ReactNode }) => {
    const cookie = useCookiesServer();
    const theme = getTheme(cookie.get('theme') || 'dark');

    return (
        <html lang="en" style={theme as CSSProperties}>
            <body className={`${onest.className}`}>{children}</body>
        </html>
    );
};

export default Providers;
