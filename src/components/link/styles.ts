import styled from "styled-components";

interface LinkProps {
  Color: string;
  bold: string;
}

export const Linkes = styled.a<LinkProps>`
  color: ${(props) => props.Color};
  font-weight: ${(props) => props.bold};
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
