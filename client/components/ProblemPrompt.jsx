import { Heading, Text, Flex } from '@chakra-ui/react';
import React from 'react';

import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';

export default function ProblemPrompt({ currentProblem }) {
  return (
    <WorkspaceModuleWrapper
      moduleName="problem prompt"
      problemName={currentProblem.name}
    >
      <Flex direction="column" p={4}>
        <Heading>{currentProblem.name}</Heading>
        <Text>{currentProblem.description}</Text>
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
