import { Box } from '@chakra-ui/react';
import React from 'react';
import bg from '../assets/bg.png';

function Workspace({ children }) {
  return (
    <Box height="100vh" margin="0px" backgroundImage={bg}>
      {children}
    </Box>
  );
}

export default Workspace;
