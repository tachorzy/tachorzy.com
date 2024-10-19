"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { menuOptions } from '../../models/menuOptions';
import { Context } from './MenuWrapper';

const Dropdown = () => {

    const { isActive, handleButtonClick, menuRef } = useContext(Context);
     
    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="w-64 h-56 self-end mr-6 md:mr-12 bg-metal border-2 border-opacity-75 border-[#1C2B2D] rounded-md fixed right-0 mt-2"
            ref={menuRef}
        >
            <div className="flex flex-col text-sandstone font-bold py-3">
                {Array.from(menuOptions.entries()).map(([option, optionDetails], index) => (
                    <div key={index} className="flex flex-row gap-x-4 items-center transition-colors hover:bg-[#1C2B2D] pl-6 py-2 select-none" onClick={handleButtonClick}>      
                        <Link href={option != 'home' ? `/#${option}` : '/'} className="w-full flex flex-row gap-x-4 items-center">
                            <Image src={`/icons/hamburgerMenu/${option}.svg`} width={19} height={19} alt="home icon" className=""></Image>
                            {optionDetails.text}
                        </Link>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Dropdown;