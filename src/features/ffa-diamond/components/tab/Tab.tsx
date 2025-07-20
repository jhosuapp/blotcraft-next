import { useTranslation } from 'react-i18next';
import styles from './tab.module.css';
import { TabButton } from './TabButton';
import { TabContent } from './TabContent';
import { TabContentTop } from './TabContentTop';
import { useTabStore } from '../../stores';

const Tab = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
     const currentCategory = useTabStore( state => state.currentCategory );

    return (
        <section className={ styles.tab }>
            <section className={ styles.tabButtons }>
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
                <TabButton 
                    text={ t('allUsers') }
                    category='all'
                />
            </section>
            <section className={ styles.tabContent }>
                <TabContentTop 
                    category='deaths'
                />
                <TabContentTop 
                    category='kills'
                />
                <TabContentTop 
                    category='ks'
                />
                {currentCategory === 'all' && (
                    <TabContent
                        category='all'
                    />
                )}
            </section>
        </section>
    )
}

export { Tab }