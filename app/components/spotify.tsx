/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import styles from '@/app/styles/main/cards.module.css';
import styles_projects from '@/app/styles/components/projects.module.css';
import styles_spotify from '@/app/styles/components/spotify.module.css';
import { IconStackForward } from '@tabler/icons-react';
import { zedMono } from './fonts';
import placeholder_style from '@/app/styles/placeholder.module.css';

const Spotify = ({ lang }: { lang: string }) => {
    return (
        <div className={`${styles.card} ${styles_projects.card}`} style={{ gridArea: 'spotify' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconStackForward width={16} height={24} />
                <span>spotify.json</span>
            </h3>
            <div className={styles_spotify.container}>
                <div className={`${placeholder_style.body} ${styles_spotify.thumbnail}`} />
                <div className={styles_spotify.texts_container}>
                    <div className={placeholder_style.body} />
                    <div className={placeholder_style.body} />
                    <div className={placeholder_style.body} />
                </div>
            </div>
        </div>
    );
};

export default Spotify;
