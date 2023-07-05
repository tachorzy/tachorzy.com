import React, { ReactElement } from 'react'
import styles from '../../styles/Home.module.css'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted, RubikMedium, Quest } from '../../lib/localNextFonts'

export default function Home() {

  return (
    <> 
      <main className={styles.main}>
            <div className={ManropeMedium.className + ` h-screen text-center flex flex-col gap-y-2 justify-center content-center self-center w-1/2`}>
                <h1 className="text-sandstone lg:xl:text-7xl md:text-6xl text-5xl font-semibold leading-relaxed ">ⵜⴰⵏⵎⵎⵉⵔⵜ</h1>
                <h1 className={Quest.className + ` text-sandstone lg:xl:text-8xl md:text-7xl text-5xl leading-relaxed`}>شكرا بزاف</h1>
                <h2 className="text-sandstone lg:xl:text-4xl md:text-3xl text-2xl leading-relaxed mx-auto">Your message has been submitted!<br/>I'll make sure to get back to you super soon.</h2>
            </div>
      </main>
    </>
  )
}
