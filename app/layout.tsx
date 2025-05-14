import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import Providers from '@/modules/providers';
import { CookieProvider } from 'use-next-cookie';

export const metadata: Metadata = {
    title: 'PEPSI Community',
    description: 'Приватное сообщество разработчиков',
    icons: {
        icon: '/static/logo.png',
        shortcut: '/static/logo.png',
        apple: '/static/logo.png'
    },
    openGraph: {
        title: 'PEPSI Community',
        description: 'Приватное сообщество разработчиков',
        url: 'https://pepsi.andcool.ru',
        siteName: 'pepsi.andcool.ru',
        images: 'https://pepsi.andcool.ru/static/logo.png'
    },
    twitter: {
        card: 'summary'
    },
    other: {
        'theme-color': '#295488',
        'darkreader-lock': 'darkreader-lock'
    }
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 0.9
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CookieProvider>
            <Providers>{children}</Providers>
        </CookieProvider>
    );
}
