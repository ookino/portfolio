import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

import { getLayout } from '@/components/common/layout';
import { Provider } from '@/context/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      {getLayout(
        <>
          <Component {...pageProps} />
          <Analytics />
        </>,
      )}
    </Provider>
  );
}
