import React from 'react';
import { Rnd } from 'react-rnd';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function Terminal({ currentProblem }) {
  return (
    <WorkspaceModuleWrapper
      moduleName="terminal"
      problemName={currentProblem.name}
    >
      <h1>terminal</h1>
    </WorkspaceModuleWrapper>
  );
}
