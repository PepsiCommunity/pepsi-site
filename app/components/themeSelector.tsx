import useCookie from '../modules/useCookie';
import { JSX, useState } from 'react';
import { setTheme } from '../modules/setTheme';
import styles_about from '@/app/styles/components/about.module.css';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { setCookie } from 'cookies-next';
import { Raleway } from 'next/font/google';
import langs from '@/app/langs.json';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

export const ThemeSelector = ({ lang_code }: { lang_code: 'ru' | 'en' }) => {
    const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
    const [dark, setDark] = useState<boolean>((useCookie('theme') ?? 'dark') === 'dark');
    const iconProps = {
        width: 20,
        height: 20,
        className: styles_about.theme_icon,
        id: 'theme_icon'
    };
    const [icon, setIcon] = useState<JSX.Element>(dark ? <IconMoon {...iconProps} /> : <IconSun {...iconProps} />);

    const themeChanged = async (dark: boolean) => {
        const theme_str = dark ? 'dark' : 'light';
        setDark(dark);
        setCookie('theme', theme_str, { maxAge: 60 * 24 * 365 * 10 });
        setTheme(theme_str);
        const hiding_icon = document.getElementById('theme_icon');
        if (hiding_icon) hiding_icon.style.opacity = '0';

        await sleep(300);
        setIcon(
            dark ? (
                <IconMoon {...iconProps} style={{ opacity: 0 }} />
            ) : (
                <IconSun {...iconProps} style={{ opacity: 0 }} />
            )
        );

        await sleep(15);
        const showing_icon = document.getElementById('theme_icon');
        if (showing_icon) showing_icon.style.opacity = '1';
    };
    return (
        <button className={styles_about.button} onClick={() => themeChanged(!dark)}>
            {icon}
            <span className={raleway.className}>{langs[dark ? 'dark_theme' : 'light_theme'][lang_code]}</span>
        </button>
    );
};
