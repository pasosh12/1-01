import React from 'react';
import iconsSprite from '../../assets/skills.svg';
type IconProps = {
    iconId: string;
    size?: string | number;
    viewBox?: string;
}

const Icon = (props:IconProps) => {
    // console.log(`${iconsSprite}#{$props.iconId} `);
    return (
        <svg  width={props.size || "120"} height={props.size || "120"}>
            <use xlinkHref={ `${iconsSprite}#${props.iconId} `}  />
        </svg>
    );
};

export default Icon;