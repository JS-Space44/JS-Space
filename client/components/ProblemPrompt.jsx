import React from 'react';
import { Rnd } from 'react-rnd';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function ProblemPrompt() {
  return (
    <Rnd
      default={{
        x: 20,
        y: 20,
        width: '40vw',
        height: '40vh',
      }}
      minWidth={200}
      minHeight={190}
      bounds="window"
    >
      <WorkspaceModuleWrapper>
        <h1>problem prompt</h1>
      </WorkspaceModuleWrapper>
    </Rnd>
  );
}
