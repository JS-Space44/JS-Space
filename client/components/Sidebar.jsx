import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  StackDivider,
  Box,
  Button,
  Flex,
  Text,
  Link,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import CreateNewProblem from './CreateNewProblem';
import actions from '../actions/actions';

const mapStateToProps = ({ business, auth }) => ({
  problems: business.problems,
  currentProblem: business.current,
  isLoggedIn: auth.isLoggedIn,
});

function Sidebar({
  isOpen,
  onClose,
  btnRef,
  problems,
  isLoggedIn,
  currentProblem,
  setCurrentProblem,
}) {
  const dispatch = useDispatch();
  const handleClick = (id) => {
    console.log('console.log', id);
    dispatch(actions.setCurrentProblem(id));
    //dispatch(actions.getTestsForProblem(id))
    onClose();
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Problems</DrawerHeader>
        <DrawerBody>
          {isLoggedIn ? (
            <CreateNewProblem />
          ) : (
            <Flex direction="column" justifyContent="flex-end" mb={4}>
              <Text>
                <Link color="teal.500" as={RouterLink} to="/login">
                  Log in
                </Link>{' '}
                to create a problem
              </Text>
            </Flex>
          )}
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {problems.map((problem, idx) => (
              <Button
                display="inline-block"
                key={problem._id}
                onClick={() => handleClick(problem._id)}
                variant="ghost"
              >
                <Flex justifyContent="space-between">
                  {currentProblem._id === problem._id ? <CheckIcon key={`check-${idx}`}/> : null}

                  <Text key={`prob-id-${idx}`}>{problem._id}</Text>
                  <Text key={`prob-name-${idx}`}>{problem.name}</Text>
                </Flex>
              </Button>
            ))}
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}

export default connect(mapStateToProps, null)(Sidebar);
