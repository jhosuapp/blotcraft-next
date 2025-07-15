import Image from 'next/image';

import styles from './footer.module.css';
import icon from '@/config/assets/svg/icon-arrow.svg';
import { useRouter } from 'next/router';
import { Transalations } from '@/shared/interfaces';
import { useLenisStore } from '@/shared/stores';

type Props = {
    textPage: string;
    linkPage: string;
    translation: Transalations;
}

const FooterContent = ({ textPage, linkPage, translation }:Props):JSX.Element => {
    const router = useRouter();
    const lenis = useLenisStore(state => state.lenis);

    const handleDelay = (url: string) => {
        lenis?.scrollTo(0, {
          duration: 0.65,
        });
      
        setTimeout(() => {
          router.push(url);
        }, 500);
    };

    return (
        <section className={ styles.footerContent }>
            <article className={ styles.footerContent__disclaimer }>
                <p>{ translation('footer.nextTitle') }</p>
                <p>{ translation('footer.nextDescription') }</p>
            </article>
            <article className={ styles.footerContent__preview }>
                <p>{ textPage }</p>
                <div 
                    onClick={ ()=> handleDelay(linkPage) }
                    className={ styles.footerContent__nextPage }
                >
                    <p>{ translation('footer.nextCta') }</p>
                    <div></div>
                    <Image src={ icon } alt='siguiente blotcraft' />
                </div>
            </article>
        </section>
    )
}

export { FooterContent }