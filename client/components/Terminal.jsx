import React from 'react';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function Terminal({ currentProblem }) {
  const { name } = currentProblem;
  return (
    <WorkspaceModuleWrapper moduleName="terminal" problemName={name}>
      <h1>terminal</h1>
    </WorkspaceModuleWrapper>
  );
}
