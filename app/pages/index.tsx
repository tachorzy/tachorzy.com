import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import SocialsTray from '../components/socialsTray'
import HamburgerMenu from '../components/hamburgerMenu'
import NextPageButton from '../components/nextPageButton'
import { skills } from '../lib/skills'

export const ManropeExtraBold = localFont({
  src: '../public/fonts/Manrope/Manrope-ExtraBold.otf',
  weight: '500'
})

export const ManropeMedium = localFont({
  src: '../public/fonts/Manrope/Manrope-Medium.otf',
  weight: '500'
})

export const AmiriBoldSlanted = localFont({
  src: '../public/fonts/Amiri/ArbFONTS-Amiri-Boldslanted.ttf',
  weight: '500'
})

export const ManropeRegular = localFont({
  src: '../public/fonts/Manrope/Manrope-Regular.otf',
  weight: '500'
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Tariq Achor Zyad</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/T.png" />
      </Head>

      <main className={styles.main}>
        <div className={ManropeRegular.className}>
          <div className="fixed top-0 right-0 mt-12 mr-12 mb-2 z-50">
            <HamburgerMenu/>
          </div>
        </div>

        <section className = "h-screen">
          {/* HEADER SECTION */}
          <div className={ManropeExtraBold.className}>
            <h1 className="text-dusty lg:xl:text-landingPageTitle text-5xl font-bold lg:xl:ml-24 ml-12 pt-10 lg:xl:mt-20 mt-12">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:xl:text-2xl text-lg font-bold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-5 mt-4 leading-relaxed w-4/5 ">Hey, I'm Tariq, a 3rd year Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>

            {/* SOCIALS TRAY */}
            <SocialsTray></SocialsTray>
          </div>

          <div className="flex flex-col justify-end">
            <Image src="/T.png" width={100} height={100} className="absolute right-0 bottom-0 mr-12 mb-12 select-none z-0" alt=""></Image>
          </div>
          <div className="mt-[19rem]">
            <NextPageButton nextPageReference={'#about'}></NextPageButton>
          </div>
        </section>

        <section id="about" className="h-screen">
          {/* ABOUT ME */}
          <div className={ManropeMedium.className}>
            <span className={ManropeExtraBold.className}>
              <h3 className="text-dusty lg:xl:text-6xl text-2xl font-extrabold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-36 mt-18">About Me</h3>
            </span>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5">I'm an aspiring web-developer with a tireless passion for front-end development. With that passion, I continously drive myself to garner new knowledge and experience.</p>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5">Over the years, I've discovered my strengths in component-based development. I've built scalable applications, created inviting user interfaces, and enabled polished user experiences. All of which you can find on this portfolio.</p>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5 mb-52"></p>
          </div>
          <div className={AmiriBoldSlanted.className}>
            <div className="flex flex-row justify-end h-full align-bottom">
              <h4 className="text-9xl text-dusty relative ml-auto bottom-0 mr-12 mt-auto align-bottom select-none z-0">١</h4>
            </div>
          </div>
        </section>        
        
        <NextPageButton nextPageReference={'#skills'}></NextPageButton>

        <section id="skills" className="h-screen">
          <div className={ManropeMedium.className}>
            <span className={ManropeExtraBold.className}>
              <h3 className="text-dusty lg:xl:text-6xl text-3xl font-extrabold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-36 mt-18">Skills</h3>
              <div className="flex flex-col">
                {Array.from(skills.entries()).map(([programmingLanguage, description]) => {
                    return(
                    <div className="flex flex-col">
                      <details key={programmingLanguage} className="">
                        <summary className="text-dusty lg:xl:text-2xl text-lg font-extrabold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-1.5 mt-0.5 cursor-pointer list-none">
                          <div className="flex items-center">
                            <Image src ={`/${programmingLanguage}.png`} width={30} height={30} alt=""></Image>
                            <h4 className="pl-2.5 text-sandstone">{programmingLanguage}</h4>
                          </div>
                        </summary>
                        <p className="text-sandstone lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-3.5 mt-3 cursor-pointer inline">{description}</p>
                      </details>
                    </div>)})}
              </div>
            </span>
          </div>

          <div className={AmiriBoldSlanted.className}>
            <div className="flex flex-row justify-end h-full align-bottom">
              <h4 className="text-9xl text-dusty relative ml-auto bottom-0 mr-12 mt-auto align-bottom select-none z-0">٢</h4>
            </div>
          </div>
        </section>

        <NextPageButton nextPageReference={'#projects'}></NextPageButton>
      
        </main>
    </>
  )
}
