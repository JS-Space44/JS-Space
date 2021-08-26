import { Box, Button, List, ListIcon, ListItem } from '@chakra-ui/react';
import React from 'react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function Terminal({
  currentProblem,
  history,
  clearHistory,
  toggleDrag,
}) {
  const { name } = currentProblem;
  return (
    <WorkspaceModuleWrapper
      moduleName="terminal"
      problemName={name}
      toggleDrag={toggleDrag}
    >
      <Box>
        <Box>
          <List>
            {history.map((outputLine, index) => (
              <ListItem key={`outputLine -${index + 1}`}>
                <ListIcon as={ChevronRightIcon} color="green.500" />
                {outputLine}
              </ListItem>
            ))}
            <ListItem>
              <ListIcon as={ChevronRightIcon} color="green.500" />
            </ListItem>
          </List>
        </Box>
        <Button onClick={clearHistory}>Clear</Button>
      </Box>
    </WorkspaceModuleWrapper>
  );
}
