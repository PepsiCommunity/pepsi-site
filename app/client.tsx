'use client';

import { useEffect, useState } from 'react';
import About from '@/components/about';
import DateElement, { DateYearType } from '@/components/date';
import Time from '@/components/time';
import Weather from '@/components/weather';
import { useNextCookie } from 'use-next-cookie';
import styles from '@/styles/main/layout.module.css';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Spotify from '@/components/spotify';
import langs from '@/app/langs.json';
import { validateLang } from '@/modules/utils';
import { getCookie, setCookie } from 'cookies-next';
import { setTheme } from '@/modules/setTheme';

interface Props {
    init_time: string;
    init_date: DateYearType | null;
}

const ClientHome = (props: Props) => {
    const [lang, setLang] = useState<string>(validateLang(useNextCookie('lang')));

    useEffect(() => {
        if (!getCookie('theme')) {
            const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDarkMode ? 'dark' : 'light');
        }

        if (!getCookie('lang')) {
            const systemLang = navigator.language.toLowerCase().startsWith('ru')
                ? 'ru-RU'
                : 'en-US';
            setLang(systemLang);
            setCookie('lang', systemLang, { maxAge: 60 * 24 * 365 * 10 });
        }
    }, []);

    return (
        <main className={styles.main}>
            <Time lang={lang} init_time={props.init_time} />
            <DateElement lang={lang} init_date={props.init_date} />
            <Weather lang={lang} />
            <About lang={lang} langChanged={setLang} />
            <Projects lang={lang} />
            <Skills lang={lang} />
            <Spotify />
            <p
                className={styles.footer}
                dangerouslySetInnerHTML={{ __html: langs.footer[lang === 'ru-RU' ? 'ru' : 'en'] }}
            />
        </main>
    );
};

export default ClientHome;
