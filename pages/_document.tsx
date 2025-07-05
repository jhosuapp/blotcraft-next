import { Html, Head, Main, NextScript } from 'next/document';
import { minecraft, roboto, blockletter, aeonik } from '@/config/typography';

export default function Document() {
  return (
    <Html lang="es" className={`${minecraft.variable} ${roboto.variable} ${blockletter.variable} ${aeonik.variable}`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}