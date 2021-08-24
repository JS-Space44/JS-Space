import React from 'react';

import { Rnd } from 'react-rnd';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function CodeEditor() {
  return (
    <Rnd
      default={{
        x: 900,
        y: 20,
        width: '40vw',
        height: '65vh',
      }}
      minWidth={500}
      minHeight={190}
      bounds="window"
    >
      <WorkspaceModuleWrapper>
        <h1> CodeEditor</h1>
      </WorkspaceModuleWrapper>
    </Rnd>
  );
}
