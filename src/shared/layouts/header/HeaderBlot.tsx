import { useTranslation } from 'react-i18next';

import styles from './header.module.css';
import { HeaderMenu } from "./HeaderMenuBlot";
import { HeaderLogo } from "./HeaderLogoBlot";
import { HeaderHamburger } from "./HeaderHamburgerBlot";
import { Button } from '@/shared/components';
import { useScroll } from '@/shared/hooks';

type Props = {
    isDark?: boolean;
}

const Header = ({ isDark }:Props):JSX.Element => {
    const { t } = useTranslation('translation');
    const scrollDirection = useScroll(100);

    return (
        <>
            <header className={`${styles.header} ${styles[`header-${scrollDirection}`]} ${isDark && styles['header--light']}`}>
                <HeaderLogo/>
                <div className={styles.header__ctas}>
                    <Button 
                        text={ t('header.cta') }
                        style='primary'
                        isLight={isDark}
                    />
                    <HeaderHamburger />
                </div>
            </header>
            <HeaderMenu />
        </>
    )
}

export { Header }