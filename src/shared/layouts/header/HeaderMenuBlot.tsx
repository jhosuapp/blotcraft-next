import { useTranslation } from 'react-i18next';
import { useMenuStore } from '@/shared/stores';
import { HeaderMenuItem } from './HeaderMenuItemBlot';
import { HeaderMenuNetwork } from './HeaderMenuNetworkBlot';

import styles from './header.module.css';
import discord from '@/config/assets/svg/icon-discord.svg';
import instagram from '@/config/assets/svg/icon-instagram.svg';
import youtube from '@/config/assets/svg/icon-youtube.svg';

const HeaderMenu = ():JSX.Element => {
    const { t } = useTranslation('translation');
    const hamburger = useMenuStore( state => state.hamburger );

    return (
        <section className={`${styles.headerMenu} ${hamburger && styles.headerMenuOpen}`}>
            <article className={styles.headerMenu__bg}></article>
            <section className={styles.headerMenu__content}>
                <article className={styles.headerMenu__info}>
                    <div className={styles.headerMenu__info__item}>
                        <p className={styles.headerMenu__info__title}>{ t('header.talk') }</p>
                        <a className={styles.headerMenu__info__description} href='mailto:blotcraftnetwork@gmail.com '>blotcraftnetwork@gmail.com </a>
                    </div>
                    <div className={styles.headerMenu__info__item}>
                        <p className={styles.headerMenu__info__title}>{ t('header.social') }</p>
                        <div className={styles.headerMenu__info__networks}>
                            <HeaderMenuNetwork 
                                src={discord} 
                                href='https://discord.gg/blotcraft'
                                alt='discord'
                            />
                            <HeaderMenuNetwork 
                                src={instagram} 
                                href='https://discord.gg/blotcraft'
                                alt='instagram'
                            />
                            <HeaderMenuNetwork 
                                src={youtube} 
                                href='https://youtube.gg/blotcraft'
                                alt='discord'
                            />
                        </div>
                    </div>
                </article>
                <nav className={styles.headerMenu__nav}>
                    <ul>
                        <li>
                            <HeaderMenuItem 
                                href='/' 
                                linkText={ t('header.link1') }
                            />
                        </li>
                        <li>
                            <HeaderMenuItem 
                                href='/ffa-diamond' 
                                linkText={ t('header.link2') }
                            />
                        </li>
                        <li>
                            <HeaderMenuItem 
                                href='/ffa-netherite' 
                                linkText={ t('header.link3') }
                            />
                        </li>
                        <li>
                            <HeaderMenuItem 
                                href='/test' 
                                linkText={ t('header.link4') }
                            />
                        </li>
                    </ul>
                </nav>
            </section>
        </section>
    )
}

export { HeaderMenu }