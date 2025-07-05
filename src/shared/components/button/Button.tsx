import { useMenuStore } from '@/shared/stores';

import styles from './button.module.css';
import icon from '@/config/assets/svg/icon-arrow.svg';
import Image from 'next/image';

type Props = {
    text: string;
    style?: 'primary';
    isLight?: boolean;
}

const Button = ({ text, style, isLight }:Props):JSX.Element => {
    const hamburger = useMenuStore( state => state.hamburger );
    const isWhite = hamburger || isLight;

    return (
        <button className={ `${styles.button} ${styles[`button--${style}`]} ${isWhite ? styles['button--white'] : ''}` }>
            <Image src={ icon } alt="icono blootcraft"/>
            <span>{ text }</span>
            <b></b>
        </button>
    )
}

export { Button }