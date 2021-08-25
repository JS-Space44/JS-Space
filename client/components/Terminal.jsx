import { Button } from '@chakra-ui/react';
import React from 'react';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function Terminal({ currentProblem, history, clearHistory }) {
  const { name } = currentProblem;
  return (
    <WorkspaceModuleWrapper moduleName="terminal" problemName={name}>
      <div className="playground-console-container">
        <div className="playground-console">
          <ul>
            {history.map((item, index) => (
              <li key={`item -${index + 1}`} className="console-line">
                <span className="console-carrot">&gt;</span>{' '}
                <span className="console-text">{item.text}</span>
              </li>
            ))}
            <li>
              <span>&gt;</span>
            </li>
          </ul>

          <Button onClick={clearHistory}>Clear</Button>
        </div>
      </div>
    </WorkspaceModuleWrapper>
  );
}
