import localFont from 'next/font/local';

export const zedMono = localFont({
    src: [
        {
            path: '../public/fonts/zed-mono-regular.ttf',
            weight: '500',
            style: 'normal'
        }
    ],
    variable: '--font-zedmono'
});
