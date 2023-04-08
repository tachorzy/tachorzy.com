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
        <div className="lg:xl:ml-24 ml-12 lg:xl:mt-5 mt-4 flex flex-row gap-x-6">
            <span>
                <Image src="/GitHub-Sandstone.svg" width={36} height={36} alt="" className="cursor-pointer"></Image>
            </span>
            <span>
                <Image src="/LinkedIn-Sandstone.svg" width={36} height={36} alt="" className="cursor-pointer"></Image>
            </span>
            <span>
                <Image src="/Resume-Sandstone.svg" width={36} height={36} alt="" className="cursor-pointer"></Image>
            </span>
      </div>
    )
}

export default SocialsTray;