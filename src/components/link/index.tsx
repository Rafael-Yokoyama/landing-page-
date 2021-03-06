import React from "react";
import { Linkes } from "./styles";

interface LinkProps {
  link?: string;
  text:string;
  Color: string;
  bold:string
}

const Link = (props: LinkProps) => {
  return (
    <nav className="nav">
      <ul>

   
        <li>
        <Linkes Color={props.Color}  bold= {props.bold}   href={props.link} >
         {props.text}
        </Linkes>

        
        </li>
      </ul>
    </nav>
  );
};

export default Link;
