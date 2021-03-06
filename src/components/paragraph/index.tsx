import React from "react";
import { ContainerParagraph } from "./styles";


interface PProps {

  font: string;
  width: string;
  text: string;
  Color: string;
}

const Paragraph = (props: PProps) => {
  return (
    <ContainerParagraph
      font={props.font}
      width={props.width}
      Color={props.Color}
    >
      {props.text}
    </ContainerParagraph>
  );
};

export default Paragraph;
