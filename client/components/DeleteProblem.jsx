import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  IconButton,
  Button,
  useDisclosure,
  ModalFooter,
  Tooltip,
  useToast,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { DeleteIcon } from '@chakra-ui/icons';
import {useDispatch} from 'react-redux'
import actions from '../actions/actions'

function DeleteProblem({ currentProblem }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleDelete = () => {
   
      dispatch(actions.deleteProblem(currentProblem._id))
   
     }
   

  return (
    <>
      <Tooltip hasArrow label="Delete Problem" placement="bottom">
        <IconButton
          disabled={currentProblem._id === 0}
          variant="ghost"
          icon={<DeleteIcon />}
          onClick={onOpen}
          w={6}
          h={6}
          ml={2}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} p={8}>
        <ModalOverlay />
        <ModalContent borderRadius="md">
          <ModalHeader mt={3}>
            Are you sure you want to delete {currentProblem.name}?
          </ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteProblem;
