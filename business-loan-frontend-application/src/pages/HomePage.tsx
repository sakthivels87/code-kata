import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Navigate, useLocation } from "react-router-dom";
import ApplicationForm from "../components/ApplicationForm";
import BalanceSheet from "../components/BalanceSheet";
import { useState } from "react";
import Review from "../components/Review";

const HomePage = () => {
  const { state } = useLocation();
  if (!state) return <Navigate to="/" />;

  const [showBalSheet, setBalSheetVisiblity] = useState(false);
  const [showPreview, setPreviewVisibility] = useState(false);
  const [loanRequest, setLoanRequest] = useState({});
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
        {!showBalSheet && !showPreview && (
          <ApplicationForm
            onFilled={(data: any) => {
              setBalSheetVisiblity(!showBalSheet);
              setLoanRequest({ ...loanRequest, ...data });
            }}
          />
        )}
        {showBalSheet && (
          <BalanceSheet
            onNext={() => {
              setBalSheetVisiblity(false);
              setPreviewVisibility(true);
            }}
          />
        )}
        {showPreview && <Review previewInfo={loanRequest} />}
      </GridItem>
    </Grid>
  );
};

export default HomePage;
