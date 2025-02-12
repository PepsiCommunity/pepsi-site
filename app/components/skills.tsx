'use client';

import styles from '@/app/styles/main/cards.module.css';
import styles_projects from '@/app/styles/components/projects.module.css';
import styles_skills from '@/app/styles/components/skills.module.css';
import { IconBrandPython, IconBrandRust, IconBrandTypescript, IconList, IconMist, IconLetterC } from '@tabler/icons-react';
import { zedMono } from './fonts';
import Link from 'next/link';
import langs from '@/app/langs.json';
import { Raleway } from 'next/font/google';
import { JSX } from 'react';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

type CardType = { icon: JSX.Element; name: string; state: 'active' | 'in_progress'; href: string };
const LanguageCard = ({ icon, name, state, href }: CardType) => {
    const states = {
        active: {
            color: '#10b981',
            title: 'Active'
        },
        in_progress: {
            color: '#14b8a6',
            title: 'In progress'
        }
    };
    return (
        <Link className={`${styles.card} ${styles_skills.card_langs}`} href={href}>
            <h3 className={zedMono.className}>
                {icon}
                {name}
            </h3>
            <span className={`${styles_skills.state} ${zedMono.className}`} style={{ color: states[state].color }}>
                <div
                    style={{
                        position: 'relative'
                    }}
                >
                    <div
                        style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: 99999,
                            backgroundColor: states[state].color
                        }}
                    />

                    <div
                        style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: 99999,
                            filter: 'blur(60px)',
                            transform: 'translate(calc(-50% + 3px), calc(-50% - 3px))',
                            position: 'absolute',
                            backgroundColor: states[state].color
                        }}
                    />
                </div>
                {states[state].title}
            </span>
        </Link>
    );
};

const Skills = ({ lang }: { lang: string }) => {
    const lang_code = lang === 'ru-RU' ? 'ru' : 'en';

    const languages: CardType[] = [
        {
            icon: <IconBrandTypescript width={20} height={30} />,
            name: 'TypeScript',
            state: 'active',
            href: 'https://www.typescriptlang.org'
        },
        {
            icon: <IconBrandRust width={20} height={30} />,
            name: 'Rust',
            state: 'in_progress',
            href: 'https://www.rust-lang.org'
        },
        {
            icon: <IconLetterC width={20} height={30} />,
            name: 'C-language',
            state: 'in_progress',
            href: 'https://en.wikipedia.org/wiki/C_(programming_language)'
        }
    ];
    return (
        <div
            className={`${styles.card} ${styles_projects.card}`}
            style={{ gridArea: 'skills', justifyContent: 'space-between' }}
        >
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconMist width={16} height={24} />
                <span>skills.md</span>
            </h3>
            <h1 className={`${styles_skills.pl} ${raleway.className}`}>{langs.pl[lang_code]}</h1>
            <div className={styles_skills.langs_container}>
                {languages.map((lang, id) => (
                    <LanguageCard key={id} {...lang} />
                ))}
            </div>

            <h1 className={`${styles_skills.pl} ${raleway.className}`}>{langs.frameworks[lang_code]}</h1>
            <Link className={`${styles.card} ${styles_projects.card_inner}`} href="/skills">
                <h3 className={`${styles.header} ${styles_projects.header_inner} ${raleway.className}`}>
                    <IconList width={20} height={30} />
                    <span>{langs.all_skills_title[lang_code]}</span>
                </h3>
                <p className={`${styles_projects.contents}`}>{langs.all_skills_description[lang_code]}</p>
            </Link>
        </div>
    );
};

export default Skills;
