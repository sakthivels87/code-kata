import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import decisionEngine from "../services/decisionEngine";

interface Props {
  previewInfo: any;
}
const Review = ({ previewInfo }: Props) => {
  const navigate = useNavigate();
  const onSubmitApplication = () => {
    decisionEngine()({ ...previewInfo })
      .then((res) => {
        if (res.status == 200)
          navigate("/loanApplication", { state: { ...res.data } });
      })
      .catch((e) => console.log("Error: ", e));
  };
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Business Loan Request Preview</Heading>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                Business Name:
              </Heading>
              <Text fontSize="sm">{previewInfo.name!}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                Established Year:
              </Heading>
              <Text fontSize="sm">{previewInfo.establishedYear}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                ProfitOrLoss:
              </Heading>
              <Text fontSize="sm">{previewInfo.profitOrLoss}</Text>
            </HStack>
          </Box>
          <Box>
            <HStack>
              <Heading size="xs" textTransform="uppercase">
                PreAssessment:
              </Heading>
              <Text fontSize="sm">{previewInfo.preAssessment}</Text>
            </HStack>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={onSubmitApplication}
        >
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Review;
