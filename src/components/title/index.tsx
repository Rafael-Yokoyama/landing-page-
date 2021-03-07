import React from "react";
import { ContainerTitle } from "./styles";

interface TitleProps {
  font: string;
  width: string;
  text: string;
  Color: string;
}

const Title = (props: TitleProps) => {
  return (
    <ContainerTitle
      Color={"#212353"}
      font={props.font}
      width={props.width}
      Weight={"700"}
    >
      {props.text}
    </ContainerTitle>
  );
};

export default Title;
