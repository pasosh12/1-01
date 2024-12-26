import styled from "styled-components";
import {font} from "../../Styles/Common";
import {theme} from "../../Styles/Theme";

const Contacts = styled.section`
    padding: 150px 0;
    //min-height: 50vh;
    //background-color: #e1dada;
    //background-color: rgba(225,218,218,0.55)
`
const ContactsTitle = styled.h2`
    ${font({Fmax: 58, Fmin: 26, color: "#1e0e62", weight: 700})};
    text-align: center;
    margin: 0;
`
const FlexContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap:30px;
    letter-spacing: -0.02em;
    line-height: 1.2;
    text-align: center;
    ${font({Fmax: 58, Fmin: 26})};
    @media ${theme.media.tablet} {
        a, h2 {
            margin-bottom: 20px;
        }
    }
`

export const S = {
    Contacts,
    ContactsTitle,
    FlexContainerContact
}