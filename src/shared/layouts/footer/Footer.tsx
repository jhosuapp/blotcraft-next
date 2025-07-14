import { useTranslation } from "react-i18next";
import { FooterContent } from "./FooterContent";
import { FooterStars } from "./FooterStars";
import { FooterTop } from "./FooterTop";

import styles from './footer.module.css';

type Props = {
    textPage: string;
    linkPage: string;
}

const Footer = ({ textPage, linkPage }:Props):JSX.Element => {
    const { t } = useTranslation('translation');

    return (
        <footer className={ styles.footer }>
            <FooterTop 
                translation={ t }
            />
            <FooterContent
                textPage={ textPage }
                linkPage={ linkPage }
                translation={ t }
            />
            <FooterStars />
        </footer>
    )
}

export { Footer }