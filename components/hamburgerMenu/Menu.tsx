"use client"

import React, { useContext } from 'react'
import MenuButton from './MenuButton'
import Dropdown from './Dropdown'
import { Context } from './MenuWrapper'

const Menu = () => {

    const { isActive, handleButtonClick } = useContext(Context);
    
    return (
        <div>
            <MenuButton/>
            {isActive && <Dropdown/>}
        </div>
    )
}

export default Menu;