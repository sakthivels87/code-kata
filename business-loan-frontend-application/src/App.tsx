import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Container } from "@chakra-ui/react";
function App() {
  return (
    <Container maxWidth="85%" bg="gray.100" color="#170a4d" maxHeight="100vh">
      <NavBar />
      <HomePage />
    </Container>
  );
}

export default App;
