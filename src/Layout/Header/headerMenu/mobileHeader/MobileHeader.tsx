import React, {useState} from 'react';
import {FlexWrapper} from "../../../../Components/FlexWrapper";
import {SocialLinks} from "../../SocialLinks";
import {Menu} from "../menu/Menu";
import {S} from '../Header_Styles'


export const MobileHeader: React.FC = () => {
    const [menuIsOpened, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpened)
    }
    return (
        <S.MobileMenu>
            <S.BurgerButton onClick={onBurgerBtnClick} isOpen={menuIsOpened}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpened} onClick={() => {
                setMenuIsOpen(false)
            }}>

                <FlexWrapper as={'nav'} gap={"30px"} direction={'column'} justify={'center'} alignItems={'center'}>
                    <Menu/>
                    <SocialLinks/>
                </FlexWrapper>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

