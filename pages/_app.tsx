import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { Loader } from '@/shared/components';

import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
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

    return (
        <>
            <Loader />
            <Component {...pageProps} />
        </>
    )
    
}