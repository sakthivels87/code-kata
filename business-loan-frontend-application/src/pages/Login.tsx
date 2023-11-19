import {
  Box,
  Heading,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import UserRegistration, { UserFormData } from "../components/UserRegistration";
import SignIn from "../components/SignIn";
import userService from "../services/userService";
import authService, { AuthUser } from "../services/authService";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({
    authError: "",
    regError: "",
  });
  const onUserRegistration = async (data: UserFormData) => {
    setLoading(true);
    const result = await userService()(data);
    if (result.status == 200) {
      setLoading(false);
      navigate("/home", { state: { ...result.data } });
    } else if (result.status >= 400) {
      setError({ ...error, regError: result.data });
    }
  };
  const LoggedIn = async (input: AuthUser) => {
    setLoading(true);
    const res = await authService()(input);
    if (res.status == 200) {
      setLoading(false);
      navigate("/home", { state: { ...res.data } });
    } else if (res.status >= 400) {
      setLoading(false);
      setError({ ...error, authError: res.data });
    }
  };
  return (
    <Box padding={10}>
      <Heading mb={5}>Welcome to Business Loan Application Page.</Heading>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      <Tabs variant="enclosed" width="70%">
        <TabList>
          <Tab>New User</Tab>
          <Tab>Existing User</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserRegistration onRegister={onUserRegistration} />
            {error.regError && <Text color="red">{error.regError}</Text>}
          </TabPanel>
          <TabPanel>
            <SignIn onSignIn={LoggedIn} />
            {error.authError && <Text color="red">{error.authError}</Text>}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Login;
