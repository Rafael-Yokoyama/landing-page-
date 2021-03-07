import React from "react";
import Paragraph from "../paragraph";
import Title from "../title";

import { Container } from "./styles";

const Testimony = () => {
  return (
    <Container>
      <img src="https://github.com/github.png" alt="Foto" data-testid="img" />
      <div className="content">
        <Title font={"20px"} width={"640px"} Color={""} text={"Github."} />

        <Paragraph
          font={"16px"}
          width={"380px"}
          Color={"#4B5D68"}
          text={"rafinhai"}
        />

        <Paragraph
          font={"18px"}
          width={"380px"}
          Color={"#4B5D68"}
          text={
            "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
          }
        />
      </div>
    </Container>
  );
};

export default Testimony;
