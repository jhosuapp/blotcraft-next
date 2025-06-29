import Link from "next/link";
import { easeIn, motion } from 'framer-motion';

import styles from './header.module.css';

const HeaderLogo = ():JSX.Element => {
    return (
        <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.25,
            }}
        >
            <Link href={'/'} className={styles.headerLogo}>
                <span className={`text-neutral-loaderPrimary`}>B</span>
                <span className={`text-neutral-loaderPrimary`}>L</span>
                <span className={`text-neutral-loaderPrimary`}>O</span>
                <span className={`text-neutral-loaderPrimary`}>T</span>
                <span className={`text-neutral-loaderSecondary`}>C</span>
                <span className={`text-neutral-loaderSecondary`}>R</span>
                <span className={`text-neutral-loaderSecondary`}>A</span>
                <span className={`text-neutral-loaderSecondary`}>F</span>
                <span className={`text-neutral-loaderSecondary`}>T</span>
            </Link>
        </motion.div>
    )
}

export { HeaderLogo }