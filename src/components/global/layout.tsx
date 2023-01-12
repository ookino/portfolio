import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactNode, ReactElement } from 'react';

import AudioPlayer from './audio-player';
import Footer from './footer';
import Navigation from './navigation';

export interface ILayout {
  children: ReactNode;
}

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Layout = ({ children }: ILayout) => {
  return (
    <Box>
      <Navigation />
      {/* <AudioPlayer /> */}
      <Box px={8} py={32} zIndex={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export const getLayout = (page: ReactElement) => <Layout>{page}</Layout>;
