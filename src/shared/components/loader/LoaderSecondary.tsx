import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import styles from './loaderSecondary.module.css';

type NativeProps = HTMLAttributes<HTMLElement>;

type CustomProps = {
    className?: string;
    textLoader?: string; 
}

 type Props = NativeProps & CustomProps;

const LoaderSecondary = ({ textLoader, className, ...props }:Props):JSX.Element => {
    const { t } = useTranslation('translation');

    return (
        <section 
            className={`${styles.loaderSecondary} ${className ?? ''}`}
            {...props}
        >
            <motion.article 
                className={styles.loaderSecondaryContent}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0, rotate: 180 }}
                key="box"
            >
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner1}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner2}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner3}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner4}`}></span>
            </motion.article>
            <article className={ styles.loaderSecondaryText}>
                <p>{textLoader ?? t('loader.textDefault')}</p>
            </article>
        </section>
    )
}

export { LoaderSecondary }