import styles from './header.module.css';
import { HeaderMenu } from "./HeaderMenuBlot";
import { HeaderLogo } from "./HeaderLogoBlot";
import { HeaderHamburger } from "./HeaderHamburgerBlot";

const Header = ():JSX.Element => {
    return (
        <>
            <header className={styles.header}>
                <HeaderLogo/>
                <div>
                    <HeaderHamburger />
                </div>
            </header>
            <HeaderMenu />
        </>
    )
}

export { Header }