import React from 'react';
import { LockIcon, UnlockIcon } from '@chakra-ui/icons';
import { Box, Text, Flex, IconButton } from '@chakra-ui/react';

export default function WorkspaceModuleWrapper({
  children,
  moduleName,
  problemName,
  toggleDrag,
  draggable,
}) {
  function handleClick(name) {
    toggleDrag(name);
  }

  return (
    <Flex
      direction="column"
      pt={0}
      m={0}
      border="1px"
      borderRadius="md"
      minHeight="100%"
      height="100%"
      borderColor="gray.200"
      backgroundColor="white"
      overflow="scroll"
    >
      <Flex
        justifyContent="space-between"
        backgroundColor="gray.200"
        alignContent="center"
      >
        <Box
          display="flex"
          alignSelf="center"
          justifyContent="center"
          mx="auto"
          my={0}
        >
          <Text fontSize="sm">{moduleName}</Text>
          <Text> - </Text>
          <Text fontSize="sm">{problemName}</Text>
        </Box>
        <IconButton
          icon={draggable ? <LockIcon /> : <UnlockIcon />}
          size="sm"
          m={0}
          onClick={() => handleClick(moduleName)}
          variant="ghost"
          color="gray.600"
        />
      </Flex>
      {children}
    </Flex>
  );
}
