import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({ invalid_type_error: "Name must be a string" })
    .min(3, { message: "Name is required. Must be 3 or more characters long." })
    .max(150, { message: "Name must be 3 or 150 characters long." }),
  email: z
    .string()
    .email({ message: "Email is required. Email must be in valid format" }),
  password: z.string().min(5).max(15, {
    message: "Password is required. Must be 5 or 15 charcters long.",
  }),
});

export type UserFormData = z.infer<typeof schema>;

interface Props {
  onRegister: (data: UserFormData) => void;
}
const UserRegistration = ({ onRegister }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isDirty },
  } = useForm<UserFormData>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: UserFormData) => onRegister(data);
  return (
    <form
      onSubmit={handleSubmit((e) => {
        onSubmit(e);
        //reset();
      })}
    >
      <FormControl isInvalid={errors.name != undefined} isRequired>
        <FormLabel>Name: </FormLabel>
        <Input id="name" type="text" {...register("name")} />
        {errors.name && (
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.email != undefined} isRequired>
        <FormLabel>Email:</FormLabel>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.password != undefined} isRequired>
        <FormLabel>Password: </FormLabel>
        <Input type="password" {...register("password")} />
        {errors.password && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Register
      </Button>
    </form>
  );
};

export default UserRegistration;
