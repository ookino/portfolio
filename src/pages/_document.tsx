import { ColorModeScript } from '@chakra-ui/react';
import { Head, Html, Main, NextScript } from 'next/document';

import { theme } from '@/context/theme';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ scrollBehavior: 'smooth' }}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
