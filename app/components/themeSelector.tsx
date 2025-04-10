import { useNextCookie } from 'use-next-cookie';
import { JSX, useRef, useState } from 'react';
import { setTheme } from '../modules/setTheme';
import styles_about from '@/app/styles/components/about.module.css';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { Raleway } from 'next/font/google';
import langs from '@/app/langs.json';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

const getIcon = (dark: boolean) => {
    const iconProps = {
        width: 20,
        height: 20
    };
    return dark ? <IconMoon {...iconProps} /> : <IconSun {...iconProps} />;
};

export const ThemeSelector = ({ lang_code }: { lang_code: 'ru' | 'en' }) => {
    const [dark, setDark] = useState<boolean>(useNextCookie('theme') !== 'light');
    const [icon, setIcon] = useState<JSX.Element>(getIcon(dark));
    const [opacity, setOpacity] = useState<number>(1);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const themeChanged = (dark: boolean) => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        const theme_str = dark ? 'dark' : 'light';
        setDark(dark);
        setTheme(theme_str);
        setOpacity(0);

        timeoutRef.current = setTimeout(() => {
            setIcon(getIcon(dark));
            setOpacity(1);
        }, 300);
    };

    return (
        <button className={styles_about.button} onClick={() => themeChanged(!dark)}>
            <div style={{ opacity }} className={styles_about.opacity_icon}>
                {icon}
            </div>
            <span className={raleway.className}>
                {langs[dark ? 'dark_theme' : 'light_theme'][lang_code]}
            </span>
        </button>
    );
};
