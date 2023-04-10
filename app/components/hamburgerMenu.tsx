import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import LightModeToggle from '../components/lightModeToggle'

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = () => {
        setIsActive(false)
    }

    useOnClickOutside(menuRef, handleClickOutside)

    return (
        <div>
            <button className="p-1.5 hover:bg-sandstone hover:bg-opacity-5 rounded-2xl cursor-pointer select-none" onClick = {() => setIsActive(!isActive)}>
                <Image src="/hamburger-menu-Sandstone.svg" width={48} height={42} alt="" className="cursor-pointer"/>
            </button>
            { isActive ? (
                <div className="w-56 h-58 self-end mr-12 bg-sandstone rounded-2xl fixed right-0 mt-2 shadow-xl" ref={menuRef}>
                    <div className="flex flex-col text-bark font-bold py-3">
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">      
                            <Image src="/aboutme.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/" className="w-full">About</Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Image src="/skills.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/" className="w-full">Skills</Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Image src="/projects.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/" className="w-full">Projects</Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Image src="/dallah.svg" width={27} height={27} alt="" className=""></Image>              
                            <Link href="/" className="w-full">Travel</Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2 select-none">
                            <Image src="/contactme.svg" width={26} height={26} alt="" className=""></Image>              
                            <Link href="/">Contact</Link>
                        </div>
                        <div className="flex flex-row gap-x-[1.15rem] items-center pl-6 pt-3 pb-2.5 select-none">
                            {/* <Image src="/fanous.svg" width={36} height={36} alt="" className="pb-3 pr-[0.18rem]"></Image> */}
                            <LightModeToggle></LightModeToggle>
                        </div>
                    </div>
                </div>
            ) : (
             <></>   
            )}
        </div>
    )
}

export default HamburgerMenu;