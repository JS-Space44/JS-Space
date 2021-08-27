import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  FormLabel,
  IconButton,
  Tooltip,
  FormControl,
  Text,
  Textarea,
  useToast,
  Flex,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import actions from '../actions/actions';

const INITIAL_STATE = {
  name: '',
  description: '',
  tests: [],
};

function CreateNewProblem() {
  const dispatch = useDispatch();
  const currUser = useSelector((state) => state.auth.user_id);
  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  // create refs to input fields, to later get their values on submit
  const nameRef = React.createRef();
  const descRef = React.createRef();
  const testsRef = React.createRef();

  function handleSubmit() {
    // on submit
    const args = [
      currUser,
      nameRef.current.value,
      descRef.current.value,
      testsRef.current.value,
    ];

    try {
      onClose();
      dispatch(actions.createProblem(...args));
      toast({
        title: 'List deleted',
        status: 'success',
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description: error,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  }

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Text>Create new problem</Text>
        <Tooltip hasArrow label="New problem" placement="bottom">
          <IconButton icon={<AddIcon />} onClick={onOpen} />
        </Tooltip>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalHeader textAlign="left">Add a new problem</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody>
              <Flex>
                <FormControl>
                  <FormLabel htmlFor="name">Name: </FormLabel>
                  <Input
                    ref={nameRef}
                    name="name"
                    variant="outline"
                    placeholder="Problem Name"
                    type="string"
                    isRequired
                  />
                </FormControl>
              </Flex>
              <Flex mt={2} flexDir="column">
                <FormLabel htmlFor="description">Description: </FormLabel>

                <Textarea
                  ref={descRef}
                  id="description"
                  name="description"
                  variant="outline"
                  placeholder="Problem Description"
                  type="text"
                />
              </Flex>
              <Flex mt={2}>
                <FormControl>
                  <FormLabel htmlFor="name">Test Case: </FormLabel>
                  <Input
                    ref={testsRef}
                    name="test"
                    variant="outline"
                    placeholder="Enter Code"
                    type="string"
                  />
                </FormControl>
              </Flex>
            </ModalBody>

            <ModalFooter>
              <Flex>
                <Button color="red" mr={3} onClick={onClose}>
                  Cancel
                </Button>
                <Button color="green" type="submit" onClick={handleSubmit}>
                  Save
                </Button>
              </Flex>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CreateNewProblem;
