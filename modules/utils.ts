const months = [
    { en: 'January', ru: 'Января' },
    { en: 'February', ru: 'Февраля' },
    { en: 'March', ru: 'Марта' },
    { en: 'April', ru: 'Апреля' },
    { en: 'May', ru: 'Мая' },
    { en: 'June', ru: 'Июня' },
    { en: 'July', ru: 'Июля' },
    { en: 'August', ru: 'Августа' },
    { en: 'September', ru: 'Сентября' },
    { en: 'October', ru: 'Октября' },
    { en: 'November', ru: 'Ноября' },
    { en: 'December', ru: 'Декабря' }
];

export const formatDateHuman = (date: Date, lang: string) => {
    if (isNaN(date.getDay())) return null;
    const day = date.getDate().toString();
    const month = months[date.getMonth()][lang === 'ru-RU' ? 'ru' : 'en'];
    const year = date.getFullYear().toString();

    return { date: `${day} ${month}`, year };
};

export const getTime = (lang: string): string => {
    return new Date().toLocaleString(lang, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: lang === 'ru-RU' ? false : true,
        timeZone: 'Etc/GMT-3'
    });
};

export const validateLang = (inp?: string) => {
    if (!inp) return 'ru-RU';
    return ['ru-RU', 'en-US'].includes(inp) ? inp : 'ru-RU';
};
