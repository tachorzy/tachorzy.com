"use client"; //client component

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { motion, useInView, useAnimation } from "framer-motion"
import { ManropeMedium, AmiriBoldSlanted, Quest } from '../../lib/localNextFonts'
import { TypeAnimation } from 'react-type-animation';


export default async function Home() {
    const [typeAnimationCursor, setTypeAnimationCursor] = useState(true)
   
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTypeAnimationCursor(false);
          }, 10);
          return () => clearTimeout(timeout);
    }, []);

    return (        
        <> 
            <main className={styles.main}>
                <div className={ManropeMedium.className + ` h-screen text-center flex flex-col gap-y-3 justify-center content-center self-center w-1/2`}>
                    <div className="relative mx-5 self-center">
                        <div className="flex flex-row gap-x-4 items-center">
                            <h1 className={` text-sandstone lg:xl:text-5xl md:text-4xl text-3xl font-semibold py-4 leading-relaxed select-none`}>Thank You</h1>
                            <TypeAnimation
                                className={Quest.className + ` text-sandstone lg:xl:text-5xl md:text-4xl text-3xl py-4 leading-relaxed select-none delay-700`}
                                sequence={["شكرا بزاف", 1000]}
                                style={{direction: "rtl"}}
                                cursor={false}
                            >
                            </TypeAnimation>
                        </div>
                    </div>
                    <h2 className="text-sandstone lg:xl:text-4xl md:text-3xl text-2xl leading-relaxed mx-auto">Your message has been submitted!<br/>I'll make sure to get back to you super soon.</h2> 
                    <button className="relative bg-sandstone px-8 py-2 rounded-md w-1/6 self-center my-4 border-sandstone border-1 border-inherit hover:group-scale-105">
                        <Link href="/" className="text-shark text-xl font-medium hover:scale-105 z-50 ">Home</Link>
                        <div className="group rounded-full absolute left-0 bottom-0 bg-slate w-2 h-2 overflow-hidden z-10"></div>
                    </button>
                </div>
            </main>
        </>
    )
}
