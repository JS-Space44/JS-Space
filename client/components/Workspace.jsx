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
import GridLayout from 'react-grid-layout';

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


  const layout = [
    { i: 'problemPrompt', x: 0, y: 0, w: 100, h: 100 },
    { i: 'excaliDraw', x: 0, y: 1, w: 1, h: 2 },
    { i: 'codeEditor', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: 'terminal', x: 1, y: 1, w: 3, h: 2, minW: 2, maxW: 4 },
  ];

  return (
    <GridLayout className="layout" cols={3} rowHeight={400} width={1920}>
      <div key='problemPrompt'>
        <ProblemPrompt
          toggleDrag={toggleModuleDrag}
          draggable={problemPromptDraggable}
          currentProblem={currentProblem}
        />
      </div>
      <div key='excaliDraw'>
      <ExcalidrawJS
        toggleDrag={toggleModuleDrag}
        draggable={excalidrawDraggable}
      />
      </div>
      <div key='codeEditor'>
      <CodeEditor
        language="javascript"
        currentProblem={currentProblem}
        toggleDrag={toggleModuleDrag}
        draggable={codeEditorDraggable}
      />
      </div>
      <div key='terminal'>
      <Terminal
        history={history}
        currentProblem={currentProblem}
        toggleDrag={toggleModuleDrag}
        draggable={terminalDraggable}
      />
      </div>
    </GridLayout>
  );
}

export default connect(mapStateToProps, null)(Workspace);
