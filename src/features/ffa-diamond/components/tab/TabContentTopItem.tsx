import { AnimatePresence, motion } from 'framer-motion';
import { Skin3d } from '@/shared/components';
import { FfaUsersItemInterface } from '../../interfaces';
import { useTabStore } from '../../stores';

import styles from './tab.module.css';
import { fadeUpSecondaryMotion } from '@/shared/motion';

type Props = {
    data: FfaUsersItemInterface;
    index: number;
}

const TabContentTopItem = ({ data, index }:Props):JSX.Element => {
    const setModalData = useTabStore(state => state.setModalData);
    const setShowModal = useTabStore(state => state.setShowModal);
    const currentCategory = useTabStore(state => state.currentCategory);

    return (
        <AnimatePresence mode="wait">
            <motion.article 
                {...fadeUpSecondaryMotion()}
                className={ styles.tabContentItem }
                onClick={ ()=> { setModalData(data), setShowModal(true)} }
                transition={{ duration: 0.3, delay: index * 0.05 }}
                key={ currentCategory }
            >
                <p>{ index + 1 }</p>
                <Skin3d 
                    username={ data.name } 
                    width={100} 
                    height={250} 
                />
            </motion.article>
        </AnimatePresence>
    )
}

export { TabContentTopItem }