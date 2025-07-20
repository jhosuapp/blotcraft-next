import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import { FfaUsersItemInterface } from '../../interfaces';

import styles from './tab.module.css';
import skin from '@/config/assets/webp/skin.webp';
import iconMedal from '@/config/assets/svg/icon-medal.svg';
import { Skin3d } from '@/shared/components';

type Props =  {
    i: number;
    data: FfaUsersItemInterface;
}

const cardVariants: Variants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

const TabContentTopItem = ({ i, data }: Props) => {
    const position = i + 1;
    return (
        <motion.div
            className={ styles.TabContentTopItem }
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.8 }}
        >
            <div  className={ styles.TabContentTopItem__splash } />
            <motion.div variants={cardVariants} className={ styles.TabContentTopItem__card }>
                {position <= 3 && <Image className={ styles.TabContentTopItem__medal } src={ iconMedal } alt='Icon medal' />}
                <p className={ styles.TabContentTopItem__position }>#{ position }</p>
                <p className={ styles.TabContentTopItem__name }>{data.name}</p>
                <Skin3d username={ data.name } />
            </motion.div>
        </motion.div>
    )
}

export { TabContentTopItem }