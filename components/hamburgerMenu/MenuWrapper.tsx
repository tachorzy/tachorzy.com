"use client";

import React, { useState, useRef, createContext } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Menu from './Menu'

export interface MenuContext {
    isActive: boolean,
    handleButtonClick: () => void,
    menuRef: React.RefObject<HTMLDivElement>
}

export const Context = createContext({} as MenuContext);

const MenuWrapper = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    
    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    const handleButtonClick = () => {
        setIsActive(!isActive)
    }

    const contextValue = { isActive, handleButtonClick, menuRef }

    return (
        <Context.Provider value={contextValue}>
            <Menu/>
        </Context.Provider>
    )
}

export default MenuWrapper;