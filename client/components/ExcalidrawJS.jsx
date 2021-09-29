import React, { useRef } from 'react';
import Excalidraw from '@excalidraw/excalidraw';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import InitialData from '../initialData/excalidraw';

export default function ExcalidrawJS({ toggleDrag }) {
  const excalidrawRef = useRef(null);
  return (
    <WorkspaceModuleWrapper moduleName="excalidraw" toggleDrag={toggleDrag}>
      <Excalidraw
        ref={excalidrawRef}
        initialData={InitialData}
        name="Custom name of drawing"
        UIOptions={{ canvasActions: { loadScene: false } }}
      />
    </WorkspaceModuleWrapper>
  );
}
