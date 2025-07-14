import { Transalations } from '@/shared/interfaces';
import styles from './footer.module.css';

type Props = {
    translation: Transalations;
}

const FooterTop = ( { translation }:Props ):JSX.Element => {
    return (
        <section className={ styles.footerTop }>
            <ul>
                <li>{ translation('footer.copyright') } - <a className='hoverLine' href="https://github.com/jhosuapp" target='_blank'>jhosuapp</a></li>
                <li>{ translation('footer.store') } <a className='hoverLine' href="https://store.blotcraft.com/" target='_blank'>store.blotcraft.com</a></li>
                <li>{ translation('footer.built') } <a className='hoverLine' href="https://github.com/jhosuapp" target='_blank'> jhosuapp </a> 💙</li>
            </ul>
        </section>
    )
}

export { FooterTop }