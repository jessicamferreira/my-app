import React from "react";
import { IconsWrapper } from "../IconsWrapper/IconsWrapper";
import { BsLaptop } from "react-icons/bs"
import { SectionIconsStyled } from './SectionIconsStyled';

export const SectionIcons: React.FC = () => {
    return (
        <SectionIconsStyled>
            <IconsWrapper icon={<BsLaptop />} titulo="Somente para laptop" texto= "Vamos aprender como utilizar um framwork" />
            <IconsWrapper icon={<BsLaptop />} titulo="Somente para laptop" texto= "Vamos aprender como utilizar um framwork" />
            <IconsWrapper icon={<BsLaptop />} titulo="Somente para laptop" texto= "Vamos aprender como utilizar um framwork" />
        </SectionIconsStyled>
    )
}
