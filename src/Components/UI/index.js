import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.primary ? "green" : "tomato")};
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid darkgrey;
  margin: 10px;
`;

export const Input = styled.input`
  color: lightgrey;
  border-radius: 5px;
  background-color: ${(props) => (props.transparent ? "transparent" : "grey")};
  border: 2px solid darkgrey;
  margin: 10px;
`;

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
  border:2px solid grey;
  padding :5px
  height:20px;
  width:${(props) => (props.sm ? "175px" : "200px")};
  border-radius:5px;
`;

export const Title = styled.h1`
  font-family: "PT Sans", sans-serif;
  color: grey;
  text-align: center;
`;

export const DescriptionTodo = styled.p`
  color: lightgrey;
`;
