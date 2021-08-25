import { Heading, Text, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import Tests from './Tests';

export default function ProblemPrompt({ currentProblem }) {
  console.log(currentProblem);
  const { id, name, description, tests } = currentProblem;
  return (
    <WorkspaceModuleWrapper moduleName="problem prompt" problemName={name}>
      <Flex direction="column" p={8}>
        <Heading mb={6}>
          {id} - {name}
        </Heading>
        <Text mb={8}>{description}</Text>
        <Tests tests={tests} />
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
