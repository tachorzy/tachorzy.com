"use client"; //client component

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import LightModeToggle from './LightModeToggle'

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    return (
        <div>
            <button className="p-1.5 hover:bg-sandstone hover:bg-opacity-5 rounded-2xl cursor-pointer select-none border-transparent    " onClick = {() => setIsActive(!isActive)}>
                <Image src="/icons/hamburger-menu-sandstone.svg" width="0" height="0" alt="hamburger menu icon" className="cursor-pointer lg:max-2xl:w-12 lg:max-2xl:h-12 md:w-10 md:h-10 w-9 h-9"/>
            </button>
            { isActive ? (
                <div className="w-56 h-58 self-end mr-12 bg-sandstone rounded-2xl fixed right-0 mt-2 shadow-xl" ref={menuRef}>
                    {/* REFACTOR THIS: make use of an interface and iterate thro this with a loop */}
                    <div className="flex flex-col text-bark font-bold py-3">
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">      
                            <Link href="/" className="w-full flex flex-row gap-x-4 items-center">
                                <Image src="/icons/home.svg" width={24} height={24} alt="home icon" className=""></Image>              
                                Home
                                </Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">      
                            <Link href="#about" className="w-full flex flex-row gap-x-4 items-center">
                                <Image src="/icons/aboutme.svg" width={24} height={24} alt="about me icon" className=""></Image>              
                                About
                                </Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Link href="#projects" className="w-full flex flex-row gap-x-4 items-center">
                                <Image src="/icons/projects.svg" width={24} height={24} alt="projects icon" className=""></Image>              
                                Projects
                            </Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Link href="#travel" className="w-full flex flex-row gap-x-4 items-center">
                                <Image src="/icons/dallah.svg" width={27} height={27} alt="travel icon" className=""></Image>              
                                Travel    
                            </Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Link href="#contact" className="w-full flex flex-row gap-x-4 items-center">
                                <Image src="/icons/contactme.svg" width={26} height={26} alt="contact icon" className=""></Image>              
                                Contact
                            </Link>
                        </div>
                        <div className="flex flex-row gap-x-[1.15rem] items-center pl-6 pt-3 pb-2.5 select-none">
                            {/* <Image src="/fanous.svg" width={36} height={36} alt="" className="pb-3 pr-[0.18rem]"></Image> */}
                            <LightModeToggle></LightModeToggle>
                        </div>
                    </div>
                </div>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;