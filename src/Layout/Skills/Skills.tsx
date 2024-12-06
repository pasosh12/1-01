import React from 'react';
import SvgIcon from "../../Components/SvgIcon/SvgIcon";
import styled from "styled-components";
import {FlexWrapper} from "../../Components/FlexWrapper";
import {SectionTitle} from "../../Components/SectionTitle";
import iconsSprite from '../../assets/skills.svg';

export const Skills = () => {
const skillsArray=[
    "html5","git","github","css","react","vscode","saas","tailwind","greensock","js","bootstrap","vector"]
    return (
        <StyledSkills>
            <SectionTitle>My Tech Stack</SectionTitle>
            <h3>Technologies I’ve been working with recently</h3>
            <FlexWrapper direction={"row"} wrap={"wrap"} gap={"90px"} justify="space-between">
                {skillsArray.map((skill, index) => (
                    <SvgIcon iconsHref={iconsSprite} iconId={skill}/>
                ))}
            </FlexWrapper>
        </StyledSkills>
    );
};

const StyledSkills = styled.div`
    background-color: aliceblue;
    min-height: 557px;
`
