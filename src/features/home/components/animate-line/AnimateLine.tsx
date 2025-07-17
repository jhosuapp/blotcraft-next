import { SVGProps, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import styles from './animateLine.module.css';
import { animatePath } from './animateLine.motion';

const AnimateLine = ():JSX.Element => {
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end start']
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.article className={ styles.animateLine } ref={ container }>
            <svg 
                className={`animate-line`} 
                viewBox="0 0 1914 1086" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    style={{ pathLength }}
                    exit={{ pathLength: 0 }}
                    d="M20 20C484 65 792 910 414 1009C140.108 1080.73 92.2717 873.855 216 716.5C359.5 534 851.5 697 928.597 730.674C954.188 741.851 974.581 752.211 990.827 761.58C1039.16 789.45 1070.54 839.725 1109.6 879.562C1122.8 893.025 1138.05 907.612 1155.04 922.262C1231.15 987.886 1340.21 975.128 1423.52 918.925L1469.57 887.854C1488.75 874.914 1511.36 868 1534.5 868H1537.86C1579.2 868 1618.46 886.093 1645.32 917.517C1650.43 923.495 1655.03 929.889 1659.08 936.633L1687.77 984.447C1697.52 1000.7 1709.96 1015.17 1724.56 1027.26C1756.99 1054.09 1798.34 1067.72 1840.38 1065.41L1893.5 1062.5" stroke="url(#paint0_linear_293_7282)" strokeWidth="40" strokeLinecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_293_7282" x1="972.748" y1="199" x2="972.748" y2="1087.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#E6E7FE"/>
                        <stop offset="1" stopColor="#E1E2E9"/>
                    </linearGradient>
                </defs>
            </svg>
        </motion.article>
    )
}

const AnimateLineSecondary = ():JSX.Element => {

    return (
        <motion.article className={ styles.animateLineSecondary }>
            <svg 
                width="437" 
                viewBox="0 0 437 648" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.path 
                    {...animatePath()}
                    d="M22.9951 17.5C22.997 476 -54 559 418.998 630.5" stroke="url(#paint0_linear_2199_154)" stroke-width="35" stroke-linecap="round"
                />
                <defs>
                    <linearGradient id="paint0_linear_2199_154" x1="218.675" y1="17.5" x2="218.675" y2="630.5" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E6E7FE"/>
                        <stop offset="1" stop-color="#E1E2E9"/>
                    </linearGradient>
                </defs>
            </svg>
        </motion.article>
    )
}

export { AnimateLine, AnimateLineSecondary }