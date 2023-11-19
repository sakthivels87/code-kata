import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Box, Heading, Text, Container } from "@chakra-ui/layout";

const ErrorPage = () => {
  const error = useRouteError();
  const isPathInvalid = isRouteErrorResponse(error);
  return (
    <Container maxWidth="85%" color="#170a4d" maxHeight="100vh" bg="white">
      <NavBar />
      <Box padding={8}>
        <Heading>Oops</Heading>
        <Text>
          {isPathInvalid ? "This page does not exist" : "Technical Error"}
        </Text>
      </Box>
    </Container>
  );
};

export default ErrorPage;
