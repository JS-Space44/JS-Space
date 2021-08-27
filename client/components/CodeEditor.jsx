/* eslint-disable no-shadow */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
import debounce from 'lodash.debounce';
import { Button, Flex, Box } from '@chakra-ui/react';
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

export default function CodeEditor({ language, currentProblem, toggleDrag }) {
  const { name } = currentProblem;
  const code = useSelector((state) => state.editor.code);
  const [value, setValue] = useState(code);
  const dispatch = useDispatch();
  const setCode = (code) => dispatch(actions.loadCode(code));
  const setRunCode = (execute) => dispatch(actions.runCode(execute));
  const clearCode = () => dispatch(actions.clearCode());

  const debouncedUpdate = debounce((value) => {
    setCode(value);
  }, 500);

  const handleChange = (editor, data, value) => {
    setValue(value);
    debouncedUpdate(value);
  };

  return (
    <WorkspaceModuleWrapper
      moduleName="code editor"
      problemName={name}
      toggleDrag={toggleDrag}
    >
      <Flex direction="column" height="100%" backgroundColor="#304148">
        <CodeMirror
          value={value}
          options={{
            mode: language,
            theme: 'oceanic-next',
            scrollbarStyle: 'native',
            lineNumbers: true,
            lint: true,
            hintOptions: true,
            fontSize: '16px',
            matchBrackets: true,
            autoCloseBrackets: true,
            indentUnit: 2,
            tabSize: 2,
          }}
          onBeforeChange={handleChange}
        />
        <Box alignSelf="flex-end" mr={4}>
          <Button onClick={() => setRunCode(true)}>Run</Button>
          <Button ml={4} onClick={() => clearCode()}>
            Clear
          </Button>
        </Box>
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
