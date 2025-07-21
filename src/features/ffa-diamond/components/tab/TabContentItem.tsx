import Image from "next/image";
import { motion } from "framer-motion";

import { fadeInMotion } from "@/shared/motion";
import { FfaUsersItemInterface } from "../../interfaces";

import steve from '@/config/assets/png/steve.png';
import styles from './tab.module.css';

type Props = {
    data: FfaUsersItemInterface;
}

const TabContentItem = ({ data }:Props):JSX.Element => {

    const kdr = data.kills / data.deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <motion.div 
            className={ `${styles.tabContentBodyItem}` }
            layout
            {...fadeInMotion()}
        >
            <p>
                <Image src={ `https://mc-heads.net/avatar/${data.name}` } width={20} height={20} alt="steve head" />
                { data.name }
            </p>
            <p>{ data.kills }</p>
            <p>{ data.deaths }</p>
            <p>{ data.killStreak }</p>
            <p>{ data.deaths !== 0 ? formattedKDR : '0' }</p>
        </motion.div>
    )
}

export { TabContentItem }