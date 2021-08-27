import React, { useState, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
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
  const history = useSelector((state) => state.editor.history);
  const [codeEditorDraggable, setCodeEditorDraggable] = useState(false);
  const [excalidrawDraggable, setExcalidrawDraggable] = useState(false);
  const [terminalDraggable, setTerminalDraggable] = useState(false);
  const [problemPromptDraggable, setProblemPromptDraggable] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
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
        setCodeEditorDraggable(!codeEditorDraggable);
        break;
      case 'terminal':
        setTerminalDraggable(!terminalDraggable);
        break;
      case 'excalidraw':
        setExcalidrawDraggable(!excalidrawDraggable);
        break;
      default:
        break;
    }
  }

  return (
    <Flex height="100%" minHeight="100vh" p={2} backgroundImage={bg}>
      {/* problem prompt */}
      <Rnd
        default={{
          x: 30,
          y: 30,
          width: '45%',
          height: 425,
        }}
        bounds="parent"
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
      {/* excalidraw */}
      <Rnd
        default={{
          x: 30,
          y: 500,
          width: '45%',
          height: 525,
        }}
        bounds="parent"
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
          x: 900,
          y: 30,
          width: '45%',
          height: 425,
        }}
        bounds="parent"
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
      <CodeRunner />

      {/* terminal */}
      <Rnd
        default={{
          x: 900,
          y: 500,
          width: '45%',
          height: 525,
        }}
        bounds="parent"
        resizeGrid={[10, 10]}
        dragGrid={[10, 10]}
        disableDragging={terminalDraggable}
      >
        <Terminal
          history={history}
          currentProblem={currentProblem}
          toggleDrag={toggleModuleDrag}
          draggable={terminalDraggable}
        />
      </Rnd>
    </Flex>
  );
}

export default connect(mapStateToProps, null)(Workspace);
