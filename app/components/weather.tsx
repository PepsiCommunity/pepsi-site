'use client';

import styles from '@/app/styles/main/cards.module.css';
import { IconStackForward } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { zedMono } from './fonts';
import axios from 'axios';
import Placeholder from './placeholder';

type WeatherType = {
    temp: number;
    condition: string;
    icon: '04';
};

const Weather = ({ lang }: { lang: string }) => {
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        axios
            .get(`https://weather.andcool.ru/api`, {
                params: {
                    place: 'andcool',
                    json: true,
                    language: lang === 'ru-RU' ? 'ru' : 'en'
                }
            })
            .then((weather) => {
                setWeather(weather.data);
            });
    }, [lang]);

    return (
        <div className={`${styles.card} ${styles.rect}`} style={{ gridArea: 'weather' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconStackForward width={16} height={24} />
                <span>weather.json</span>
            </h3>
            <Placeholder value={weather}>
                <p className={`${styles.contents} ${zedMono.className}`}>
                    {weather?.condition}
                    <br />
                    <span style={{ opacity: '.6', fontSize: '14px' }}>{weather?.temp} °C</span>
                </p>
            </Placeholder>
        </div>
    );
};

export default Weather;
