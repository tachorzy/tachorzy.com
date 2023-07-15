"use client"; //client component

import Link from 'next/link'
import React from 'react'
import { ManropeMedium, AmiriBoldSlanted, Quest } from '../../lib/localNextFonts'
import { TypeAnimation } from 'react-type-animation';


export default async function Home() {
    return (        
        <> 
            <main className="bg-shark flex flex-col overflow-hidden">
                <div className={ManropeMedium.className + ` h-screen text-center flex flex-col gap-y-3 justify-center content-center self-center md:w-1/2`}>
                    <div className="relative mx-5 self-center">
                        <div className="flex flex-row gap-x-4 items-center">
                            <h1 className={` text-sandstone lg:xl:text-5xl md:text-4xl text-2xl font-semibold py-4 leading-relaxed select-none`}>Thank You</h1>
                            <TypeAnimation
                                className={Quest.className + ` text-sandstone lg:xl:text-5xl md:text-4xl text-2xl py-4 leading-relaxed select-none delay-700`}
                                sequence={["شكرا بزاف", 1000]}
                                style={{direction: "rtl"}}
                                cursor={false}
                            >
                            </TypeAnimation>
                        </div>
                    </div>
                    <h2 className="text-sandstone lg:xl:text-4xl md:text-3xl text-xl leading-relaxed mx-auto">{"Your message has been submitted!"}<br/>{"I'll make sure to get back to you super soon."}</h2> 
                    <button className="relative bg-sandstone px-8 py-2 rounded-md w-1/3 md:w-1/4 lg:w-1/6 self-center my-4 border-sandstone border-1 border-inherit hover:scale-105 duration-500">
                        <Link href="/" className="text-shark md:text-lg lg:text-xl font-medium z-50 text-center ">Home</Link>
                    </button>
                </div>
            </main>
        </>
    )
}
