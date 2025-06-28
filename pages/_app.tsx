import type { AppProps } from 'next/app';
import { Loader } from '@/shared/components';

import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Loader />
            <Component {...pageProps} />
        </>
    )
    
}