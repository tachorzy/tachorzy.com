"use client"; //client component

import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { motion, useInView, useAnimation } from "framer-motion"
import { ManropeMedium, AmiriBoldSlanted, Quest } from '../../lib/localNextFonts'


export default function Home() {
    const thankYouVariants: string[] = ["شكرا بزاف", "ⵜⴰⵏⵎⵎⵉⵔⵜ", "Merci beaucoup", "Thank You" ]
    const [thankYouMessage, setThankYouMessage] = useState("شكرا بزاف")
    
    useEffect(() => {
        const interval = setInterval(() =>{
            let index: number = 0
            setThankYouMessage(thankYouVariants[index + 1 % thankYouVariants.length])
        }, 5000)
    }, [])
    
    return (
        <> 
            <main className={styles.main}>
                <div className={ManropeMedium.className + ` h-screen text-center flex flex-col gap-y-2 justify-center content-center self-center w-1/2`}>
                    <div className="relative w-3/4 self-center">
                        <h1 className={Quest.className + ` text-sandstone lg:xl:text-8xl md:text-7xl text-5xl py-4 leading-relaxed`}>{thankYouMessage}</h1>
                        <motion.div
                            variants={{
                                hidden: { right: 0 },
                                visible: { right: "100%" },
                                
                            }}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0 }}
                            transition={{time: 6, duration: 0.5, ease: "easeIn", repeat: Infinity}}
                            style={{
                                position: "absolute",
                                top: 4, 
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#1c2324",
                                zIndex: 50,
                            }}
                        />
                        <motion.div
                            variants={{
                                hidden: { left: "100%" },
                                visible: { left: 0 },
                                
                            }}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0 }}
                            transition={{time: 6, duration: 0.5, delay: 3, ease: "easeIn", repeat: Infinity}}
                            style={{
                                position: "absolute",
                                top: 4, 
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#1c2324",
                                zIndex: 50,
                            }}
                        />
                    </div>
                    <h2 className="text-sandstone lg:xl:text-4xl md:text-3xl text-2xl leading-relaxed mx-auto">Your message has been submitted!<br/>I'll make sure to get back to you super soon.</h2> 
                </div>
            </main>
        </>
    )
}
