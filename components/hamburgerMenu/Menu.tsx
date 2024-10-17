"use client"

import React, { useContext } from 'react'
import MenuButton from './MenuButton'
import Dropdown from './Dropdown'
import { Context } from './MenuWrapper'


interface MenuContext {
    isActive: boolean,
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    menuRef: React.RefObject<HTMLDivElement>
}

const Menu = () => {

    const contextValue = useContext(Context) as MenuContext;
    const { isActive, setIsActive, menuRef } = contextValue;
    
    return (
        <div>
            <MenuButton/>
            {isActive &&
                <Dropdown/>
            }
        </div>
    )
}

export default Menu;