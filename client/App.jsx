import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Workspace from './components/Workspace';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Route exact path="/">
            <Workspace />
          </Route>
          <Route path="/login">
            <AuthForm />
          </Route>
        </Layout>
      </ChakraProvider>
    </Router>
  );
}

export default App;
