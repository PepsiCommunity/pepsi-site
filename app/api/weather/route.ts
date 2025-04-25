import { NextRequest, NextResponse } from 'next/server';

const capitalize = (str: string) => String(str).charAt(0).toUpperCase() + String(str).slice(1);

export async function GET(request: NextRequest) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather` +
            `?lat=${process.env.WEATHER_LAT}` +
            `&lon=${process.env.WEATHER_LON}` +
            `&appid=${process.env.WEATHER_TOKEN}` +
            `&units=metric` +
            `&lang=${new URL(request.url).searchParams.get('lang')}`,
        {
            cache: 'force-cache',
            next: {
                revalidate: 300
            }
        }
    );

    if (!response.ok) throw Error('Cannot fetch weather');
    const json = await response.json();

    return NextResponse.json({
        temp: json.main.temp,
        condition: capitalize(json.weather[0].description),
        icon: json.weather[0].icon.slice(0, 2)
    });
}
