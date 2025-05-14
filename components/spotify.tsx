'use client';

import styles from '@/styles/main/cards.module.css';
import styles_projects from '@/styles/components/projects.module.css';
import styles_spotify from '@/styles/components/spotify.module.css';
import placeholder_style from '@/styles/placeholder.module.css';
import { IconStackForward } from '@tabler/icons-react';
import { zedMono } from './fonts';

const Spotify = () => {
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
