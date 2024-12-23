import React from 'react';
import {S} from "../Header_Styles"

const menuItems = [
    {href: "home", title: "Home"},
    {href: "about", title: "About"},
    {href: "skills", title: "Tech Stack"},
    {href: "projects", title: "Projects"},
    {href: "contacts", title: "Contacts"}
]
export const Menu: React.FC = () => {

    return (
        <ul>
            {menuItems.map((item, index) => (
                <S.ListItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass={'active'}
                               spy={true}
                               delay={1}
                               offset={20}
                    >
                        {item.title}
                    </S.NavLink>
                </S.ListItem>
            ))}
        </ul>
    );
};


