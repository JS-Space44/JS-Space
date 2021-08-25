import React, { useRef } from 'react';
import Excalidraw from '@excalidraw/excalidraw';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import InitialData from '../initialData';

export default function ExcalidrawJS() {
  const excalidrawRef = useRef(null);
  return (
    <WorkspaceModuleWrapper moduleName="Excalidraw">
      <Excalidraw
        ref={excalidrawRef}
        initialData={InitialData}
        name="Custom name of drawing"
        UIOptions={{ canvasActions: { loadScene: false } }}
      />
    </WorkspaceModuleWrapper>
  );
}
