import React from 'react';
import { useSelector } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import ProblemPrompt from './ProblemPrompt';
import ExcalidrawJS from './ExcalidrawJS';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import Terminal from './Terminal';
import bg from '../assets/bg.png';

function Workspace({ currentProblem }) {
  const [history, setHistory] = React.useState([]);
  // const [js, setJs] = React.useState('');
  const js = useSelector((state) => state.editor.code);

  const [isRunning, setIsRunning] = React.useState(false);

  function addHistory(text) {
    const newHistory = [...history, { text }];
    setHistory(newHistory);
  }

  function clearHistory() {
    setHistory([]);
  }

  // function runCode() {
  //   if (isRunning) return false;
  //   setIsRunning(true);
  //   setJs('');
  //   setTimeout(() => {
  //     setJs(js);
  //     setIsRunning(false);
  //   }, 250);
  // }

  return (
    <Flex minHeight="100vh" margin="0px" backgroundImage={bg}>
      {/* problem prompt */}
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
        <CodeEditor
          language="javascript"
          currentProblem={currentProblem}
          // code={js}
          // updateCode={setJs}
          // runCode={runCode}
        />
      </Rnd>

      {/* iframe for running code in the background */}
      <CodeRunner addHistory={addHistory} />

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
        <Terminal
          history={history}
          clearHistory={clearHistory}
          currentProblem={currentProblem}
        />
      </Rnd>
    </Flex>
  );
}

export default Workspace;
