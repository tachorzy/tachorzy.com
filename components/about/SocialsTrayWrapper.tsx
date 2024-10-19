"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SocialMediaButton from './SocialMediaButton';


const SocialsTrayWrapper = () => {
    
    const [isHoveringGitHub, setIsHoveringGitHub] = useState(false);
    const onMouseEnterGitHub = () => setIsHoveringGitHub(true);
    const onMouseLeaveGitHub = () => setIsHoveringGitHub(false);

    const [isHoveringLinkedIn, setIsHoveringLinkedIn] = useState(false);
    const onMouseEnterLinkedIn = () => setIsHoveringLinkedIn(true);
    const onMouseLeaveLinkedIn = () => setIsHoveringLinkedIn(false);

    const [isHoveringCV, setIsHoveringCV] = useState(false);
    const onMouseEnterCV = () => setIsHoveringCV(true);
    const onMouseLeaveCV = () => setIsHoveringCV(false);
    
    const latestResume = "/resume/tachorzy_resume_sept_2024.pdf";

    const socialLinks = new Map<string, string>([
        ["GitHub", "https://github.com/tachorzy"],
        ["LinkedIn", "https://www.linkedin.com/in/tachorzy/"],
        ["Resume", latestResume],
    ]);

    const socialStates = new Map<string, {isHovering: boolean, onMouseEnter: () => void, onMouseLeave: () => void}>([
        ["GitHub", { isHovering: isHoveringGitHub, onMouseEnter: onMouseEnterGitHub, onMouseLeave: onMouseLeaveGitHub }],
        ["LinkedIn", { isHovering: isHoveringLinkedIn, onMouseEnter: onMouseEnterLinkedIn, onMouseLeave: onMouseLeaveLinkedIn }],
        ["Resume", { isHovering: isHoveringCV, onMouseEnter: onMouseEnterCV, onMouseLeave: onMouseLeaveCV }],
    ]);

    return(
        <div className="lg:mt-5 md:mt-2.5 mt-4 flex flex-row gap-x-5 xl:gap-x-6">
            {Array.from(socialLinks.entries()).map(([socialMedia, socialMediaLink]) => (    
                <SocialMediaButton 
                    key={socialMedia}
                    socialMedia={socialMedia}
                    socialMediaLink={socialMediaLink}
                    isHovering={socialStates.get(socialMedia)!.isHovering}
                    onMouseEnter={socialStates.get(socialMedia)!.onMouseEnter}
                    onMouseLeave={socialStates.get(socialMedia)!.onMouseLeave}
                />            
            ))}
        </div>
    )
}

export default SocialsTrayWrapper;