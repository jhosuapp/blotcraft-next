'use client';

import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const PageTransition = ({ children }: Props):JSX.Element => {
    const router = useRouter();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className='w-full min-h-[100vh]'
                key={router.route}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 0.75,
                }}
                variants={{
                    initialState: {
                        opacity: 0,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    animateState: {
                        opacity: 1,
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                    },
                    exitState: {
                        clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                    },
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}

export { PageTransition }