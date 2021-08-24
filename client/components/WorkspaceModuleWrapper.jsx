import { Box } from '@chakra-ui/react';
import React from 'react';

export default function WorkspaceModuleWrapper({ children }) {
  return (
    <Box
      h="100%"
      p={4}
      m={0}
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
    >
      {children}
    </Box>
  );
}
