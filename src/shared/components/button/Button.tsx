import { useMenuStore } from '@/shared/stores';

import styles from './button.module.css';
import icon from '@/config/assets/svg/icon-arrow.svg';
import Image from 'next/image';

type Props = {
    text: string;
    style?: 'primary';
}

const Button = ({ text, style }:Props):JSX.Element => {
    const hamburger = useMenuStore( state => state.hamburger );

    return (
        <button className={ `${styles.button} ${styles[`button--${style}`]} ${hamburger && styles['button--white']}` }>
            <Image src={ icon } alt="icono blootcraft"/>
            <span>{ text }</span>
            <b></b>
        </button>
    )
}

export { Button }