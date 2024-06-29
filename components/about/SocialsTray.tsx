"use client"; //client component

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

//Look for a way to make this component more modular. Should be able to send in a prop for the socials instead of hardcoding them.
// However, since we're dealing with both state and Image components here, it might be a bit more difficult.

const SocialsTray = () => {
    
    // Try to make this DRY. There's a lot of repetition here.
    const [isHoveringGitHub, setIsHoveringGitHub] = useState(false)
    const onMouseEnterGitHub = () => setIsHoveringGitHub(true)
    const onMouseLeaveGitHub = () => setIsHoveringGitHub(false)

    const [isHoveringLinkedIn, setIsHoveringLinkedIn] = useState(false)
    const onMouseEnterLinkedIn = () => setIsHoveringLinkedIn(true)
    const onMouseLeaveLinkedIn = () => setIsHoveringLinkedIn(false)

    const [isHoveringCV, setIsHoveringCV] = useState(false)
    const onMouseEnterCV = () => setIsHoveringCV(true)
    const onMouseLeaveCV = () => setIsHoveringCV(false)
    
    return(
        <div className="lg:mt-5 md:mt-2.5 mt-4 flex flex-row gap-x-5 xl:gap-x-6">
            <span
                onMouseEnter = {onMouseEnterGitHub}
                onMouseLeave = {onMouseLeaveGitHub}
            >
                <Link href="https://github.com/tachorzy" target="_blank">
                    {isHoveringGitHub ? (
                        <Image src="/icons/socials/GitHub-Mudbrick.svg" width="0" height="0" alt="GitHub logo active" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6 scale-110 duration-500"></Image>
                    ) : (
                        <Image src="/icons/socials/GitHub-Sandstone.svg" width="0" height="0" alt="GitHub logo inactive" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6"></Image>
                    )}
                </Link>
            </span>
            <span
                onMouseEnter = {onMouseEnterLinkedIn}
                onMouseLeave = {onMouseLeaveLinkedIn}
            >
                <Link href="https://www.linkedin.com/in/tachorzy/" target="_blank">
                    {isHoveringLinkedIn ? (
                        <Image src="/icons/socials/LinkedIn-Mudbrick.svg" width="0" height="0" alt="LinkedIn logo active" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6 scale-110 duration-500"></Image>
                    ) : (
                        <Image src="/icons/socials/LinkedIn-Sandstone.svg" width="0" height="0" alt="LinkedIn logo inactive" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:w-12 md:h-12 w-6 h-6"></Image>                    
                    )}
                </Link>
            </span>
            <span
                onMouseEnter = {onMouseEnterCV}
                onMouseLeave=  {onMouseLeaveCV}
            >
                <Link href="/resume/tachorzy_resume_april_2024.pdf" target="_blank">
                    {isHoveringCV ? (
                        <Image src="/icons/socials/Resume-Mudbrick.svg" width="0" height="0" alt="Resume logo active" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:h-12 w-6 h-6 scale-110 duration-500"></Image>
                    ) : ( 
                        <Image src="/icons/socials/Resume-Sandstone.svg" width="0" height="0" alt="Resume logo inactive" className="cursor-pointer select-none xl:w-9 xl:h-9 lg:w-8 lg:h-8 md:h-12 w-6 h-6"></Image>
                    )}
                </Link>
            </span>
      </div>
    )
}

export default SocialsTray;