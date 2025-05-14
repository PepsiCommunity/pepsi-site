'use client';

import styles from '@/styles/main/cards.module.css';
import { IconBraces } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { zedMono } from './fonts';
import Placeholder from './placeholder';
import { getTime, validateLang } from '../modules/utils';

const Time = ({ lang, init_time }: { lang: string; init_time: string }) => {
    const [time, setTime] = useState<string>(init_time);

    useEffect(() => {
        setTime(getTime(validateLang(lang)));
        const interval = setInterval(() => setTime(getTime(validateLang(lang))), 1000);

        return () => clearInterval(interval);
    }, [lang]);

    return (
        <div className={styles.card} style={{ gridArea: 'time' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconBraces width={16} height={24} />
                <span>time.ts</span>
            </h3>
            <Placeholder value={time}>
                <p className={`${styles.contents} ${zedMono.className}`}>
                    {time}
                    <br />
                    <span style={{ opacity: '.6', fontSize: '14px' }}>UTC+3</span>
                </p>
            </Placeholder>
        </div>
    );
};

export default Time;
