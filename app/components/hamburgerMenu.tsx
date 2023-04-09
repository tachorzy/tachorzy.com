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
                    <div className="flex flex-col text-bark font-bold py-3">
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2">      
                            <Image src="/aboutme.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/">About</Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2">
                            <Image src="/skills.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/">Skills</Link>
                        </div>
                        <div className="flex flex-row gap-x-4 items-center hover:bg-dusty pl-6 py-2">
                            <Image src="/projects.svg" width={24} height={24} alt="" className=""></Image>              
                            <Link href="/">Projects</Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2">
                            <Image src="/dallah.svg" width={27} height={27} alt="" className=""></Image>              
                            <Link href="/">Travel</Link>
                        </div>
                        <div className="flex flex-row gap-x-3 items-center hover:bg-dusty pl-6 py-2">
                            <Image src="/contactme.svg" width={26} height={26} alt="" className=""></Image>              
                            <Link href="/">Contact Me</Link>
                        </div>
                        <div className="flex flex-row gap-x-[1.15rem] items-center pl-6 py-3">
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