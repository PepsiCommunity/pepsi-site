import { cookies } from 'next/headers';
import ClientHome from './client';
import { formatDateHuman, getTime, validateLang } from '@/modules/utils';

const Home = async () => {
    const cookie = await cookies();
    const lang = cookie.get('lang')?.value ?? 'ru-RU';
    return (
        <ClientHome
            init_date={formatDateHuman(new Date(), validateLang(lang))}
            init_time={getTime(validateLang(lang))}
        />
    );
};

export default Home;

