import { Container } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <Container maxWidth="85%" color="#170a4d" maxHeight="100vh" bg="white">
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default Layout;
