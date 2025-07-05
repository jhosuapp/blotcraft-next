import styles from './header.module.css';
import { HeaderMenu } from "./HeaderMenuBlot";
import { HeaderLogo } from "./HeaderLogoBlot";
import { HeaderHamburger } from "./HeaderHamburgerBlot";
import { Button } from '@/shared/components';
import { useScroll } from '@/shared/hooks';

const Header = ():JSX.Element => {
    const scrollDirection = useScroll();

    return (
        <>
            <header className={`${styles.header} ${styles[`header-${scrollDirection}`]}`}>
                <HeaderLogo/>
                <div className={styles.header__ctas}>
                    <Button 
                        text="let's talk"
                        style='primary'
                    />
                    <HeaderHamburger />
                </div>
            </header>
            <HeaderMenu />
        </>
    )
}

export { Header }