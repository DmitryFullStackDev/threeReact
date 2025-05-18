import Contact from "./Components/Contact";
import Hero from "./Components/Hero";
import styled from "styled-components";
import Works from "./Components/Works.jsx";
import Who from "./Components/Who.jsx";

const Container = styled.div`
  min-height: 100vh;
  background-color: rebeccapurple;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 10px;
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
