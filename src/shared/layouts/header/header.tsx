import styles from './header.module.css';
import { HeaderMenu } from "./HeaderMenu";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderHamburger } from "./HeaderHamburger";

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