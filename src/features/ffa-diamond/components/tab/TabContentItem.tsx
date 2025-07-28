import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { fadeInMotion } from "@/shared/motion";
import { FfaUsersItemInterface } from "../../interfaces";
import { useTabStore } from "../../stores";

import styles from './tab.module.css';

type Props = {
    data: FfaUsersItemInterface;
    index: number;
}

const TabContentItem = ({ data, index }:Props):JSX.Element => {
    const setModalData = useTabStore(state => state.setModalData);
    const setShowModal = useTabStore(state => state.setShowModal);
    const kdr = data.kills / data.deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <motion.div 
            {...fadeInMotion(index * 0.05, index * 0.05)}
            className={ `${styles.tabContentBodyItem}` }
            onClick={ ()=> { setModalData(data), setShowModal(true) } }
        >
            <p>{ data.position }</p>
            <p>
                <Image src={ `https://mc-heads.net/avatar/${data.name}` } width={20} height={20} alt="steve head" />
                { data.name }
            </p>
            <p>{ data.kills }</p>
            <p>{ data.deaths }</p>
            <p>{ data.killStreak }</p>
            <p>{ data.deaths !== 0 ? formattedKDR : '0' }</p>
            <p>{ data.points }</p>
        </motion.div>
    )
}

export { TabContentItem }