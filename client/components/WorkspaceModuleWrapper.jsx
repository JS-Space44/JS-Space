import { Box, Text, Flex } from '@chakra-ui/react';
import React from 'react';

export default function WorkspaceModuleWrapper({
  children,
  moduleName,
  problemName,
}) {
  return (
    <Box
      h="100%"
      pt={0}
      m={0}
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      backgroundColor="white"
      overflow="scroll"
    >
      <Flex justifyContent="center" backgroundColor="gray.200">
        <Text>{moduleName}</Text>
        <Text> - </Text>
        <Text>{problemName}</Text>
      </Flex>
      {children}
    </Box>
  );
}
