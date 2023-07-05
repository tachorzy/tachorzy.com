"use client"; //client component

import React, { useEffect, useState } from 'react'
import styles from '../../styles/Home.module.css'
import { motion, useInView, useAnimation } from "framer-motion"
import { ManropeMedium, AmiriBoldSlanted, Quest } from '../../lib/localNextFonts'


export default function Home() {
    const [thankYouMessage, setThankYouMessage] = useState("شكرا بزاف")
    const [animationKey, setAnimationKey] = useState(0);

    useEffect(() => {
        const interval = setInterval(() =>{
            setThankYouMessage('Thank You')
            setAnimationKey((prevKey) => prevKey + 1);
        }, 3000)
        return () => clearInterval(interval);
    }, [])
    

    return (        
        <> 
            <main className={styles.main}>
                <div className={ManropeMedium.className + ` h-screen text-center flex flex-col gap-y-2 justify-center content-center self-center w-1/2`}>
                    <div className="relative w-3/4 self-center">
                        <h1 className={Quest.className + ` text-sandstone lg:xl:text-8xl md:text-7xl text-5xl py-4 leading-relaxed select-none`} key={animationKey}>{thankYouMessage}</h1>
                        <motion.div
                            key={animationKey}
                            variants={{
                                hidden: { right: 0 },
                                visible: { right: "100%" },
                                
                            }}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0 }}
                            transition={{time: 6, duration: 0.5, ease: "easeIn"}}
                            style={{
                                position: "absolute",
                                top: 4, 
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#1c2324",
                                zIndex: 40,
                            }}
                        />
                        {/* <motion.div
                            variants={{
                                hidden: { left: "100%" },
                                visible: { left: 0 },         
                            }}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0 }}
                            transition={{duration: 0.5, delay: 3, ease: "easeIn"}}
                            style={{
                                position: "absolute",
                                top: 4, 
                                bottom: 4,
                                left: 0,
                                right: 0,
                                background: "#1c2324",
                                zIndex: 40,
                            }}
                        /> */}
                    </div>
                    <h2 className="text-sandstone lg:xl:text-4xl md:text-3xl text-2xl leading-relaxed mx-auto">Your message has been submitted!<br/>I'll make sure to get back to you super soon.</h2> 
                </div>
            </main>
        </>
    )
}
