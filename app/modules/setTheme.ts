
import { setCookie } from 'cookies-next';
import { getTheme } from './providers';

export const setTheme = (name: string) => {
    const theme = getTheme(name);
    setCookie('theme', name, { maxAge: 60 * 24 * 365 * 10 });
    Object.entries(theme).map((entry) => document.documentElement.style.setProperty(entry[0], entry[1]));
};
