'use client';

import { useState } from 'react';
import About from './components/about';
import DateElement, { DateYearType } from './components/date';
import Time from './components/time';
import Weather from './components/weather';
import useCookie from './modules/useCookie';
import styles from '@/app/styles/main/layout.module.css';
import Projects from './components/projects';
import Skills from './components/skills';
import Spotify from './components/spotify';

interface Props {
    init_time: string;
    init_date: DateYearType | null;
}

const ClientHome = (props: Props) => {
    const [lang, setLang] = useState<string>(useCookie('lang') ?? 'ru-RU');

    return (
        <main className={styles.main}>
            <Time lang={lang} init_time={props.init_time} />
            <DateElement lang={lang} init_date={props.init_date} />
            <Weather lang={lang} />
            <About lang={lang} langChanged={setLang} />
            <Projects lang={lang} />
            <Skills lang={lang} />
            <Spotify lang={lang} />
        </main>
    );
};

export default ClientHome;
