import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Loader } from '@/shared/components';

import './globals.css';
import { PageTransition } from '@/shared/layouts';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    //Scroll smoth
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        });
    
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
    
        return () => {
            lenis.destroy();
        };
    }, []);

    // Hidde loader 
    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <PageTransition>
                    <Component {...pageProps} />
                </PageTransition>
            )}
        </>
    )
    
}