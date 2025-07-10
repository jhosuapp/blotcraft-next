import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

type CustomProps = '';

type NativeProps = InputHTMLAttributes<HTMLInputElement>;

type Props = NativeProps;

const Input = ({ ...props }:Props):JSX.Element => {
    return (
        <div className={ styles.input }>
            <input 
                {...props}
            />
            <span role='alert'></span>
        </div>
    )
}

export { Input }