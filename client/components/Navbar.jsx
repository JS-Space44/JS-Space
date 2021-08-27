import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  Heading,
  Flex,
  Link,
  Button,
  Text,
  Image,
  useToast,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../assets/spacejs-logo.png';
import actions from '../actions/actions';
import Sidebar from './Sidebar';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const toast = useToast();
  const logoutUser = () => dispatch(actions.logoutUser());
  const btnRef = React.useRef();

  const handleLogout = () => {
    try {
      logoutUser();
      toast({
        title: 'Logged out!',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
      history.push('/');
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: error,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  };

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
          <Image src={logo} />
          <Flex alignContent="center" justifyContent="center">
            <Button
              leftIcon={<HamburgerIcon size="lg" />}
              ml={6}
              size="lg"
              onClick={onOpen}
              ref={btnRef}
              variant="ghost"
            >
              <Text ml={1} fontSize="2xl">
                problems
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Link>
      {!auth.isLoggedIn ? (
        <Link as={NavLink} to="/login">
          <Heading as="h3" size="md" mt={[3, 0, 0, 0]} mr={[0, 3, 3, 3]}>
            Login
          </Heading>
        </Link>
      ) : (
        <Button variant="outline" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </Flex>
  );
}

export default NavBar;
