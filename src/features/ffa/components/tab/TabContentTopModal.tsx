import Image from 'next/image';
import { motion } from 'framer-motion';

import { Modal, Skin3d } from '@/shared/components';
import { useTabStore } from '../../stores';

import styles from './tab.module.css';
import iconMedal from '@/config/assets/svg/icon-medal.svg';
import iconCrown from '@/config/assets/svg/icon-crown.svg';
import { Transalations } from '@/shared/interfaces';

type Props = {
    translation: Transalations;
}

const TabContentTopModal = ({ translation }:Props):JSX.Element => {
    const setShowModal = useTabStore(state => state.setShowModal);
    const modalData = useTabStore(state => state.modalData);
    const { name, kills, deaths, killStreak } = modalData ?? { name: 'notch', kills: 10, deaths: 10, killStreak: 10 };
    const kdr = kills / deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <Modal
            callBackClose={ ()=> setShowModal(false) }
        >
            <motion.div className={ styles.tabContentTopModal__card }>
                <div className={ styles.tabContentTopModal__3d }>
                    <Image className={ styles.tabContentTopModal__crown } src={ iconCrown } alt='Icon crown' />
                    <p className={ styles.tabContentTopModal__name }>
                        <Image className={ styles.tabContentTopModal__medal } src={ iconMedal } alt='Icon medal' />
                        <span>{ name }</span>
                    </p>
                    <Skin3d username={ name } walk autoRotate={false} />
                </div>
                <div className={ styles.tabContentTopModal__info }>
                    <h3 className={ styles.tabContentTopModal__info__stats }>{ translation('userStats') }</h3>
                    <p>
                        <span>{ translation('userPoints') }:</span>
                        <span>{ kills - deaths }</span>
                    </p>
                    <p>
                        <span>{ translation('userKills') }:</span>
                        <span>{ kills }</span>
                    </p>
                    <p>
                        <span>{ translation('userDeaths') }:</span>
                        <span>{ deaths }</span>
                    </p>
                    <p>
                        <span>{ translation('userKDR') }:</span>
                        <span>{ deaths !== 0 ? formattedKDR : '0' }</span>
                    </p>
                    <p>
                        <span>{ translation('userKS') }:</span>
                        <span>{ killStreak }</span>
                    </p>
                </div>
            </motion.div>
        </Modal>
    )
}

export { TabContentTopModal }