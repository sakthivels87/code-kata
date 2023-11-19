import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const LoanApplication = () => {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" />;
  return (
    <Container maxW="2xl" centerContent>
      <Box padding="10" color="black" maxW="lg">
        <Heading>Thank You!!!</Heading>
        {state.isEligible && (
          <Text fontSize="2xl">
            Congratulations!!! You're request is eligible for{" "}
            {state.approvedPercent} % loan
          </Text>
        )}
        {!state.isEligible && (
          <Text fontSize="2xl">
            Sorry!!! You're request is not eligible for this loan.
          </Text>
        )}
      </Box>
    </Container>
  );
};

export default LoanApplication;
