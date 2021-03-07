import styled from "styled-components";

interface ContainerProps {
  backgroundColor: string;
  shadow?: string;
  Color: string;
}

export const Container = styled.button<ContainerProps>`
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.Color};
  padding: 1rem 2rem;
  border-radius: 50px;
  box-shadow: ${(props) => props.shadow};
  display: flex;
  justify-content: center;
  cursor: pointer;
  border: none;


  
`;
