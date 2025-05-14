import { JSX } from 'react';
import style from '@/styles/placeholder.module.css';

const Placeholder = ({ children, value }: { children: JSX.Element; value: unknown }) => {
    if (!!value) return children;
    return <div className={style.body} />;
};

export default Placeholder;
