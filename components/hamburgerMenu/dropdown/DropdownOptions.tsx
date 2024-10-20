"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { menuOptions } from '../../../models/menuOptions';
import { Context } from '../MenuWrapper';

const DropdownOptions = () => {

    const { handleButtonClick } = useContext(Context);
     
    return (
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
    )
}

export default DropdownOptions;