import Image from "next/image";
import styles from './header.module.css';

type Props = {
    src: string;
    href: string;
    alt: string;
}

const HeaderMenuNetwork = ({ src, href, alt }:Props):JSX.Element => {
    return (
        <a className={styles.HeaderMenuNetwork} href={ href } target='_blank'>
            <Image src={ src } alt={alt} />
        </a>
    )
}

export { HeaderMenuNetwork }