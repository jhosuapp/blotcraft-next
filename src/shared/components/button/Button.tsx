import { useMenuStore } from '@/shared/stores';

import styles from './button.module.css';
import iconDefault from '@/config/assets/svg/icon-arrow.svg';
import Image from 'next/image';
import { ButtonHTMLAttributes } from 'react';

type NativeProps = ButtonHTMLAttributes<HTMLButtonElement>;

type CustomProps = {
    text: string;
    style?: 'primary' | 'secondary';
    isLight?: boolean;
    className?: string;
    icon?: string;
}

type Props = CustomProps & NativeProps;

const Button = ({ text, style, isLight, className, icon, ...props }:Props):JSX.Element => {
    const hamburger = useMenuStore( state => state.hamburger );
    const isWhite = hamburger || isLight;

    return (
        <button 
            className={ `${styles.button} ${styles[`button--${style}`]} ${isWhite ? styles['button--white'] : ''} ${className ?? ''}` }
            {...props}
        >
            <Image 
                className={ styles.button__icon }
                src={ icon ? icon : iconDefault } 
                alt="icono blootcraft"
            />
            <span>{ text }</span>
            <b></b>
        </button>
    )
}

export { Button }