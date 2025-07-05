import styles from './header.module.css';
import { HeaderMenu } from "./HeaderMenuBlot";
import { HeaderLogo } from "./HeaderLogoBlot";
import { HeaderHamburger } from "./HeaderHamburgerBlot";
import { Button } from '@/shared/components';

const Header = ():JSX.Element => {
    return (
        <>
            <header className={styles.header}>
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