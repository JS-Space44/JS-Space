import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { Flex } from '@chakra-ui/react';
import { Rnd } from 'react-rnd';
import ProblemPrompt from './ProblemPrompt';
import ExcalidrawJS from './ExcalidrawJS';
import CodeEditor from './CodeEditor';
import CodeRunner from './CodeRunner';
import Terminal from './Terminal';
import bg from '../assets/bg.png';
import actions from '../actions/actions';

const mapStateToProps = ({ business, auth }) => ({
  problems: business.problems,
  currentProblem: business.current,
  isLoggedIn: auth.isLoggedIn,
  userId: auth.user_id,
});

function Workspace({ currentProblem, isLoggedIn, userId }) {
  const [history, setHistory] = useState([]);
  const [codeEditorDraggable, setCodeEditorDraggable] = useState(false);
  const [excalidrawDraggable, setExcalidrawDraggable] = useState(false);
  const [terminalDraggable, setTerminalDraggable] = useState(false);
  const [problemPromptDraggable, setProblemPromptDraggable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      console.log(isLoggedIn);
      dispatch(actions.getProblems(userId));
    } else {
      // sends session cookie to server to verify if user already logged in 
      dispatch(actions.verifyLogin());
    }
  }, [isLoggedIn, userId]);

  function toggleModuleDrag(name) {
    switch (name) {
      case 'problem prompt':
        setProblemPromptDraggable(!problemPromptDraggable);
        break;
      case 'code editor':
        console.log('code editor');
        setCodeEditorDraggable(!codeEditorDraggable);
        break;
      case 'terminal':
        console.log('terminal');
        setTerminalDraggable(!terminalDraggable);
        break;
      case 'excalidraw':
        console.log('excalidraw');
        setExcalidrawDraggable(!excalidrawDraggable);
        break;
      default:
        break;
    }
  }

  function addHistory(text) {
    const newHistory = [...history, { text }];
    setHistory(newHistory);
  }

  function clearHistory() {
    setHistory([]);
  }

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
        disableDragging={problemPromptDraggable}
      >
        <ProblemPrompt
          toggleDrag={toggleModuleDrag}
          draggable={problemPromptDraggable}
          currentProblem={currentProblem}
        />
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
        disableDragging={excalidrawDraggable}
      >
        <ExcalidrawJS
          toggleDrag={toggleModuleDrag}
          draggable={excalidrawDraggable}
        />
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
        disableDragging={codeEditorDraggable}
      >
        <CodeEditor
          language="javascript"
          currentProblem={currentProblem}
          toggleDrag={toggleModuleDrag}
          draggable={codeEditorDraggable}
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
        disableDragging={terminalDraggable}
      >
        <Terminal
          history={history}
          clearHistory={clearHistory}
          currentProblem={currentProblem}
          toggleDrag={toggleModuleDrag}
          draggable={terminalDraggable}
        />
      </Rnd>
    </Flex>
  );
}

export default connect(mapStateToProps, null)(Workspace);
