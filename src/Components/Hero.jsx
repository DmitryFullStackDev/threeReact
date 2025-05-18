import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 1400px;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
  }
`;

const Left = styled.div`
  flex: 2;
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

const Right = styled.div`
  flex: 3;
  height: 50%;
  position: relative;
  width: 100%;

  @media only screen and (max-width: 768px) {
    margin-top: 40px;
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

const Img = styled.img`
  height: 600px;
  width: 800px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to {
      transform: translateY(25px);
    }
  }

  @media only screen and (max-width: 768px) {
    height: 300px;
    width: auto;
    left: 0;
    right: 0;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: orange;
  color: white;
  width: 120px;
  padding: 12px;
  cursor: pointer;
  font-weight: 500;
`;

const Sub = styled.h2`
  color: orange;
  font-size: 24px;
`;

const Hero = () => {
  return (
      <Section>
        <Navbar />
        <Container>
          <Left>
            <Title>Imagine. Create. Resolve.</Title>
            <What>
              <Line src="./img/line.png" />
              <Sub>What we Do</Sub>
            </What>
            <Desc>
              We love crafting engaging, human-centered digital experiences.
            </Desc>
            <Button>Learn More</Button>
          </Left>
          <Right>
            <Canvas style={{ width: "100%", height: "100%" }}>
              <OrbitControls enableZoom={false} autoRotate />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                    color="#d0900f"
                    attach="material"
                    distort={0.5}
                    speed={2}
                />
              </Sphere>
            </Canvas>
            <Img src="./img/moon.png" />
          </Right>
        </Container>
      </Section>
  );
};

export default Hero;
