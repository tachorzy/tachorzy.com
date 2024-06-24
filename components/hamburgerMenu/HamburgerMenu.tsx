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

    const menuOptions: Map<string, {text: string, width: string, height: string}> = new Map([
        ["home", {text: "Home", width: "24", height: "24"}],
        ["about", {text: "About", width: "24", height: "24"}],
        ["projects", {text: "Projects", width: "24", height: "24"}],
        // ["travel", {text: "Travel", width: "27", height: "27"}],
        ["contact", {text: "Contact", width: "24", height: "24"}],
    ])

    return (
        <div>
            <button className="p-1.5 hover:bg-sandstone hover:bg-opacity-5 rounded-2xl cursor-pointer select-none border-transparent" onClick = {() => setIsActive(!isActive)}>
                <Image src="/icons/hamburgerMenu/hamburger-menu.svg" width="0" height="0" alt="hamburger menu icon" className="cursor-pointer 2xl:w-14 2xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9"/>
            </button>
            { isActive ? (
                <div className="w-64 h-48 self-end mr-12 bg-metal border-2 border-opacity-75 border-[#1C2B2D] rounded-md fixed right-0 mt-2 shadow-xl" ref={menuRef}>
                    <div className="flex flex-col text-sandstone font-bold py-3">
                        {Array.from(menuOptions.entries()).map(([option, optionDetails], index) => (
                            <div key={index} className="flex flex-row gap-x-4 items-center hover:bg-[#1C2B2D] pl-6 py-2 select-none" onClick = {() => setIsActive(!isActive)}>      
                                <Link href={option != 'home' ? `#${option}` : '/'} className="w-full flex flex-row gap-x-4 items-center">
                                    <Image src={`/icons/hamburgerMenu/${option}.svg`} width={Number(optionDetails.width)} height={Number(optionDetails.height)} alt="home icon" className=""></Image>
                                    {optionDetails.text}
                                </Link>
                            </div>
                        ))}
                        {/* <div className="flex flex-row gap-x-[1.15rem] items-center pl-6 pt-3 pb-2.5 select-none">
                            <Image src="/fanous.svg" width={36} height={36} alt="" className="pb-3 pr-[0.18rem]"></Image>
                            <LightModeToggle></LightModeToggle>
                        </div> */}
                    </div>
                </div>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;