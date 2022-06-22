import React from "react";
import { ContentTextStyled } from "./ContentTextStyled";

interface ContextTextProps {
    titulo: string;
    texto: string
}

export const ContentText: React.FC<ContextTextProps> = ({ titulo, texto}) => {
    return (
        <ContentTextStyled>
        <h2>{titulo}</h2>
        <p>{texto} </p>
        </ContentTextStyled>
    )
}