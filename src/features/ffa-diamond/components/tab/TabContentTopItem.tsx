import { AnimatePresence, motion } from 'framer-motion';
import { Skin3d } from '@/shared/components';
import { FfaUsersItemInterface } from '../../interfaces';
import { useTabStore } from '../../stores';

import styles from './tab.module.css';
import { fadeInMotion } from '@/shared/motion';

type Props = {
    data: FfaUsersItemInterface;
    index: number;
}

const TabContentTopItem = ({ data, index }:Props):JSX.Element => {
    const setModalData = useTabStore(state => state.setModalData);
    const setShowModal = useTabStore(state => state.setShowModal);

    return (
        <motion.article 
            {...fadeInMotion(index * 0.05, index * 0.05)}
            className={ styles.tabContentItem }
            onClick={ ()=> { setModalData(data), setShowModal(true)} }
        >
            <p>{ index + 1 }</p>
            <Skin3d 
                username={ data.name } 
                width={100} 
                height={250} 
            />
        </motion.article>
    )
}

export { TabContentTopItem }