import { cookies } from 'next/headers';
import ClientHome from './client';
import { formatDateHuman, getTime } from './modules/utils';

const Home = async () => {
    const cookie = await cookies();
    const lang = cookie.get('lang')?.value ?? 'ru-RU';
    return <ClientHome init_date={formatDateHuman(new Date(), lang)} init_time={getTime(lang)} />;
};

export default Home;

