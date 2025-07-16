import Image from "next/image";
import { easeIn, motion } from "framer-motion";

import steve from '@/config/assets/png/steve.png';
import styles from './tab.module.css';
import { FfaUsersItemInterface } from "../../interfaces";

type Props = {
    data: FfaUsersItemInterface;
}

const TabContentItem = ({ data }:Props):JSX.Element => {

    const kdr = data.kills / data.deaths;
    const formattedKDR = parseFloat(kdr.toFixed(2));

    return (
        <motion.div 
            className={ `${styles.tabContentBodyItem}` }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.25,
                ease: easeIn
            }}
            layout
        >
            <p>
                <Image src={ steve } alt="steve head" />
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