import styles from './header.module.css';
import { HeaderMenu } from "./headerMenu";
import { HeaderLogo } from "./headerLogo";
import { HeaderHamburger } from "./headerHamburger";

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