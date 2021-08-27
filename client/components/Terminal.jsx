import { Box, Button, Flex, List, ListIcon, ListItem } from '@chakra-ui/react';
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
      <Flex direction="column" height="100%">
        <List m={2}>
          {history.map((outputLine, index) => (
            <ListItem key={`outputLine -${index + 1}`} color="white">
              <ListIcon as={ChevronRightIcon} color="green.500" />
              {outputLine}
            </ListItem>
          ))}
          <ListItem>
            <ListIcon as={ChevronRightIcon} color="green.500" />
          </ListItem>
        </List>

        <Button mt={8} mr={4} alignSelf="flex-end" onClick={clearHistory}>
          Clear
        </Button>
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
