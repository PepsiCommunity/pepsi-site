const months = [
    { en: 'January', ru: 'января' },
    { en: 'February', ru: 'февраля' },
    { en: 'March', ru: 'марта' },
    { en: 'April', ru: 'апреля' },
    { en: 'May', ru: 'мая' },
    { en: 'June', ru: 'июня' },
    { en: 'July', ru: 'июля' },
    { en: 'August', ru: 'августа' },
    { en: 'September', ru: 'сентября' },
    { en: 'October', ru: 'октября' },
    { en: 'November', ru: 'ноября' },
    { en: 'December', ru: 'декабря' }
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