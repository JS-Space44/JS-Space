import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import debounce from 'lodash.debounce';
import { Button } from '@chakra-ui/react';
import actions from '../actions/actions';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';
import 'codemirror/addon/lint/lint.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/theme/oceanic-next.css';
import 'codemirror/lib/codemirror.css';

require('codemirror/mode/css/css');
require('codemirror/mode/javascript/javascript');

export default function CodeEditor({
  currentProblem,
  code,
  runCode,
  updateCode,
  language,
}) {
  const { name } = currentProblem;

  const [value, setValue] = useState(code);

  const debouncedUpdate = debounce((value) => {
    updateCode(value);
  }, 500);

  const handleChange = (editor, data, value) => {
    setValue(value);
    debouncedUpdate(value);
  };

  // const code = useSelector((state) => state.editor.code);
  const dispatch = useDispatch();

  // const setCode = (code) => dispatch(actions.loadCode(code));

  return (
    <WorkspaceModuleWrapper moduleName="code editor" problemName={name}>
      <span>
        <button
          onClick={() => {
            console.log('CLEAR CODE');
            dispatch(actions.clearCode());
          }}
        >
          clear
        </button>
        <button>run</button>
      </span>
      <CodeMirror
        value={value}
        options={{
          mode: language,
          theme: 'oceanic-next',
          scrollbarStyle: 'native',
          lineNumbers: true,
          lint: true,
          hintOptions: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          indentUnit: 2,
          tabSize: 2,
        }}
        D
        onBeforeChange={handleChange}
        // editorDidMount={(editor) => {
        //   editor.setSize('100%');
        // }}
        // onBeforeChange={(editor, data, value) => {
        //   const optionObj = {
        //     completeSingle: false,
        //   };
        //   setCode(value);
        //   editor.setOption('lint', optionObj);
        //   editor.setOption('hintOptions', optionObj);
        // }}
        // onChange={(editor, data, value) => {
        //   editor.showHint();
        //   setCode(value);
        // }}
      />
      <Button onClick={runCode}>Run</Button>
    </WorkspaceModuleWrapper>
  );
}
