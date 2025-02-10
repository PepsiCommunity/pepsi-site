'use client';

import styles from '@/app/styles/main/cards.module.css';
import styles_projects from '@/app/styles/components/projects.module.css';
import { IconFoldersFilled, IconList } from '@tabler/icons-react';
import { zedMono } from './fonts';
import Link from 'next/link';
import langs from '@/app/langs.json';
import { Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

const Projects = ({ lang }: { lang: string }) => {
    const lang_code = lang === 'ru-RU' ? 'ru' : 'en';
    return (
        <div className={`${styles.card} ${styles_projects.card}`} style={{ gridArea: 'projects' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconFoldersFilled width={16} height={24} />
                <span>projects.json</span>
            </h3>
            <Link className={`${styles.card} ${styles_projects.card_inner}`} href="">
                <h3 className={`${styles.header} ${styles_projects.header_inner} ${raleway.className}`}>
                    <IconList width={20} height={30} />
                    <span>{langs.projects_title[lang_code]}</span>
                </h3>
                <p className={`${styles_projects.contents}`}>{langs.projects_description[lang_code]}</p>
            </Link>
        </div>
    );
};

export default Projects;
