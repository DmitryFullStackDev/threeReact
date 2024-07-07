import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Development from "./Development";

const categories = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: black;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const revealText = keyframes`
  to {
    width: 100%;
  }
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0;
  }

  &::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: orange;
    width: 0;
    overflow: hidden;
    white-space: nowrap;
    pointer-events: none;
  }

  &:hover::after {
    animation: ${revealText} 0.5s forwards;
  }
`;

const Works = () => {
  const [selectedWork, setSelectedWork] = useState("Web Design");

  return (
      <Section>
        <Container>
          <LeftPanel>
            <List>
              {categories.map((item) => (
                  <ListItem key={item} text={item} onClick={() => setSelectedWork(item)}>
                    {item}
                  </ListItem>
              ))}
            </List>
          </LeftPanel>
          <RightPanel>
            <Development selected={selectedWork} />
          </RightPanel>
        </Container>
      </Section>
  );
};

export default Works;
