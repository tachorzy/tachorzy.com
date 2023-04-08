import Head from 'next/head'
import Image from 'next/image'
import { Inter, Manrope } from '@next/font/google'
import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import NavBar from '../components/navbar'


const inter = Inter({ subsets: ['latin'] })

// const aswaq = localFont({
//   src: '../fonts/Aswaq-Regular.ttf',
// })

export const ManropeExtraBold = localFont({
  src: '../public/fonts/Manrope/Manrope-ExtraBold.otf',
  weight: '500'
})

export const ManropeMedium = localFont({
  src: '../public/fonts/Manrope/Manrope-Medium.otf',
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
        <div className={styles.navBar}>
            <NavBar></NavBar>
        </div>

        <section>
          {/* HEADER SECTION */}
          <div className={ManropeExtraBold.className}>
            <h1 className="text-dusty lg:xl:text-landingPageTitle text-5xl font-bold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-20 mt-12">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:xl:text-2xl text-lg font-bold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-4.5 mt-3 leading-relaxed w-4/5 ">Hey, I'm Tariq, a 3rd year Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>
          </div>

          {/* ABOUT ME */}
          <div className={ManropeMedium.className}>
            <span className={ManropeExtraBold.className}>
              <h3 className="text-dusty lg:xl:text-6xl text-2xl font-extrabold lg:xl:ml-24 ml-12 pt-2 lg:xl:mt-6 mt-4">About Me</h3>
            </span>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5">I'm an aspiring web-developer with a tireless passion for front-end development. With that passion, I continously drive myself to garner new knowledge and experience in the space of computer science.</p>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5">Over the years, I've discovered my strengths in tailoring sleek and intuitive user interfaces and experiences in component-based development. And, since then I've used these strengths to create a confluence of my passions and interests. All of which you can explore here.</p>
            <p className="text-sandstone lg:xl:text-xl font-medium lg:xl:ml-24 ml-12 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose w-3/5"></p>
          </div>
          <div className="">

          </div>
        </section>
      </main>
    </>
  )
}
