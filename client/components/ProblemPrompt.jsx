import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import Tests from './Tests';

export default function ProblemPrompt({ currentProblem }) {
  const { number, name, description, tests } = currentProblem;
  return (
    <WorkspaceModuleWrapper moduleName="problem prompt" problemName={name}>
      <Flex direction="column" p={8}>
        <Heading mb={6}>
          {number} - {name}
        </Heading>
        <Text mb={8}>{description}</Text>
        <Tests tests={tests} />
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
