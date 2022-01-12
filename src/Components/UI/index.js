import styled from "styled-components";

const cardSize = {
  sm: "175px",
  normal: "200px",
  full: "100%",
};

export const Button = styled.button`
  color: ${(props) => (props.primary ? "forestgreen" : "tomato")};
  border-radius: 5px;
  background-color: transparent;
  border: 2px solid darkgrey;
  margin: 10px;
  &:hover {
    color: white;
    background-color: ${(props) => (props.primary ? "forestgreen" : "tomato")};
  }
`;

export const Input = styled.input`
  color: lightgrey;
  border-radius: 5px;
  background-color: ${(props) => (props.transparent ? "transparent" : "grey")};
  border: 2px solid darkgrey;
  margin: 10px;
  &:focus {
    background-color: dimgrey;
  }
`;

export const Card = styled.div`
  display:flex;
  flex-direction:column;
  margin:10px;
  border:2px solid grey;
  padding :5px
  height:20px;
  width:${(props) => cardSize[props.size]};
  border-radius:5px;
  
`;

export const Title = styled.h1`
  font-family: "PT Sans", sans-serif;
  color: grey;
  text-align: center;
`;

export const DescriptionTodo = styled.p`
  color: lightgrey;
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;
