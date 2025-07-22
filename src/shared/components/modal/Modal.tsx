import Image from 'next/image';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import styles from './modal.module.css';
import iconClose from '@/config/assets/svg/icon-close.svg';
import { fadeInMotion, fadeUpMotion } from '@/shared/motion';

type Props = {
    children: ReactNode;
    callBackClose: ()=> void;
}

const Modal = ({ children, callBackClose }:Props):JSX.Element => {
    return (
        <motion.section
            className={ styles.modal }
            {...fadeInMotion()}
        >
            <article className={ styles.modalBg } onClick={ callBackClose }></article>
            <motion.article 
                className={ styles.modalContent }
                {...fadeUpMotion(0, 0.1)}
            >
                <button className={ styles.modalClose } onClick={ callBackClose }>
                    <Image src={ iconClose } alt='icon close'/>
                </button>
                { children }
            </motion.article>
        </motion.section>
    )
}

export { Modal }