import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 1400px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 40px 20px;
    gap: 40px;
  }
`;

const Left = styled.div`
  flex: 1;
  height: 1000px;

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 42px;
  }
`;

const What = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: black;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const Line = styled.img`
  height: 5px;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  width: 120px;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
`;

const Sub = styled.h2`
  color: orange;
`;

const Who = () => {
  return (
      <Section>
        <Container>
          <Left>
            <Canvas camera={{ position: [6, 6, 6], fov: 30 }}>
              <Suspense fallback={null}>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <Cube />
                <OrbitControls enableZoom={false} autoRotate />
              </Suspense>
            </Canvas>
          </Left>
          <Right>
            <Title>Think beyond the box.</Title>
            <What>
              <Line src="./img/line.png" />
              <Sub>What we Are</Sub>
            </What>
            <Desc>
              A passionate collective of designers and developers inspired by the arts.
            </Desc>
            <Button>Check out our work.</Button>
          </Right>
        </Container>
      </Section>
  );
};

export default Who;
