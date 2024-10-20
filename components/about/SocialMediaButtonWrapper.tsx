"use client";

import Image from 'next/image'
import { useState, useContext } from 'react'
import SocialMediaButton from './SocialMediaButton';
import { SocialMediaContext } from './SocialsTray';

const SocialMediaButtonWrapper = () => {
    const contextValue = useContext(SocialMediaContext);

    const { socialMedia, socialMediaLink } = contextValue;

    const [isHovering, setIsHovering] = useState(false);
    const onMouseEnter = () => setIsHovering(true);
    const onMouseLeave = () => setIsHovering(false);

    return(
        <SocialMediaButton isHovering={isHovering} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
    )
}

export default SocialMediaButtonWrapper;