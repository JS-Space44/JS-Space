import React, { useState } from 'react';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/theme/twilight.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/javascript-hint';

import 'codemirror/addon/lint/lint.css';

export default function CodeEditor({ currentProblem }) {
  const { name } = currentProblem;
  const [code, setCode] = useState("const a = 0;");

  return (
    <WorkspaceModuleWrapper moduleName="code editor" problemName={name}>
      <h1> CodeEditor</h1>
      <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'neo sidebar',
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
            editor.setSize('100%', 150);
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
            console.log('ON CHANGEEE');
            editor.showHint();
            // setNewRequestBody({
            //   ...newRequestBody,
            //   bodyContent: value,
            //   bodyIsNew: true,
            // });
            setCode(value);
          }}
        />

    </WorkspaceModuleWrapper>
  );
}
