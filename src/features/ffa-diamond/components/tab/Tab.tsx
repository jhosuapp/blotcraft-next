import { AnimatePresence } from 'framer-motion';
import { useTabStore } from '../../stores';
import styles from './tab.module.css';
import { TabContent } from './TabContent';
import { TabContentTopModal } from './TabContentTopModal';

const Tab = ():JSX.Element => {
    const modalData = useTabStore(state => state.modalData);
    return (
        <section className={ styles.tab }>
            {/* Tab content table */}
            <section className={ styles.tabContent }>
                <TabContent />
            </section>
            {/* Tab modal detail info user */}
            <AnimatePresence>
                {modalData && <TabContentTopModal /> }
            </AnimatePresence>
        </section>
    )
}

export { Tab }