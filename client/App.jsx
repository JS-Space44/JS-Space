import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import theme from './theme';
import Layout from './components/Layout';
import Workspace from './components/Workspace';
import ProblemPrompt from './components/ProblemPrompt';
import ExcalidrawJS from './components/ExcalidrawJS';
import CodeEditor from './components/CodeEditor';
import Terminal from './components/Terminal';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Workspace>
          <ProblemPrompt />
          <ExcalidrawJS />
          <CodeEditor />
          <Terminal />
        </Workspace>
      </Layout>
    </ChakraProvider>
  );
}
