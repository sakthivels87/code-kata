import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import Login from "./Login";
import { Navigate, useLocation } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";
import BalanceSheet from "../components/BalanceSheet";

const HomePage = () => {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" />;
  return (
    <Grid
      templateAreas={{ base: `"main"`, lg: `"main"` }}
      templateColumns={{ base: "1fr", lg: "1fr" }}
      gap={1}
    >
      <GridItem area={"main"}>
        <Heading mb={5} as="h2">
          Business Loan Application Page
        </Heading>
        <Text>Welcome {state.name}</Text>
        <ApplicationForm />
        <BalanceSheet />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
