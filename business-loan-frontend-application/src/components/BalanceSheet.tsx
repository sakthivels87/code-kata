import { useState } from "react";
import balSheetService from "../services/balSheetService";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

export interface BalanceSheet {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
interface Props {
  onNext: () => void;
}
const BalanceSheet = ({ onNext }: Props) => {
  const [balanceSheets, setBalanceSheets] = useState<BalanceSheet[]>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setLoader] = useState(false);

  const onSubmit = async ({ acctOption, year }: FieldValues) => {
    if (year) {
      setLoader(true);
      let result = await balSheetService()(parseInt(year));
      setBalanceSheets(result.data);
      setLoader(false);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl mt={4}>
          <FormLabel>Select Accounting Provider: </FormLabel>
          <Select
            placeholder="Select option"
            {...register("acctOption")}
            isRequired
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
            <option value="option5">Option 5</option>
          </Select>
        </FormControl>
        <FormControl mt={5}>
          <FormLabel>Select the Year:</FormLabel>
          <Select
            {...register("year")}
            isInvalid={errors.year?.type === "required"}
            isRequired
          >
            <option value="">Select Year</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </Select>
          <FormErrorMessage>Year is required!</FormErrorMessage>
        </FormControl>
        <Box mt={5}>
          <Button mt={4} colorScheme="teal" type="submit">
            Fetch Balance Sheets
          </Button>
        </Box>
      </form>
      {isLoading && <Spinner size="lg" />}
      {balanceSheets && (
        <Box padding={5}>
          <Table>
            <Thead>
              <Tr>
                <Th>Year</Th>
                <Th>Month</Th>
                <Th>ProfitOrLoss</Th>
                <Th>Asset Value</Th>
              </Tr>
            </Thead>
            <Tbody>
              {balanceSheets.map((sheet, index) => (
                <Tr key={index}>
                  <Td>{sheet.year}</Td>
                  <Td>{sheet.month}</Td>
                  <Td>{sheet.profitOrLoss}</Td>
                  <Td>{sheet.assetsValue}</Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
          <Button onClick={onNext}>Next</Button>
        </Box>
      )}
    </>
  );
};

export default BalanceSheet;
