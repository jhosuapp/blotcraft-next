import { useRef } from "react";
import styles from './loader.module.css';

const Loader = ():JSX.Element => {
    const node = useRef<HTMLElement | null>(null);

    setTimeout(()=>{
        node.current && node.current.classList.add(styles.animateLoader);
    },1500);

    return (
        <section className={styles.loader} ref={ node }>
            <article className={styles.loader__bg}></article>
            <article className={`${styles.loader__bg} ${styles.loader__bg__secondary}`}></article>
            <article className={styles.loader__content}>
                <div className={styles.loader__text}>
                    <p style={{ animationDelay: '0.1s' }} className={`text-primary ${styles.blot}`}>B</p>
                    <p style={{ animationDelay: '0.125s' }} className={`text-primary ${styles.blot}`}>L</p>
                    <p style={{ animationDelay: '0.15s' }} className={`text-primary ${styles.blot}`}>O</p>
                    <p style={{ animationDelay: '0.175s' }} className={`text-primary ${styles.blot}`}>T</p>
                    <p style={{ animationDelay: '0.2s' }} className={`text-secondary ${styles.craft}`}>C</p>
                    <p style={{ animationDelay: '0.225s' }} className={`text-secondary ${styles.craft}`}>R</p>
                    <p style={{ animationDelay: '0.25s' }} className={`text-secondary ${styles.craft}`}>A</p>
                    <p style={{ animationDelay: '0.275s' }} className={`text-secondary ${styles.craft}`}>F</p>
                    <p style={{ animationDelay: '0.3s' }} className={`text-secondary ${styles.craft}`}>T</p>
                </div>
            </article>
        </section>
    )
}

export { Loader }