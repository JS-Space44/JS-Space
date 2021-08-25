import React from 'react';
import { Box } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import ProblemPrompt from './ProblemPrompt';
import ExcalidrawJS from './ExcalidrawJS';
import CodeEditor from './CodeEditor';
import Terminal from './Terminal';
import bg from '../assets/bg.png';

function Workspace({ currentProblem }) {
  return (
    <Box height="100vh" margin="0px" backgroundImage={bg} position="absolute">
      {/* problem prompt */}
      <Rnd
        default={{
          x: 28,
          y: 110,
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
      {/* excalidraw */}
      <Rnd
        default={{
          x: 28,
          y: 775,
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
          x: 765,
          y: 110,
          width: '30vw',
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
          x: 765,
          y: 1000,
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
    </Box>
  );
}

export default Workspace;
