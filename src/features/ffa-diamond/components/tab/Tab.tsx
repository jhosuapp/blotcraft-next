import styles from './tab.module.css';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';

const Tab = ():JSX.Element => {
    return (
        <section className={ styles.tab }>
            <section className={ styles.tabButtons }>
                <TabButton 
                    text='Todos los usuarios'
                    category='all'
                />
                <TabButton 
                    text='Top 10 muertes'
                    category='deaths'
                />
                <TabButton 
                    text='Top 10 asesinatos'
                    category='kills'
                />
                <TabButton 
                    text='Top 10 rachas de asesinatos'
                    category='ks'
                />
            </section>
            <section className={ styles.tabContent }>
                <TabContent
                    category='all'
                />
            </section>
        </section>
    )
}

export { Tab }