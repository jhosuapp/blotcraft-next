import styles from './tab.module.css';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';

const Tab = ():JSX.Element => {
    return (
        <section className={ styles.tab }>
            <section className={ styles.tabButtons }>
                <TabButton 
                    text='All'
                    category='all'
                />
                <TabButton 
                    text='Top 10 deaths'
                    category='deaths'
                />
                <TabButton 
                    text='Top 10 kills'
                    category='kills'
                />
                <TabButton 
                    text='Top 10 kill streak'
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