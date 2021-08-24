import React from 'react';
import { connect } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import theme from './theme';
import Layout from './components/Layout';
import Workspace from './components/Workspace';
import ProblemPrompt from './components/ProblemPrompt';
import ExcalidrawJS from './components/ExcalidrawJS';
import CodeEditor from './components/CodeEditor';
import Terminal from './components/Terminal';

const mapStateToProps = ({ business }) => ({
  problems: business.problems,
  currentProblem: business.current,
});

function App({ currentProblem }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Workspace>
          {/* problem prompt */}
          <Rnd
            default={{
              x: 20,
              y: 20,
              width: '40vw',
              // height: '100%',
            }}
            minWidth={200}
            minHeight={190}
            maxHeight="100%"
            bounds="window"
            resizeGrid={[10, 10]}
            dragGrid={[10, 10]}
          >
            <ProblemPrompt currentProblem={currentProblem} />
          </Rnd>
          {/* excalidraw */}
          <Rnd
            default={{
              x: 20,
              y: 650,
              width: '40vw',
              height: '40vh',
            }}
            minWidth={200}
            minHeight={190}
            bounds="window"
            resizeGrid={[10, 10]}
            dragGrid={[10, 10]}
          >
            <ExcalidrawJS />
          </Rnd>
          {/* code editor */}
          <Rnd
            default={{
              x: 900,
              y: 20,
              width: '40vw',
              height: '65vh',
            }}
            minWidth={500}
            minHeight={190}
            bounds="window"
            resizeGrid={[10, 10]}
            dragGrid={[10, 10]}
          >
            <CodeEditor currentProblem={currentProblem} />
          </Rnd>
          {/* terminal */}
          <Rnd
            default={{
              x: 900,
              y: 900,
              width: '40vw',
              height: '20vh',
            }}
            minWidth={500}
            minHeight={190}
            bounds="window"
            resizeGrid={[10, 10]}
            dragGrid={[10, 10]}
          >
            <Terminal currentProblem={currentProblem} />
          </Rnd>
        </Workspace>
      </Layout>
    </ChakraProvider>
  );
}

export default connect(mapStateToProps, null)(App);
