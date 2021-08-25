import React from 'react';
import { connect } from 'react-redux';
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
} from '@chakra-ui/react';
import CreateNewProblem from './CreateNewProblem';

const mapStateToProps = ({ business }) => ({
  problems: business.problems,
  currentProblem: business.current,
});

function Sidebar({ isOpen, onClose, btnRef, problems, currentProblem }) {
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
          <CreateNewProblem />
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            {problems.map((problem, _) => (
              <Button display="inline-block" key={problem.id} variant="ghost">
                <Flex justifyContent="space-between">
                  <Text>{problem.id}</Text>
                  <Text>{problem.name}</Text>
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
