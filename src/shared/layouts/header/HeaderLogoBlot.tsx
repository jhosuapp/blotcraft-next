import Link from "next/link";

import styles from './header.module.css';
import { useMenuStore } from "@/shared/stores";

const HeaderLogo = ():JSX.Element => {
    const hamburger = useMenuStore( state => state.hamburger );

    return (
        <div>
            <Link href={'/'} className={styles.headerLogo}>
                <span className={`${styles.headerLogo__item} hover:!text-primary ${hamburger && '!text-primary'}`}>B</span>
                <span className={`${styles.headerLogo__item} hover:!text-primary ${hamburger && '!text-primary'}`}>L</span>
                <span className={`${styles.headerLogo__item} hover:!text-primary ${hamburger && '!text-primary'}`}>O</span>
                <span className={`${styles.headerLogo__item} hover:!text-primary ${hamburger && '!text-primary'}`}>T</span>
                <span className={`${styles.headerLogo__item} hover:!text-fifth ${hamburger && '!text-primary'}`}>C</span>
                <span className={`${styles.headerLogo__item} hover:!text-fifth ${hamburger && '!text-primary'}`}>R</span>
                <span className={`${styles.headerLogo__item} hover:!text-fifth ${hamburger && '!text-primary'}`}>A</span>
                <span className={`${styles.headerLogo__item} hover:!text-fifth ${hamburger && '!text-primary'}`}>F</span>
                <span className={`${styles.headerLogo__item} hover:!text-fifth ${hamburger && '!text-primary'}`}>T</span>
            </Link>
        </div>
    )
}

export { HeaderLogo }