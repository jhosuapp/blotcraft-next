import React, { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { anim, text, } from './pageTransition.motion';
import { routes } from '@/shared/constants';

import styles from './pageTransition.module.css';
import { SVG } from './PageTransitionSVG';
import { useLoaderStore } from '@/shared/stores';

type Props = {
    children: ReactNode;
}

const PageTransition = ({ children }:Props):JSX.Element => {
    const router = useRouter();
    const isLoadingDelay = useLoaderStore( state => state.isLoadingDelay );
    const [dimensions, setDimensions] = useState({
        width: null,
        height: null
    });

    useEffect( () => {
        function resize(){
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
        }
    }, []);

    return (
        <div className={ `${styles.curve} ${isLoadingDelay && 'animate-fadeIn'}` }>
            <div style={{opacity: dimensions.width == null ? 1 : 0}} className={ `${styles.curve__bg} ${isLoadingDelay && '!hidden'}` } />
            <motion.p className={ `${styles.curve__route} ${isLoadingDelay && '!hidden'}` } {...anim(text)}>
                {routes[router.route]}
            </motion.p>
            {dimensions.width != null && (
                <div className={ `${styles.curve__svg} ${isLoadingDelay && '!hidden'}` }>
                    <SVG {...dimensions}/>
                </div>
            )}
            { children }
        </div>
    )
}

export { PageTransition }