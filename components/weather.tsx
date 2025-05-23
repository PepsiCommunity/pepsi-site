'use client';

import styles from '@/styles/main/cards.module.css';
import { IconStackForward } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { zedMono } from './fonts';
import axios from 'axios';
import Placeholder from './placeholder';

type WeatherType = {
    temp: number;
    condition: string;
};

const Weather = ({ lang }: { lang: string }) => {
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        axios
            .get(`/api/weather`, {
                params: {
                    lang: lang === 'ru-RU' ? 'ru' : 'en'
                }
            })
            .then(weather => {
                setWeather(weather.data);
            });
    }, [lang]);

    return (
        <div className={styles.card} style={{ gridArea: 'weather' }}>
            <h3 className={`${styles.header} ${zedMono.className}`}>
                <IconStackForward width={16} height={24} />
                <span>weather.json</span>
            </h3>
            <Placeholder value={weather}>
                <p className={`${zedMono.className} ${styles.contents}`}>
                    {weather?.condition}
                    <br />
                    <span style={{ opacity: '.6', fontSize: '14px' }}>{weather?.temp} °C</span>
                </p>
            </Placeholder>
        </div>
    );
};

export default Weather;
