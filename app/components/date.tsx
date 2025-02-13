'use client';

import styles from '@/app/styles/main/cards.module.css';
import { IconBraces } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { zedMono } from './fonts';
import Placeholder from './placeholder';
import { formatDateHuman } from '../modules/utils';

export type DateYearType = { date: string; year: string };

const DateElement = ({ lang, init_date }: { lang: string; init_date: DateYearType | null }) => {
    const [date, setDate] = useState<DateYearType | null>(init_date);

    useEffect(() => {
        setDate(formatDateHuman(new Date(), lang));
        const interval = setInterval(
            () => setDate(formatDateHuman(new Date(), lang)),
            1000 * 60 * 5
        );

        return () => clearInterval(interval);
    }, [lang]);
    return (
        <div className={`${styles.card} ${styles.rect}`} style={{ gridArea: 'date' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconBraces width={16} height={24} />
                <span>date.ts</span>
            </h3>
            <Placeholder value={date}>
                <p className={`${styles.contents} ${zedMono.className}`}>
                    {date?.date}
                    <br />
                    <span style={{ opacity: '.6', fontSize: '14px' }}>
                        {date?.year} {lang === 'ru-RU' && 'г.'}
                    </span>
                </p>
            </Placeholder>
        </div>
    );
};

export default DateElement;
