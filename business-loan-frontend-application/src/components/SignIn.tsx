import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email({ message: "Email is required. Must be valid email address" }),
  password: z
    .string()
    .min(5, {
      message: "Password is required and must be more than 4 character(s)",
    })
    .max(15),
});

type LoginData = z.infer<typeof schema>;
interface Props {
  onSignIn: (data: LoginData) => void;
}
const SignIn = ({ onSignIn }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data: LoginData) => {
        onSignIn(data);
      })}
    >
      <FormControl isInvalid={errors.email != undefined} isRequired>
        <FormLabel>Email: </FormLabel>
        <Input type="email" {...register("email")} />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.password !== undefined} mt={5} isRequired>
        <FormLabel>Password: </FormLabel>
        <Input type="password" {...register("password")} />
        {errors.password && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Button mt={5} colorScheme="teal" type="submit">
        Sign in
      </Button>
    </form>
  );
};

export default SignIn;
