import Image from 'next/image';
import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import styles from './modal.module.css';
import iconClose from '@/config/assets/svg/icon-close.svg';
import { fadeInMotion, fadeUpMotion } from '@/shared/motion';

type Props = {
    children: ReactNode;
    callBackClose: ()=> void;
}

const Modal = ({ children, callBackClose }:Props):JSX.Element => {
    const [mounted, setMounted] = useState(false);
    const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setMounted(true);
        setPortalRoot(document.getElementById('portal-modal'));
    }, []);
    
    if (!mounted || !portalRoot) return null;

    return createPortal(
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
        </motion.section>,
        portalRoot
    )
}

export { Modal }