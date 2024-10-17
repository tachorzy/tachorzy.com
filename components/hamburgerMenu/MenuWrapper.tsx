"use client";

import React, { useState, useMemo, useRef, createContext } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import Menu from './Menu'

interface MenuContext {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    menuRef: React.RefObject<HTMLDivElement>
}

export const Context = React.createContext({} as MenuContext);

const MenuWrapper = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    
    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    const contextValue = useMemo(() => ({ isActive, setIsActive, menuRef }), [isActive, setIsActive, menuRef]);

    return (
        <Context.Provider value={contextValue}>
            <Menu/>
        </Context.Provider>
    )
}

export default MenuWrapper;