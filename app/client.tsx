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
import { numbersTxt, validateLang } from '@/modules/utils';
import { getCookie, setCookie } from 'cookies-next';
import { setTheme } from '@/modules/setTheme';

interface Props {
    init_time: string;
    init_date: DateYearType | null;
    members_count: number;
}

const ClientHome = (props: Props) => {
    const [lang, setLang] = useState<string>(validateLang(useNextCookie('lang')));
    const unified_lang = lang === 'ru-RU' ? 'ru' : 'en';

    const footer_text = langs.footer[unified_lang].replace(
        '{{members}}',
        numbersTxt(props.members_count, langs.footer_child_count[unified_lang])
    );

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
            <p className={styles.footer} dangerouslySetInnerHTML={{ __html: footer_text }} />
        </main>
    );
};

export default ClientHome;
