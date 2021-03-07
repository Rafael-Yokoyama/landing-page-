import React from "react";
import { Container } from "./styles";
import { GrLinkNext } from "react-icons/gr";
import "./style.css";

interface BtnProps {
  children: string;
  backgroundColor: string;
  icon?: boolean;
  shadow?: boolean;
  Color: string;
}

const Button = (props: BtnProps) => {
  const shadow = props.shadow ? "0 5px 5px  rgba(75, 93,104, 0.1)" : "none";
  return (
    <Container
      backgroundColor={props.backgroundColor}
      shadow={shadow}
      Color={props.Color}
    >
      {props.children}
      {props.icon && <GrLinkNext className="icon" />}
    </Container>
  );
};

export default Button;
