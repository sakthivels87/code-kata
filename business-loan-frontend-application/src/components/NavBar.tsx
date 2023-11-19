import { HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/DemystLogo.72890529.svg";

const NavBar = () => {
  return (
    <HStack p={5} spacing={6}>
      <Link href="https://demyst.com/" isExternal>
        <Image src={logo} alt="Demyst Logo" objectFit="cover"></Image>
      </Link>
      <Link href="https://demyst.com/platform" isExternal>
        <Text fontSize="xl">Platform</Text>
      </Link>
      <Link href="https://demyst.com/platform" isExternal>
        <Text fontSize="xl">Documentation</Text>
      </Link>
      <Link href="https://demyst.com/resources" isExternal>
        <Text fontSize="xl">Resources</Text>
      </Link>
      <Link href="https://demyst.com/about-us" isExternal>
        <Text fontSize="xl">About</Text>
      </Link>
    </HStack>
  );
};

export default NavBar;
