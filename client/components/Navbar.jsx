import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import {
  Heading,
  Flex,
  Link,
  Button,
  Text,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import actions from '../actions/actions';
import Sidebar from './Sidebar';

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutUser = () => dispatch(actions.logoutUser());
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

          <Flex alignContent="center" justifyContent="center">
            <Button
              leftIcon={<HamburgerIcon />}
              ml={2}
              size="lg"
              onClick={onOpen}
              ref={btnRef}
              variant="ghost"
            >
              Problems
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
        <Button onClick={logoutUser}>Logout</Button>
      )}
    </Flex>
  );
}

export default NavBar;
