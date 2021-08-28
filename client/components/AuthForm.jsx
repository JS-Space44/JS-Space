import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Flex,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  Box,
  TabPanels,
  Input,
  Button,
  FormControl,
} from '@chakra-ui/react';
import actions from '../actions/actions';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
};

const AuthForm = () => {
  const [login, setLogin] = useState(true);
  const [values, setValues] = useState(INITIAL_STATE);

  const dispatch = useDispatch();
  const history = useHistory();

  function handleChange(event) {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

//for handling submit
  function handleSubmit(event) {
    event.preventDefault();
    const { username, password, email } = values;

    // call action for login
    if (login === true) {
      console.log('login == true');

      dispatch(actions.LoginUser(email, password));
      history.push('/');
    }
    // call action for signup
    if (login === false) {
      console.log('login == false');
      dispatch(actions.signUpUser(username, password, email));
    }
  }

  return (
    <Flex align="center" justify="center" height="auto" mx={0}>
      <Box
        mt={20}
        position="relative"
        width="680px"
        border="1px solid"
        borderColor="gray.200"
      >
        <Flex align="center" p={4} justify="center" direction="column">
          <Heading fontSize="lg" mb={4}>
            {login ? 'Login' : 'Create account'}
          </Heading>
          <Tabs mt={4} isFitted>
            <TabList mb={6}>
              <Tab
                onClick={() => {
                  setLogin(true);
                }}
              >
                Login
              </Tab>
              <Tab
                onClick={() => {
                  setLogin(false);
                }}
              >
                Register
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {/* Login */}
                <form onSubmit={handleSubmit}>
                  <Flex align="center" justify="center" direction="column">
                    <FormControl>
                      <Input
                        value={values.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        size="lg"
                        width="100%"
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        value={values.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        size="lg"
                        mt={5}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      mt={6}
                      width="100%"
                      colorScheme="teal"
                    >
                      Login
                    </Button>
                  </Flex>
                </form>
              </TabPanel>
              <TabPanel>
                {/* Register */}
                <form onSubmit={handleSubmit}>
                  <Flex align="center" justify="center" direction="column">
                    <Input
                      value={values.username}
                      type="text"
                      name="username"
                      placeholder="User Name"
                      onChange={handleChange}
                      size="lg"
                    />
                    <FormControl>
                      <Input
                        value={values.email}
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        size="lg"
                        mt={5}
                      />
                    </FormControl>
                    <FormControl>
                      <Input
                        value={values.password}
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        size="lg"
                        mt={5}
                      />
                    </FormControl>
                    <Button
                      type="submit"
                      mt={5}
                      width="100%"
                      variant="outline"
                      colorScheme="teal"
                    >
                      Register
                    </Button>
                  </Flex>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Box>
    </Flex>
  );
};

export default AuthForm;
