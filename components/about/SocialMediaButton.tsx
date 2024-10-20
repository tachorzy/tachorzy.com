"use client";

import Image from 'next/image'
import { useContext } from 'react'
import { SocialMediaContext } from './SocialsTray';

interface SocialMediaButtonProps {
    isHovering: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const SocialMediaButton = (props: SocialMediaButtonProps) => {
    const contextValue = useContext(SocialMediaContext);

    const { socialMedia, socialMediaLink } = contextValue;
    const { isHovering, onMouseEnter, onMouseLeave } = props;

    return(
        <div className="lg:mt-5 md:mt-2.5 mt-4 flex flex-row gap-x-5 xl:gap-x-6">
            <span
                onMouseEnter = {onMouseEnter}
                onMouseLeave = {onMouseLeave}
            >
                <a href={socialMediaLink} target="_blank">
                    {isHovering ? (
                        <Image src={`/icons/socials/${socialMedia}-Mudbrick.svg`} width="0" height="0" alt={`${socialMedia} logo`} className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6 scale-110 duration-500"/>
                    ) : (
                        <Image src={`/icons/socials/${socialMedia}-Sandstone.svg`} width="0" height="0" alt={`${socialMedia} logo`} className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6"/>
                    )}
                </a>
            </span>
      </div>
    )
}

export default SocialMediaButton;