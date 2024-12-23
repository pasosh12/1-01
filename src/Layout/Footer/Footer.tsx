import React from 'react';
import {S} from './Footer_Styles'
import {TopFooter} from "./TopFooter/TopFooter";
import {BottomFooter} from "./BottomFooter/BottomFooter";


export const Footer: React.FC = () => {
    const socialLinksArray = ["github_cat", "twitter", "linkedin"]
    const linksArray = ["Home", "About", "Technologies", "Projects", "Contacts"]
    return (
        <S.Footer>
            <S.TopFooter>
                <TopFooter socialLinksArray={socialLinksArray}/>
            </S.TopFooter>
            <hr/>
            <S.BottomFooter>
                <BottomFooter linksArray={linksArray}/>
            </S.BottomFooter>
        </S.Footer>
    );
};


