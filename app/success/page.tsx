import React, { ReactElement } from 'react'
import styles from '../../styles/Home.module.css'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../../lib/localNextFonts'

export default function Home() {

  return (
    <> 
      <main className={styles.main}>
            <div className={ManropeMedium.className + ` h-screen text-center flex flex-col justify-center content-center`}>
                <h1 className="text-sandstone lg:xl:text-7xl md:text-6xl text-5xl font-semibold leading-relaxed ">ⵜⴰⵏⵎⵎⵉⵔⵜ</h1>
                <h1 className={AmiriBoldSlanted.className + ` text-sandstone lg:xl:text-8xl md:text-7xl text-5xl leading-relaxed`}>شكرا بزاف</h1>
            </div>
      </main>
    </>
  )
}
