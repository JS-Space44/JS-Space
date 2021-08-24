import React from 'react';

import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function CodeEditor({ currentProblem }) {
  const { name } = currentProblem;
  return (
    <WorkspaceModuleWrapper moduleName="code editor" problemName={name}>
      <h1> CodeEditor</h1>
    </WorkspaceModuleWrapper>
  );
}
