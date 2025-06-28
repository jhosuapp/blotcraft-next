import styles from './header.module.css';
import { HeaderMenuItem } from './headerMenuItem';

const HeaderMenu = ():JSX.Element => {
    return (
        <section className={styles.headerMenu}>
            <article className={styles.headerMenu__bg}></article>
            <section className={styles.headerMenu__content}>
                <article className={styles.headerMenu__info}>

                </article>
                <nav className={styles.headerMenu__nav}>
                    <ul>
                        <li>
                            <HeaderMenuItem 
                                href='/' 
                                linkText='FFA Diamond'
                            />
                        </li>
                        <li>
                            <HeaderMenuItem 
                                href='/' 
                                linkText='FFA Netherite'
                            />
                        </li>
                        <li>
                            <HeaderMenuItem 
                                href='/' 
                                linkText='Duels'
                            />
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export { HeaderMenu }