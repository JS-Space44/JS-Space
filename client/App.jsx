import React from 'react';
import { connect } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import theme from './theme';
import Layout from './components/Layout';
import Workspace from './components/Workspace';
import AuthForm from './components/AuthForm';

const mapStateToProps = ({ business }) => ({
  problems: business.problems,
  currentProblem: business.current,
});

function App({ currentProblem }) {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <Layout>
          <Route exact path="/">
            <Workspace currentProblem={currentProblem} />
          </Route>
          <Route path="/login">
            <AuthForm />
          </Route>
        </Layout>
      </ChakraProvider>
    </Router>
  );
}

export default connect(mapStateToProps, null)(App);
