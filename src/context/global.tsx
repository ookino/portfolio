import { ChakraProvider } from '@chakra-ui/react';
import { createContext, useMemo, useState } from 'react';

import Fonts from '../components/global/fonts';
import Seo from '../components/global/seo';

import { theme } from './theme';

const Context = createContext<any>(null);
const Provider = ({ children, ...props }: any) => {
  const [defaultTheme, setDefaultTheme] = useState(theme);

  const value = useMemo(() => ({ defaultTheme, setDefaultTheme }), [defaultTheme]);

  return (
    <Context.Provider value={value} {...props}>
      <Seo />
      <ChakraProvider theme={value.defaultTheme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
