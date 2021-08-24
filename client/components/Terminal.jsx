import React from 'react';
import { Rnd } from 'react-rnd';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function Terminal() {
  return (
    <Rnd
      default={{
        x: 900,
        y: 900,
        width: '40vw',
        height: '20vh',
      }}
      minWidth={500}
      minHeight={190}
      bounds="window"
    >
      <WorkspaceModuleWrapper>
        <h1>terminal</h1>
      </WorkspaceModuleWrapper>
    </Rnd>
  );
}
