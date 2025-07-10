import { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';

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
            <article className={styles.loaderSecondaryContent}>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner1}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner2}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner3}`}></span>
                <span className={`${styles.loaderSeconaryInner} ${styles.loaderInner4}`}></span>
            </article>
            <article className={ styles.loaderSecondaryText}>
                <p>{textLoader ?? t('loader.textDefault')}</p>
            </article>
        </section>
    )
}

export { LoaderSecondary }