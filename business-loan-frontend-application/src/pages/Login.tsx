import {
  Box,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import UserRegistration, { UserFormData } from "../components/UserRegistration";
import SignIn from "../components/SignIn";
import userService from "../services/userService";
import authService, { AuthUser } from "../services/authService";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onUserRegistration = async (data: UserFormData) => {
    const result = await userService()(data);
    if (result.status == 200) {
      navigate("/home", { state: { ...result.data } });
    }
  };
  const LoggedIn = async (input: AuthUser) => {
    const res = await authService()(input);
    if (res.status == 200) {
      navigate("/home", { state: { ...res.data } });
    }
  };
  return (
    <Box padding={10}>
      <Heading mb={5}>Welcome to Business Loan Application Page.</Heading>
      <Tabs variant="enclosed" width="70%">
        <TabList>
          <Tab>New User</Tab>
          <Tab>Existing User</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UserRegistration onRegister={onUserRegistration} />
          </TabPanel>
          <TabPanel>
            <SignIn onSignIn={LoggedIn} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Login;
