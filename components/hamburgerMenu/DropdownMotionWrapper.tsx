"use client";

import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import { Context } from './MenuWrapper';
import DropdownOptions from './DropdownOptions';

const DropdownMotionWrapper = () => {

    const { menuRef } = useContext(Context);
     
    return (
        <motion.div
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            exit={{ x: '100vw' }}
            transition={{ type: 'spring', stiffness: 30 }}
            className="w-64 h-56 self-end mr-6 md:mr-12 bg-metal border-2 border-opacity-75 border-[#1C2B2D] rounded-md fixed right-0 mt-2"
            ref={menuRef}
        >
            <DropdownOptions/>
        </motion.div>
    )
}

export default DropdownMotionWrapper;