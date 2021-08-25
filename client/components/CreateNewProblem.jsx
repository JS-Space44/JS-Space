import React from 'react';
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
import { AddIcon } from '@chakra-ui/icons';

const INITIAL_STATE = {
  name: '',
  description: '',
  tests: [],
};

function CreateNewProblem() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleSubmit() {
    // on submit
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
