import Link from "next/link";
import { motion } from 'framer-motion';

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
                <span className={`text-tertiary`}>B</span>
                <span className={`text-tertiary`}>L</span>
                <span className={`text-tertiary`}>O</span>
                <span className={`text-tertiary`}>T</span>
                <span className={`text-tertiary`}>C</span>
                <span className={`text-tertiary`}>R</span>
                <span className={`text-tertiary`}>A</span>
                <span className={`text-tertiary`}>F</span>
                <span className={`text-tertiary`}>T</span>
            </Link>
        </motion.div>
    )
}

export { HeaderLogo }