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
  Flex,
} from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

import actions from '../actions/actions';

const INITIAL_STATE = {
  name: '',
  description: '',
  tests: [],
};

function EditProblem({ currentProblem }) {
  const dispatch = useDispatch();
  const { _id, name, description, tests } = currentProblem;

  const { isOpen, onOpen, onClose } = useDisclosure();

  // create refs to input fields, to later get their values on submit
  const nameRef = React.createRef();
  const descRef = React.createRef();
  const testsRef = React.createRef();

  function handleSubmit() {
    // on submit
    // return dispatch(actions.createProblem(...args));
  }

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center">
        <Tooltip hasArrow label="Edit problem" placement="bottom">
          <IconButton
            disabled={currentProblem._id === 0}
            variant="ghost"
            icon={<EditIcon />}
            onClick={onOpen}
            w={6}
            h={6}
          />
        </Tooltip>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalHeader textAlign="left">Edit problem: {name}</ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody>
              <Flex>
                <FormControl>
                  <FormLabel htmlFor="name">Name: </FormLabel>
                  <Input
                    ref={nameRef}
                    value={name}
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
                  value={description}
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
                    value={tests}
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

export default EditProblem;
