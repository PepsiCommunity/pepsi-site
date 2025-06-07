import { cookies } from 'next/headers';
import ClientHome from './client';
import { formatDateHuman, getTime, validateLang } from '@/modules/utils';
import getPepsiMembersCount from './discord';

const Home = async () => {
    const cookie = await cookies();
    const lang = cookie.get('lang')?.value ?? 'ru-RU';
    const members_count = await getPepsiMembersCount();
    return (
        <ClientHome
            init_date={formatDateHuman(new Date(), validateLang(lang))}
            init_time={getTime(validateLang(lang))}
            members_count={members_count}
        />
    );
};

export default Home;

