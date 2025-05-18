import React, { useRef, useState } from "react";
import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding: 40px 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: auto;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const Title = styled.h1`
  font-weight: 200;
  color: black;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    height: 300px; /* Adjust height for mobile */
    margin: 0 auto;
  }
`;

const Contact = () => {
  const [success, setSuccess] = useState(null);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            ref.current,
            import.meta.env.VITE_EMAILJS_USER_ID
        )
        .then(
            (result) => {
              console.log(result.text);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setSuccess(false);
            }
        );
  };

  return (
      <Section>
        <Container>
          <Left>
            <Form ref={ref} onSubmit={handleSubmit}>
              <Title>Contact Us</Title>
              <Input placeholder="Name" name="name" />
              <Input placeholder="Email" name="email" />
              <TextArea placeholder="Write your Message" rows={10} name="message" />
              <Button type="submit">Send</Button>
              {success && "Your Message was sent successfully :)"}
            </Form>
          </Left>
          <Right>
            <Map />
          </Right>
        </Container>
      </Section>
  );
};

export default Contact;
