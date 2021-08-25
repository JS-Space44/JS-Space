import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import ProblemPrompt from './ProblemPrompt';
import ExcalidrawJS from './ExcalidrawJS';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import bg from '../assets/bg.png';

function Workspace({ currentProblem }) {
  return (
    <Flex minHeight="100vh" margin="0px" backgroundImage={bg}>
      <Rnd
        default={{
          x: 40,
          y: 40,
          width: '55vw',
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
      <Rnd
        default={{
          x: 40,
          y: 700,
          width: '55vw',
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
          x: 950,
          y: 40,
          height: '40vh',
        }}
        minWidth={500}
        minHeight={300}
        maxHeight="100%"
        bounds="window"
        resizeGrid={[10, 10]}
        dragGrid={[10, 10]}
      >
        <CodeEditor currentProblem={currentProblem} />
      </Rnd>
      {/* terminal */}
      <Rnd
        default={{
          x: 950,
          y: 900,
          width: '30vw',
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
    </Flex>
  );
}

export default Workspace;
