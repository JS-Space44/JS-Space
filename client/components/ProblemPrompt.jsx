import {
  Heading,
  Text,
  Flex,
  Box,
  Menu,
  MenuButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  MenuItem,
  MenuList,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { EditIcon, HamburgerIcon, DeleteIcon } from '@chakra-ui/icons';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import Tests from './Tests';

export default function ProblemPrompt({ currentProblem }) {
  const { id, name, description, tests } = currentProblem;

  function handleEdit() {
    console.log('edit');
  }

  function handleDelete() {
    console.log('delete');
  }

  return (
    <WorkspaceModuleWrapper moduleName="problem prompt" problemName={name}>
      <Flex direction="column" p={8}>
        {/* menu */}
        <Box alignSelf="flex-end">
          <Menu placement="left-start">
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<EditIcon />} onClick={handleEdit} command="⌘E">
                Edit...
              </MenuItem>
              <MenuItem
                icon={<DeleteIcon />}
                onClick={handleDelete}
                command="⌘D"
              >
                Delete...
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        {/* tabs */}
        <Tabs>
          <TabList>
            <Tab>Problem</Tab>
            <Tab>Solutions</Tab>
          </TabList>
          <TabPanels>
            {/* Problem Tab */}
            <TabPanel>
              <Heading mb={6}>
                {id} - {name}
              </Heading>
              <Text mb={8}>{description}</Text>
              <Tests tests={tests} />
            </TabPanel>
            {/* Solutions Tab */}
            <TabPanel>
              <p>solutions here</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </WorkspaceModuleWrapper>
  );
}
