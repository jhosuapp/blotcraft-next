import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';

import Lenis from 'lenis';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { Loader } from '@/shared/components';
import { PageTransition } from '@/shared/layouts';

import './globals.css';

import '@/shared/lib/i18n';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [queryClient] = useState(() => new QueryClient());
    //Scroll smoth
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            lerp: 0.1, 
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
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V2NFQ30ZZ6"></Script>
            <Script>
                {`        
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-V2NFQ30ZZ6');
                `}
            </Script>
            {isLoading ? (
                <Loader />
            ) : (
                <QueryClientProvider client={queryClient}>
                    <PageTransition>
                        <Component {...pageProps} />
                    </PageTransition>
                    {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
                </QueryClientProvider>
            )}
        </>
    )
}