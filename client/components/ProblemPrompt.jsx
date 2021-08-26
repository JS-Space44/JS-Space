import {
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { EditIcon, DeleteIcon, SettingsIcon } from '@chakra-ui/icons';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import Tests from './Tests';

export default function ProblemPrompt({
  currentProblem,
  toggleDrag,
  draggable,
}) {
  const { id, name, description, tests } = currentProblem;

  function handleEdit() {
    console.log('edit');
  }

  function handleDelete() {
    console.log('delete');
  }

  return (
    <WorkspaceModuleWrapper
      moduleName="problem prompt"
      toggleDrag={toggleDrag}
      draggable={draggable}
      problemName={name}
    >
      <Flex direction="column" py={2}>
        <Accordion allowToggle>
          <AccordionItem border="none">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" />
                <SettingsIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Flex justifyContent="flex-end">
                <IconButton
                  icon={<EditIcon />}
                  onClick={handleEdit}
                  w={6}
                  h={6}
                />
                <IconButton
                  icon={<DeleteIcon />}
                  onClick={handleDelete}
                  w={6}
                  h={6}
                  ml={2}
                />
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>

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
