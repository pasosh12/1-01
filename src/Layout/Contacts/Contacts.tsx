import React from 'react';
import styled from "styled-components";
import {ColoredText} from "../../Components/ColoredText";
import {Container} from "../../Components/Container";

const ContactsStyled = styled.section`
    //min-height: 100%;
    //height: 335px;
    //display: flex;
    //flex-direction: column;
    //justify-content: space-between;
    margin-bottom: 100px;
`
const ContactsTitle = styled.h2`
    color: #1e0e62;
    font-weight: 700;
    font-size: 58px;
    //letter-spacing: -0.02em;
    text-align: center;
    margin: 0;
`
const FlexContainerContact = styled.div`
    //display: grid;
    //grid-template-rows: 1fr 1fr 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;   
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-align: center;
    @media (max-width: 800px) {
        a,h2 {font-size: 26px;}
    }
`

export const Contacts = () => {
    return (
        <ContactsStyled>
            <Container>
                <FlexContainerContact>
                    <ContactsTitle>For any questions please mail me:</ContactsTitle>
                    <ColoredText as="a" href='#' fontSize={'58px'}>daniil.shishaev@gmail.com</ColoredText>
                </FlexContainerContact>
            </Container>
        </ContactsStyled>
    );
};

