import Link from "next/link";
import { motion } from 'framer-motion';

import styles from './header.module.css';
import { useMenuStore } from "@/shared/stores";

const HeaderLogo = ():JSX.Element => {
    const hamburger = useMenuStore( state => state.hamburger );

    return (
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.25,
            }}
        >
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
        </motion.div>
    )
}

export { HeaderLogo }