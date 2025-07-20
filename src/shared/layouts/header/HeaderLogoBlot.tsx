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
                <span className={`${styles.headerLogo__item} hover:!text-secondary ${hamburger && '!text-secondary'}`}>C</span>
                <span className={`${styles.headerLogo__item} hover:!text-secondary ${hamburger && '!text-secondary'}`}>R</span>
                <span className={`${styles.headerLogo__item} hover:!text-secondary ${hamburger && '!text-secondary'}`}>A</span>
                <span className={`${styles.headerLogo__item} hover:!text-secondary ${hamburger && '!text-secondary'}`}>F</span>
                <span className={`${styles.headerLogo__item} hover:!text-secondary ${hamburger && '!text-secondary'}`}>T</span>
            </Link>
        </div>
    )
}

export { HeaderLogo }