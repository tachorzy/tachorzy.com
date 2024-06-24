"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { motion } from 'framer-motion';
import MenuButton from './MenuButton'

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    const menuOptions: Map<string, {text: string}> = new Map([
        ["home", {text: "Home"}],
        ["about", {text: "About"}],
        ["projects", {text: "Projects"}],
        // ["travel", {text: "Travel", width: "27", height: "27"}],
        ["contact", {text: "Contact"}],
    ])

    return (
        <div>
            <MenuButton isActive={isActive} setIsActive={setIsActive}/>
            { isActive ? (
                <motion.div
                    initial={{ x: '100vw' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100vw' }}
                    transition={{ type: 'spring', stiffness: 30 }}
                    className="w-64 h-48 self-end mr-12 bg-metal border-2 border-opacity-75 border-[#1C2B2D] rounded-md fixed right-0 mt-2 shadow-xl"
                    ref={menuRef}
                >
                    <div className="flex flex-col text-sandstone font-bold py-3">
                        {Array.from(menuOptions.entries()).map(([option, optionDetails], index) => (
                            <div key={index} className="flex flex-row gap-x-4 items-center transition-colors hover:bg-[#1C2B2D] pl-6 py-2 select-none" onClick = {() => setIsActive(!isActive)}>      
                                <Link href={option != 'home' ? `#${option}` : '/'} className="w-full flex flex-row gap-x-4 items-center">
                                    <Image src={`/icons/hamburgerMenu/${option}.svg`} width={19} height={19} alt="home icon" className=""></Image>
                                    {optionDetails.text}
                                </Link>
                            </div>
                        ))}
                    </div>
                </motion.div>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;