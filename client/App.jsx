import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import Layout from './components/Layout';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <h1>app goes here</h1>
      </Layout>
    </ChakraProvider>
  );
}
