import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Business name is required. Must be minimum 3 characters",
    })
    .max(25),
  establishedYear: z
    .number({
      invalid_type_error: "Years must be numbers",
    })
    .min(1800, { message: "Year is required." })
    .max(2023),
  profitOrLoss: z.number().safe({ message: "Value is required." }),
  preAssessment: z
    .number()
    .min(1, { message: "Pre Assessment value is required." })
    .max(100),
});

type LoanData = z.infer<typeof schema>;

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoanData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: LoanData) => {
    console.log("Loan Details...", data);
  };
  return (
    <Box padding={5}>
      ApplicationForm
      <Heading> Please provide your business details</Heading>
      <Box width="500px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt={4} isInvalid={errors.name != undefined}>
            <FormLabel>Name: </FormLabel>
            <Input id="name" type="text" {...register("name")} />
            {errors.name && (
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt={4} isInvalid={errors.establishedYear != undefined}>
            <FormLabel>Established Year: </FormLabel>
            <Input
              id="name"
              type="number"
              {...register("establishedYear", { valueAsNumber: true })}
            />
            {errors.name && (
              <FormErrorMessage>
                {errors.establishedYear?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt={4} isInvalid={errors.profitOrLoss != undefined}>
            <FormLabel>ProfitOrLoss</FormLabel>
            <Input
              id="name"
              type="text"
              {...register("profitOrLoss", { valueAsNumber: true })}
            />
            {errors.name && (
              <FormErrorMessage>
                {errors.profitOrLoss?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <FormControl mt={4} isInvalid={errors.preAssessment != undefined}>
            <FormLabel>Pre Assessment: </FormLabel>
            <Input
              id="name"
              type="text"
              {...register("preAssessment", { valueAsNumber: true })}
            />
            {errors.name && (
              <FormErrorMessage>
                {errors.preAssessment?.message}
              </FormErrorMessage>
            )}
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Next
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ApplicationForm;
