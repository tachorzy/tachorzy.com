"use client";

import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import MenuButton from './MenuButton'
import Dropdown from './Dropdown'

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    return (
        <div>
            <MenuButton isActive={isActive} setIsActive={setIsActive}/>
            { isActive ? (
                <Dropdown isActive={isActive} setIsActive={setIsActive} menuRef={menuRef}/>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;