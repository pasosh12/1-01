import React from 'react';
import styled from "styled-components";
import personPhoto from "../../assets/photo.jpg"
import {FlexWrapper} from "../../Components/FlexWrapper";
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";
import {theme} from "../../Styles/Theme";
import {font} from "../../Styles/Common";

export const Main = () => {
    return (
        <section id="main">
            <Container>
                <FlexWrapper alignItems={"center"} justify={"space-between"}>
                    <div>
                        <MainText>Hi,👋,<br/>
                            My name is <br/>
                                <ColoredText > Daniil Shishaev</ColoredText>

                           <br/> I build thing for web
                        </MainText>
                    </div>
                    <PhotoContainer>
                        <Photo src={personPhoto}></Photo>
                    </PhotoContainer>
                </FlexWrapper>
            </Container>
        </section>
    );
};

const PhotoContainer = styled.div`
    background: linear-gradient(0deg, #13b0f5, #e70faa);
    padding: 10px;
    position: relative; 
    display: inline-block;
    border-radius: 50%; 
    overflow: hidden;
    flex-shrink: 0;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; 
        height: 100%;
        background: linear-gradient(90deg, #13b0f5 2.6%, #e70faa 100%);
        border-radius: 50%;
        z-index: -1;
    }
    @media ${theme.media.mobile} {
        //width: 25%;
        //height: 50%;
        padding: 5px;
    }

`
const Photo = styled.img`
    width: 350px;
    height: 350px;
    object-fit: cover;
    display: block; 
    border-radius: 50%;
    @media ${theme.media.mobile} {
        width: 200px;
        height: 200px;
    }
    
`
const MainText = styled.h2`
    ${font({Fmax: 58, Fmin: 26, weight: 700, color: `${theme.colors.secondaryFont}`})}
    letter-spacing: -0.02em;
    @media ${theme.media.mobile} {
        margin: 10px;
    }
`


