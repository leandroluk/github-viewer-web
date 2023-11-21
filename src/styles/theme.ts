import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  initialColorMode: 'system',
  useSystemColorMode: true,
  fonts: {
    body: 'Inter, sans-serif',
    heading: 'Inter, sans-serif',
  },
  colors: {
    ecotrace: {
      50: '#ebfbe9',
      100: '#dbf3da',
      200: '#b8e5b5',
      300: '#93d58e',
      400: '#74c86d',
      500: '#60bf58',
      600: '#54bb4c',
      700: '#43a53c',
      800: '#399333',
      900: '#2b7f28',
    },
  },
});

export default customTheme;
