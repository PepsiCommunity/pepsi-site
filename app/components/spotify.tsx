/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import styles from '@/app/styles/main/cards.module.css';
import styles_projects from '@/app/styles/components/projects.module.css';
import { IconStackForward } from '@tabler/icons-react';
import { zedMono } from './fonts';
import { Raleway } from 'next/font/google';
import Placeholder from './placeholder';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

const Spotify = ({ lang }: { lang: string }) => {
    const lang_code = lang === 'ru-RU' ? 'ru' : 'en';
    return (
        <div className={`${styles.card} ${styles_projects.card}`} style={{ gridArea: 'spotify' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconStackForward width={16} height={24} />
                <span>spotify.json</span>
            </h3>
            <Placeholder value={undefined}>
                <></>
            </Placeholder>
        </div>
    );
};

export default Spotify;
