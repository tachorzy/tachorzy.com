"use client"; //client component

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SocialsTray = () => {

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
        <div className="lg:xl:ml-24 ml-10 lg:xl:mt-5 mt-2.5 flex flex-row gap-x-6">
            <span
                onMouseEnter = {onMouseEnterGitHub}
                onMouseLeave = {onMouseLeaveGitHub}
            >
                <Link href="https://github.com/tachorzy" target="_blank">
                    {isHoveringGitHub ? (
                        <Image src="/GitHub-Mudbrick.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>
                    ) : (
                        <Image src="/GitHub-Sandstone.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>
                    )}
                </Link>
            </span>
            <span
                onMouseEnter = {onMouseEnterLinkedIn}
                onMouseLeave = {onMouseLeaveLinkedIn}
            >
                <Link href="https://www.linkedin.com/in/tachorzy/" target="_blank">
                    {isHoveringLinkedIn ? (
                        <Image src="/LinkedIn-Mudbrick.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>
                    ) : (
                        <Image src="/LinkedIn-Sandstone.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>                    
                    )}
                </Link>
            </span>
            <span
                onMouseEnter = {onMouseEnterCV}
                onMouseLeave=  {onMouseLeaveCV}
            >
                <Link href="/resume/tachorzy_resume_apr_2023.pdf" target="_blank">
                    {isHoveringCV ? (
                        <Image src="/Resume-Mudbrick.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>
                    ) : ( 
                        <Image src="/Resume-Sandstone.svg" width="0" height="0" alt="" className="cursor-pointer select-none lg:max-2xl:w-9 lg:max-2xl:h-9 md:w-12 md:h-12 w-6 h-6"></Image>
                    )}
                </Link>
            </span>
      </div>
    )
}

export default SocialsTray;