import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heading, Flex, Link } from '@chakra-ui/react';

function NavBar() {
  return (
    <Flex
      width="100%"
      as="nav"
      align="center"
      justify="space-between"
      p={6}
      shadow="sm"
      borderBottom="1px solid #C8C8C8"
    >
      <Link as={NavLink} to="/">
        <Heading as="h1" size="lg" mt={[3, 0, 0, 0]} mr={[0, 3, 3, 3]}>
          JS Space
        </Heading>
      </Link>
    </Flex>
  );
}

export default NavBar;
