import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LightModeToggle from '../components/lightModeToggle'

const HamburgerMenu = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div>
            <button className="p-1.5 hover:bg-sandstone hover:bg-opacity-5 rounded-2xl cursor-pointer select-none" onClick = {() => setIsActive(!isActive)}>
                <Image src="/hamburger-menu-Sandstone.svg" width={48} height={42} alt="" className="cursor-pointer"/>
            </button>
            { isActive ? (
                <div className="w-56 h-58 self-end mr-12 bg-sandstone rounded-2xl fixed right-0 mt-2 shadow-xl">
                    <div className="flex flex-col text-bark font-bold py-4 gap-y-4 pl-20">
                        <Link href="/">About</Link>
                        <Link href="/">Skills</Link>
                        <Link href="/">Projects</Link>
                        <Link href="/">Travel</Link>
                        <Link href="/">Contact Me</Link>
                        <LightModeToggle></LightModeToggle>
                    </div>
                </div>
            ) : (
             <></>   
            )}
        </div>
    )
}

// const HamburgerMenu = () => {
//     const [isExpanded, setIsExpanded] = useState(false)

//     return (
//         <Menu 
//             customBurgerIcon={<HamburgerIcon/>} 
//             width={184} 
//             className="relative bg-dusty rounded-2xl shadow-2xl mr-12 select-none cursor-pointer"
//             right
//             styles={{ 
//                 bmMenuWrap: { height: '25%' }, 
//                 bmOverlay: { background: 'transparent' }
//             }}
//         >
//             <Link className="text-bark text-lg pl-6 py-1.5 font-semibold" href="#about">test</Link>
//             <Link className="text-bark text-lg pl-6 py-1.5 font-semibold" href="#portfolio">test</Link>
//             <Link className="text-bark text-lg pl-6 py-1.5 font-semibold" href="#travel">test</Link>
//             <Link className="text-bark text-lg pl-6 py-1.5 font-semibold   " href="#contact">test</Link>
//         </Menu>
//     )
// }

export default HamburgerMenu;