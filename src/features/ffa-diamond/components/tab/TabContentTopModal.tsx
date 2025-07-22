import Image from 'next/image';
import { motion } from 'framer-motion';

import { Modal, Skin3d } from '@/shared/components';
import { useTabStore } from '../../stores';

import styles from './tab.module.css';
import iconMedal from '@/config/assets/svg/icon-medal.svg';
import iconCrown from '@/config/assets/svg/icon-crown.svg';

const TabContentTopModal = ():JSX.Element => {
    const setModalData = useTabStore(state => state.setModalData);
    const modalData = useTabStore(state => state.modalData);
    const { name, kills, deaths, killStreak } = modalData ?? { name: 'jhosuapp', kills: 10, deaths: 10, killStreak: 10 };
    const kdr = kills / deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <Modal
            callBackClose={ ()=> setModalData(null) }
        >
            <motion.div className={ styles.tabContentTopModal__card }>
                <div className={ styles.tabContentTopModal__3d }>
                    <Image className={ styles.tabContentTopModal__crown } src={ iconCrown } alt='Icon crown' />
                    <p className={ styles.tabContentTopModal__name }>
                        <Image className={ styles.tabContentTopModal__medal } src={ iconMedal } alt='Icon medal' />
                        <span>{ name }</span>
                    </p>
                    <Skin3d username={ name } />
                </div>
                <div className={ styles.tabContentTopModal__info }>
                    <h3 className={ styles.tabContentTopModal__info__stats }>Stats</h3>
                    <p>
                        <span>Postion:</span>
                        <span>1</span>
                    </p>
                    <p>
                        <span>Kills:</span>
                        <span>{ kills }</span>
                    </p>
                    <p>
                        <span>Deaths:</span>
                        <span>{ deaths }</span>
                    </p>
                    <p>
                        <span>Kdr:</span>
                        <span>{ deaths !== 0 ? formattedKDR : '0' }</span>
                    </p>
                    <p>
                        <span>Kill streak:</span>
                        <span>{ killStreak }</span>
                    </p>
                </div>
            </motion.div>
        </Modal>
    )
}

export { TabContentTopModal }