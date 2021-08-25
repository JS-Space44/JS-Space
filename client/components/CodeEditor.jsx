import React, { useState } from 'react';
import actions from '../actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Controlled as CodeMirror } from 'react-codemirror2';
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

export default function CodeEditor({ currentProblem }) {
  const { name } = currentProblem;

  const code = useSelector((state) => state.editor.code);
  const dispatch = useDispatch();

  const setCode = (code) => dispatch(actions.loadCode(code));

  return (
    <WorkspaceModuleWrapper moduleName="code editor" problemName={name}>
      <span>
        <button onClick={() => {
          console.log('CLEAR CODE');
          dispatch(actions.clearCode())
        }
        }>clear</button>
        <button>run</button>
      </span>
      <CodeMirror
        value={code}
        options={{
          mode: 'text/javascript',
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
        editorDidMount={(editor) => {
          editor.setSize('100%');
        }}
        onBeforeChange={(editor, data, value) => {
          const optionObj = {
            completeSingle: false,
          };
          setCode(value);
          editor.setOption('lint', optionObj);
          editor.setOption('hintOptions', optionObj);
        }}
        onChange={(editor, data, value) => {
          editor.showHint();
          setCode(value);
        }}
      />
    </WorkspaceModuleWrapper>
  );
}
