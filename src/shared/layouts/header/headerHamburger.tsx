import { useState } from 'react';
import styles from './header.module.css';

const HeaderHamburger = ():JSX.Element => {
    const [hamburger, setHamburger] = useState<boolean>(true);

    const handleClick = ()=> {
        setHamburger(!hamburger);
    }

    return (
        <button onClick={handleClick} className={`${styles.headerHamburger} ${hamburger && styles.headerHamburgerActive}`}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export { HeaderHamburger }