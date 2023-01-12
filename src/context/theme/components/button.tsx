import { StyleFunctionProps } from '@chakra-ui/react';

const baseStyle = {
  fontWeight: 'medium',
  borderRadius: 'lg',
};

const variants = {
  primary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['solid']({
      ...props,
      variant: 'solid',
      colorScheme: 'brand',
    }),
  secondary: (props: StyleFunctionProps) =>
    props.theme.components['Button']['variants']['outline']({
      ...props,
      variant: 'outline',
      colorScheme: 'brand',
    }),
};

const button = {
  baseStyle,
  variants,
};

export default button;
