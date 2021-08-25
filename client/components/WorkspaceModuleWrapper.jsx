import { LockIcon } from '@chakra-ui/icons';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';
import React from 'react';

export default function WorkspaceModuleWrapper({
  children,
  moduleName,
  problemName,
}) {
  return (
    <Flex
      direction="column"
      h="100%"
      minHeight="100%"
      pt={0}
      m={0}
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      backgroundColor="white"
      overflow="scroll"
    >
      <Flex
        p={2}
        justifyContent="space-between"
        alignContent="center"
        backgroundColor="gray.200"
      >
        <Box display="flex" alignSelf="center" mx="auto" my={0}>
          <Text>{moduleName}</Text>
          <Text> - </Text>
          <Text>{problemName}</Text>
        </Box>
        <IconButton
          w={4}
          h={4}
          variant="ghost"
          color="gray.600"
          icon={<LockIcon />}
        />
      </Flex>
      {children}
    </Flex>
  );
}
