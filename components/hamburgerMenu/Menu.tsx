"use client"

import React, { useContext } from 'react'
import MenuButton from './MenuButton'
import DropdownMotionWrapper from './dropdown/DropdownMotionWrapper'
import { Context } from './MenuWrapper'

const Menu = () => {

    const { isActive } = useContext(Context);
    
    return (
        <div>
            <MenuButton/>
            {isActive && <DropdownMotionWrapper/>}
        </div>
    )
}

export default Menu;