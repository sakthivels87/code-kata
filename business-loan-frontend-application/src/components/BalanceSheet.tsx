import React from "react";
import balSheetService from "../services/balSheetService";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const BalanceSheet = () => {
  return (
    <form>
      <FormControl mt={4}>
        <FormLabel>Select Accounting Option: </FormLabel>
        <Select placeholder="Select option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </Select>
      </FormControl>
      <FormControl mt={5}>
        <FormLabel>Select the Year</FormLabel>
        <Select>
          <option value="2020">2020</option>
          <option value="2020">2021</option>
          <option value="2020">2022</option>
          <option value="2020">2023</option>
        </Select>
      </FormControl>
    </form>
  );
};

export default BalanceSheet;
