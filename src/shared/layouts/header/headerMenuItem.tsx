import Link from "next/link";
import styles from './header.module.css';

type Props = {
    href: string;
    linkText: string;
}

const HeaderMenuItem = ({ href, linkText }:Props):JSX.Element => {
    return (
        <Link href={ href } className={styles.HeaderMenuItem}>
            {linkText.split('').map((char, index) => (
                <p
                    key={index}
                    style={{ animationDelay: `${0.1 + index * 0.025}s` }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </p>
            ))}
        </Link>
    )
}

export { HeaderMenuItem }