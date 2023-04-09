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
                    <div className="flex flex-col text-bark font-bold py-4 gap-y-2 pl-8">
                        <div className="flex flex-row gap-x-7 items-center">      
                            <Image src="/aboutme.svg" width={34} height={34} alt="" className=""></Image>              
                            <Link href="/">About</Link>
                        </div>
                        <div className="flex flex-row gap-x-7 items-center">
                            <Image src="/skills.svg" width={36} height={34} alt="" className=""></Image>              
                            <Link href="/">Skills</Link>
                        </div>
                        <div className="flex flex-row gap-x-7 items-center">
                            <Image src="/projects.svg" width={34} height={34} alt="" className=""></Image>              
                            <Link href="/">Projects</Link>
                        </div>
                        <div className="flex flex-row gap-x-[1.3rem] items-center">
                            <Image src="/dallah.svg" width={40} height={40} alt="" className=""></Image>              
                            <Link href="/">Travel</Link>
                        </div>
                        <div className="flex flex-row gap-x-6 items-center">
                            <Image src="/contactme.svg" width={36} height={36} alt="" className=""></Image>              
                            <Link href="/">Contact Me</Link>
                        </div>
                        <div className="flex flex-row gap-x-[1.15rem] items-center">
                            <Image src="/fanous.svg" width={40} height={40} alt="" className="pb-3 pr-[0.18rem]"></Image>
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