import { Flex } from '@chakra-ui/react';
import React from 'react';
import NavBar from './Navbar';

export default function Layout({ children }) {
  return (
    <Flex direction="column" margin="0" height="100%">
      <NavBar />
      {children}
    </Flex>
  );
}
