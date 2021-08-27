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
  function handleClick() {
    toggleDrag(moduleName);
  }

  return (
    <Flex
      direction="column"
      pt={0}
      m={0}
      border="1px"
      borderRadius="md"
      height="100%"
      borderColor="gray.200"
      backgroundColor={moduleName === 'terminal' ? '#304148' : 'white'}
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
          onClick={handleClick}
          variant="ghost"
          color="gray.600"
        />
      </Flex>
      {children}
    </Flex>
  );
}
