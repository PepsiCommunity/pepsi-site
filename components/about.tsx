'use client';

import styles from '@/styles/main/cards.module.css';
import styles_about from '@/styles/components/about.module.css';
import {
    IconBook2,
    IconBrandGithub,
    IconBrandPython,
    IconBrandRust,
    IconBrandTypescript,
    IconLanguage,
    IconLetterC,
    IconQuestionMark
} from '@tabler/icons-react';
import { zedMono } from './fonts';
import Image from 'next/image';
import Link from 'next/link';
import { Raleway } from 'next/font/google';
import langs from '@/app/langs.json';
import { getCookie, setCookie } from 'cookies-next';
import { ThemeSelector } from './themeSelector';

const raleway = Raleway({ subsets: ['cyrillic', 'latin'] });

const Tag = ({ name, icon, icon_color }: { name: string; icon: string; icon_color: string }) => {
    const iconProps = {
        width: 16,
        height: 24,
        color: icon_color
    };

    let IconEl = null;
    switch (icon) {
        case 'ts':
            IconEl = <IconBrandTypescript {...iconProps} />;
            break;
        case 'C':
            IconEl = <IconLetterC {...iconProps} />;
            break;
        case 'rust':
            IconEl = <IconBrandRust {...iconProps} />;
            break;
        case 'py':
            IconEl = <IconBrandPython {...iconProps} />;
            break;
        default:
            IconEl = <IconQuestionMark {...iconProps} />;
            break;
    }

    return (
        <div className={styles_about.tag_body}>
            {IconEl}
            <span className={zedMono.className}>{name}</span>
        </div>
    );
};

const changeLang = () => {
    const new_lang = getCookie('lang') === 'ru-RU' || !getCookie('lang') ? 'en-US' : 'ru-RU';
    setCookie('lang', new_lang, { maxAge: 60 * 24 * 365 * 10 });
    return new_lang;
};

const About = ({ lang, langChanged }: { lang: string; langChanged: (lang: string) => void }) => {
    const lang_code = lang === 'ru-RU' ? 'ru' : 'en';
    const about = langs.about[lang_code];
    const tags = [
        {
            name: 'TypeScript',
            icon: 'ts',
            icon_color: '#3178c6'
        },
        {
            name: 'Rust',
            icon: 'rust',
            icon_color: '#f44f19'
        },
        {
            name: 'C-lang',
            icon: 'C',
            icon_color: '#6583b7'
        },
        {
            name: 'Python',
            icon: 'py',
            icon_color: '#ffc832'
        }
    ];
    return (
        <div className={`${styles.card} ${styles_about.card}`}>
            <div className={styles_about.about_texts}>
                <h3 className={`${styles.header} ${zedMono.className}`}>
                    <IconBook2 width={20} height={30} />
                    <span>about.md</span>
                </h3>
                <div className={styles_about.header}>
                    <Image
                        src="/static/logo.png"
                        alt=""
                        width={80}
                        height={80}
                        className={styles_about.avatar}
                    />
                    <div className={styles_about.avatar_side}>
                        <p className={styles_about.title}>
                            {langs.title[lang_code]}{' '}
                            <span className={styles_about.animated_name}>
                                {langs.name[lang_code]}
                                <span className={styles_about.beam} />
                            </span>
                        </p>
                        <div className={styles_about.tags_container}>
                            {tags.map((tag, id) => (
                                <Tag key={id} {...tag} />
                            ))}
                        </div>
                    </div>
                </div>
                <p>{about}</p>
            </div>

            <div className={styles_about.buttons_container}>
                <Link href="https://github.com/PepsiCommunity" className={styles_about.button}>
                    <IconBrandGithub width={20} height={20} />
                    <span className={raleway.className}>GitHub</span>
                </Link>
                <ThemeSelector lang_code={lang_code} />
                <button className={styles_about.button} onClick={() => langChanged(changeLang())}>
                    <IconLanguage width={20} height={20} />
                    <span className={raleway.className}>{lang_code.toUpperCase()}</span>
                </button>
            </div>
        </div>
    );
};

export default About;
