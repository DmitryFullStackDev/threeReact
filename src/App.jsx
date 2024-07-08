import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import styled from "styled-components";
import Works from "./Components/Works.jsx";
import Who from "./Components/Who.jsx";

const Container = styled.div`
  height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg1.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <Who/>
      <Works/>
      <Contact/>
    </Container>
  );
}

export default App;
