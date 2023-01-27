import { ChakraProvider } from '@chakra-ui/react';
import { createContext, useMemo, useState } from 'react';

import { data } from './data';
import { theme } from './theme';

import Fonts from '@/components/common/fonts';
import Seo from '@/components/common/seo';
import { IContext } from '@/interfaces';

const Context = createContext<IContext>({
  data,
});

const Provider = ({ children, ...props }: any) => {
  const [defaultTheme, setDefaultTheme] = useState(theme);

  const memoizedTheme = useMemo(() => ({ defaultTheme, setDefaultTheme }), [defaultTheme]);
  const memoizedData = useMemo(() => ({ data }), []);
  return (
    <Context.Provider value={memoizedData} {...props}>
      <Seo />
      <ChakraProvider theme={memoizedTheme.defaultTheme}>
        <Fonts />
        {children}
      </ChakraProvider>
    </Context.Provider>
  );
};

const Consumer = Context.Consumer;
export { Provider, Consumer, Context };
