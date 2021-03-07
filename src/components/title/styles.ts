import styled from "styled-components";

interface TitleProps {
  font: string;
  width: string;
  Color: string;
  Weight: string;
}

export const ContainerTitle = styled.div<TitleProps>`
  font-size: ${(props) => props.font};
  width: ${(props) => props.width};
  color: ${(props) => props.Color};
  font-weight: ${(props) => props.Weight};

  cursor: pointer;
`;
