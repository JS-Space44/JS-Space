import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heading, Flex, Link, Button, useDisclosure } from '@chakra-ui/react';
import Sidebar from './Sidebar';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Flex
      width="100%"
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      shadow="sm"
      borderBottom="1px solid #C8C8C8"
    >
      <Sidebar isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
      <Link as={NavLink} to="/">
        <Flex>
          <Heading as="h1" size="lg" mt={[3, 0, 0, 0]} mr={[0, 3, 3, 3]}>
            JS Space
          </Heading>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Problems
          </Button>
        </Flex>
      </Link>
      <Link as={NavLink} to="/login">
        <Heading as="h3" size="md" mt={[3, 0, 0, 0]} mr={[0, 3, 3, 3]}>
          Temp Auth Link
        </Heading>
      </Link>
    </Flex>
  );
}

export default NavBar;
