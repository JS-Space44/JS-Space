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
} from '@chakra-ui/react';
import React from 'react';
import { SettingsIcon } from '@chakra-ui/icons';
import WorkspaceModuleWrapper from './WorkspaceModuleWrapper';
import Tests from './Tests';
import DeleteProblem from './DeleteProblem';
import EditProblem from './EditProblem';

export default function ProblemPrompt({
  currentProblem,
  toggleDrag,
  draggable,
}) {
  const { _id, name, description, tests } = currentProblem;

  return (
    <WorkspaceModuleWrapper
      moduleName="problem prompt"
      toggleDrag={toggleDrag}
      draggable={draggable}
      problemName={name}
    >
      <Flex direction="column" p={6}>
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
                <EditProblem currentProblem={currentProblem} />
                <DeleteProblem currentProblem={currentProblem} />
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
              <Heading my={6}>
                {_id} - {name}
              </Heading>
              <Text mb={8}>{description}</Text>
              <Tests currentProblem={currentProblem} />
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
