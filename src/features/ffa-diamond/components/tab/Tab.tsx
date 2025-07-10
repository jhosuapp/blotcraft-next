import { useTranslation } from 'react-i18next';
import styles from './tab.module.css';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';

const Tab = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');

    return (
        <section className={ styles.tab }>
            <section className={ styles.tabButtons }>
                <TabButton 
                    text={ t('allUsers') }
                    category='all'
                />
                <TabButton 
                    text={ t('top10Deaths') }
                    category='deaths'
                />
                <TabButton 
                    text={ t('top10Kills') }
                    category='kills'
                />
                <TabButton 
                    text={ t('top10Streak') }
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