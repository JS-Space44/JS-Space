import React from 'react';

import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function CodeEditor({ currentProblem }) {
  return (
    <WorkspaceModuleWrapper
      moduleName="code editor"
      problemName={currentProblem.name}
    >
      <h1> CodeEditor</h1>
    </WorkspaceModuleWrapper>
  );
}
