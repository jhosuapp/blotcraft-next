import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeUpMotion } from '@/shared/motion';
import { useTabStore } from '../../stores';
import { TabContent } from './TabContent';
import { TabContentTopModal } from './TabContentTopModal';
import { TabContentTop } from './TabContentTop';

import styles from './tab.module.css';

const Tab = ():JSX.Element => {
    const { t } = useTranslation('ffaDiamond');
    const showModal = useTabStore(state => state.showModal);

    return (
        <motion.section 
            className={ styles.tab }
            {...fadeUpMotion(0.54, 0.16)}
        >
            {/* Tops */}
            <TabContentTop translation={ t } />
            {/* Tab content table */}
            <TabContent translation={ t } />
            {/* Tab modal detail info user */}
            <AnimatePresence>
                {showModal && <TabContentTopModal translation={ t } /> }
            </AnimatePresence>
        </motion.section>
    )
}

export { Tab }