import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import Excalidraw from '@excalidraw/excalidraw';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import InitialData from '../initialData';

export default function ExcalidrawJS() {
  const excalidrawRef = useRef(null);
  return (
    <Rnd
      default={{
        x: 20,
        y: 650,
        width: '40vw',
        height: '40vh',
      }}
      minWidth={200}
      minHeight={190}
      bounds="parent"
      disableDragging
    >
      <WorkspaceModuleWrapper>
        <Excalidraw
          ref={excalidrawRef}
          initialData={InitialData}
          onChange={(elements, state) =>
            console.log('Elements :', elements, 'State : ', state)
          }
          onPointerUpdate={(payload) => console.log(payload)}
          onCollabButtonClick={() =>
            window.alert('You clicked on collab button')
          }
          name="Custom name of drawing"
          UIOptions={{ canvasActions: { loadScene: false } }}
        />
      </WorkspaceModuleWrapper>
    </Rnd>
  );
}
