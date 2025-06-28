import Link from "next/link";

import styles from './header.module.css';

const HeaderLogo = ():JSX.Element => {
    return (
        <Link href={'/'} className={styles.headerLogo}>
            <p style={{ animationDelay: '0.1s' }} className={`text-neutral-loaderPrimary ${styles.blot}`}>B</p>
            <p style={{ animationDelay: '0.125s' }} className={`text-neutral-loaderPrimary ${styles.blot}`}>L</p>
            <p style={{ animationDelay: '0.15s' }} className={`text-neutral-loaderPrimary ${styles.blot}`}>O</p>
            <p style={{ animationDelay: '0.175s' }} className={`text-neutral-loaderPrimary ${styles.blot}`}>T</p>
            <p style={{ animationDelay: '0.2s' }} className={`text-neutral-loaderSecondary ${styles.craft}`}>C</p>
            <p style={{ animationDelay: '0.225s' }} className={`text-neutral-loaderSecondary ${styles.craft}`}>R</p>
            <p style={{ animationDelay: '0.25s' }} className={`text-neutral-loaderSecondary ${styles.craft}`}>A</p>
            <p style={{ animationDelay: '0.275s' }} className={`text-neutral-loaderSecondary ${styles.craft}`}>F</p>
            <p style={{ animationDelay: '0.3s' }} className={`text-neutral-loaderSecondary ${styles.craft}`}>T</p>
        </Link>
    )
}

export { HeaderLogo }