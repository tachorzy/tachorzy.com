"use client";

import Image from 'next/image'
import React, { useContext } from 'react'
import { Context } from './MenuWrapper'

interface MenuContext {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    menuRef: React.RefObject<HTMLDivElement>
}

const MenuButton = () => {
    
    const contextValue = useContext(Context) as MenuContext;
    const { isActive, setIsActive, menuRef } = contextValue;

    return (
        <button className="p-1.5 hover:bg-sandstone duration-700 transition-colors hover:bg-opacity-5 rounded-2xl cursor-pointer select-none border-transparent" onClick = {() => setIsActive(!isActive)}>
            <Image src="/icons/hamburgerMenu/hamburger-menu.svg" width="0" height="0" alt="hamburger menu icon" className="cursor-pointer 2xl:w-14 2xl:h-14 lg:w-12 lg:h-12 md:w-10 md:h-10 w-9 h-9"/>
        </button>
    )
}

export default MenuButton;