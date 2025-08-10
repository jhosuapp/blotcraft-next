import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUpMotion } from '@/shared/motion';
import { useTabStore } from '../../stores';
import { TabContent } from './TabContent';
import { TabContentTopModal } from './TabContentTopModal';
import { TabContentTop } from './TabContentTop';
import { TabTop1 } from './TabTop1';
import { Container } from '@/shared/components';

import styles from './tab.module.css';

const Tab = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
    const showModal = useTabStore(state => state.showModal);

    return (
        <Container
            className={ styles.tab }
            {...fadeUpMotion(0.54, 0.16)}
        >
            <article className={ styles.tabItemTop }>
                <TabTop1  translation={ t } />
            </article>
            <article className={ styles.tabItemContent }>
                {/* Tops */}
                <TabContentTop translation={ t } />
                {/* Tab content table */}
                <TabContent translation={ t } />
                {/* Tab modal detail info user */}
                <AnimatePresence>
                    {showModal && <TabContentTopModal translation={ t } /> }
                </AnimatePresence>
            </article>
        </Container>
    )
}

export { Tab }