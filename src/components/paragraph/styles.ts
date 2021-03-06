import styled from 'styled-components'

interface ParagraphProps  {

    font:string;
    width:string;
    Color:string;
    
}


export const ContainerParagraph=styled.div<ParagraphProps> `
padding-top:50px;

font-size: ${props => props.font};
width: ${props => props.width};
color: ${props => props.Color};
cursor:pointer;


`