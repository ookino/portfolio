import { extendTheme, theme as baseTheme, type ThemeConfig, type Colors } from '@chakra-ui/react';

import { themeColors } from './colors';
import * as components from './components';
import * as foundations from './foundations';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const colors: Colors = {
  ...baseTheme.colors,
  gray: themeColors.gray,
};

export const theme: Record<string, any> = extendTheme({
  ...foundations,
  components: { ...components },
  colors,
  config,
});
