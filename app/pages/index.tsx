import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import localFont from '@next/font/local'
import SocialsTray from '../components/socialsTray'
import SkillsTray from '../components/skillsTray'
import HamburgerMenu from '../components/hamburgerMenu'
import NextPageButton from '../components/nextPageButton'
import ProjectCard from '../components/projectCard'
import ProjectTechTray from '../components/projectTechTray'
import { projects } from '../lib/projects'
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
          <div className="fixed top-0 right-0 md:lg:xl:2xl:mt-12 md:lg:xl:2xl:mr-12 mt-6 mr-6 z-50">
            <HamburgerMenu/>
          </div>
        </div>

        <section className = "relative h-screen">
          {/* HEADER SECTION */}
          <div className={ManropeExtraBold.className}>
            <h1 className=" text-dusty lg:xl:2xl:text-landingPageTitle md:text-5xl text-5xl font-bold md:lg:xl:ml-24 ml-10 md:lg:xl:2xl:mt-28 mt-32">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:xl:text-2xl md:text-lg text-landingPageBioMobile font-bold md:lg:xl:ml-24 ml-10 pt-2 lg:xl:mt-5 mt-4 leading-relaxed w-4/5 ">Hey, I'm Tariq, a 3rd year Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>

            {/* SOCIALS TRAY */}
            <SocialsTray></SocialsTray>
          </div>

          <div className="flex flex-col justify-end">
            <Image src="/T.png" width={100} height={100} className="absolute right-0 bottom-0 mr-12 mb-12 select-none z-0 hidden md:block" alt=""></Image>
            <Image src="/T.png" width={60} height={60} className="absolute right-0 bottom-0 mr-12 mb-12 select-none z-0 md:hidden block" alt=""></Image>

          </div>
          <div className="mt-[19rem] hidden md:block">
            <NextPageButton nextPageReference={'#about'}></NextPageButton>
          </div>
        </section>

        <section id="about" className="relative h-screen mt-24">
          {/* ABOUT ME */}
          <div className={ManropeMedium.className}>
            <span className={ManropeExtraBold.className}>
              <h3 className="text-dusty lg:xl:text-6xl text-2xl font-extrabold lg:xl:ml-24 ml-10 pt-2 lg:xl:mt-32 mt-24">About Me</h3>
            </span>
            <p className="text-sandstone lg:xl:2xl:text-xl text-xs font-medium lg:xl:ml-24 ml-10 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose md:lg:xl:2xl:w-3/5 w-4/5 ">I'm a developer with a tireless passion for full-stack web development. With that passion, I continously drive myself to learn, grow and create.</p>
            <p className="text-sandstone lg:xl:2xl:text-xl text-xs font-medium lg:xl:ml-24 ml-10 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose md:lg:xl:2xl:w-3/5 w-4/5">Over the years, I've built scalable applications, created responsive user interfaces, and enabled user-focused experiences. All of which you can find here on this portfolio.</p>
            <p className="text-sandstone lg:xl:2xl:text-xl text-xs font-medium lg:xl:ml-24 ml-10 pt-1.5 lg:xl:mt-2 mt-1.5 leading-loose md:lg:xl:2xl:w-3/5 w-4/5">The technologies that I use:</p>
          </div>
          <div className="pt-3 lg:xl:ml-24 ml-10 mb-[7.5rem]">
            <SkillsTray></SkillsTray>
          </div>
          <div className={AmiriBoldSlanted.className}>
            <div className="grid grid-rows-1 justify-end h-full align-bottom">
              <h4 className="lg:xl:2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 md:xl:2xl:mr-12 mr-10 mt-5 align-bottom select-none z-0">١</h4>
            </div>
          </div>
        </section>        
        
        <div className="hidden md:block">
          <NextPageButton nextPageReference={'#projects'}></NextPageButton>
        </div>
  
        <section className="relative h-screen md:lg:xl:2xl:mb-0 mb-80">
          <span className={ManropeExtraBold.className}>
            <h3 className="text-dusty lg:xl:text-6xl text-2xl font-extrabold lg:xl:ml-24 ml-10 lg:xl:mt-32 mt-4 pt-20 mb-7"  id="projects">Projects</h3>
          </span>
          
          {/* <div>
            {Array.from(projects.entries()).map(([projectName, projectDetails]) => {
                return(
                  <div className="lg:xl:ml-24 ml-12">
                    <ProjectCard name={projectName} imageUrl={projectDetails.imageUrl} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                  </div>
              )
              })}
          </div> */}
          <div className="flex flex-col gap-y-10 mt-2">
            <div className="lg:xl:ml-24 ml-10 flex md:lg:xl:2xl:flex-row flex-col">
              <Link href="https://www.gibraltr.com/" target="_blank">
                <Image 
                  src="/passport_akira.gif" 
                  height="0" 
                  width="0" 
                  alt="" 
                  className="rounded-3xl sepia-75 contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:lg:xl:2xl:w-80 md:lg:xl:2xl:h-44 w-56 h-36"
                >
                </Image>
              </Link>

              <div className="flex flex-col md:lg:xl:2xl:w-1/2 w-5/6 lg:xl:ml-9">
                <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:lg:xl:2xl:pt-0 pt-3">Gibraltr</h5>
                  <p className="text-mudbrick lg:xl:text-base text-xs  font-medium pt-2 pb-3 leading-relaxed">With ever changing travel restrictions worldwide, it's always best to know before you go. And that's why Gibraltr provides a robust search engine for travelers to find visa requirements. Available for 197+ countries! With over 30,000 possible results!</p>
                  <ProjectTechTray techStack={["Next.js", "Javascript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/Gibraltr"} hostingLink={"https://www.gibraltr.com/"}></ProjectTechTray>
                </div>
              </div>
            </div>

            <div className="lg:xl:ml-24 ml-10 flex md:lg:xl:2xl:flex-row flex-col">
              
              <Link href="https://github.com/tachorzy/COSC4353-Project-Group39" target="_blank">
                <Image 
                  src="/art-artist.gif" 
                  width="0"
                  height="0"
                  alt=""
                  className="rounded-3xl sepia-75 contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:lg:xl:2xl:w-80 md:lg:xl:2xl:h-44 w-56 h-36"
                ></Image>
              </Link>

              <div className="flex flex-col md:lg:xl:2xl:w-1/2 w-5/6 lg:xl:ml-9">
                <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:lg:xl:2xl:pt-0 pt-3">This Portfolio</h5>
                  <p className="text-mudbrick lg:xl:text-base text-xs  font-medium pt-2 pb-3 leading-relaxed">I've designed this page as a space to present my professional work in one accessible place. And in this one place, my passions for web-development and design meet. Here you'll find my projects, blogs, and where to best reach me.</p>
                  <ProjectTechTray techStack={["Next.js", "Javascript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/tachorzy.com"} hostingLink={"https://tachorzy.com/"}></ProjectTechTray>
                </div>
              </div>
            </div>
            
            <div className={AmiriBoldSlanted.className}>
              <div className="grid grid-rows-1 justify-end h-full align-bottom">
                  <h4 className="lg:xl:2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٢</  h4>
              </div>
            </div>
          </div>
        </section>
        
        <div className="mt-32 hidden md:block">
            <NextPageButton nextPageReference={'#more-projects'}></NextPageButton>
        </div>

        <section id="more-projects" className = "relative h-screen">
          <div className="flex flex-col gap-y-10 lg:xl:mt-32">
            <div className="lg:xl:ml-24 ml-10 flex md:lg:xl:2xl:flex-row flex-col">
              <Link href="https://github.com/tachorzy/CodeRED-Redacted" target="_blank">
                <Image 
                  src="/aestheticGear.gif" 
                  height="0" 
                  width="0"
                  alt="" 
                  className="rounded-3xl sepia-[.9] contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:lg:xl:2xl:w-80 md:lg:xl:2xl:h-44 w-56 h-36"
                >
                </Image>
              </Link>

              <div className="flex flex-col md:lg:xl:2xl:w-1/2 w-5/6 lg:xl:ml-9 ">
                <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:lg:xl:2xl:pt-0 pt-3">Pipeline</h5>
                    <p className="text-mudbrick lg:xl:text-base text-xs font-medium pt-2 pb-3 leading-relaxed">A web app made to enable companies in calculating fuel quotes, keeping track of orders, and managing fuel purchases. Pipeline provides an approachable user-friendly design for any business to navigate, whether small or large.</p>
                    <ProjectTechTray techStack={["Next.js", "JavaScript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/COSC4353-Project-Group39"} hostingLink={""}></ProjectTechTray>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-y-10 mt-2">
              <div className="lg:xl:ml-24 ml-10 flex md:lg:xl:2xl:flex-row flex-col">
                <Link href="https://github.com/tachorzy/battuta.ai" target="_blank">
                  <Image 
                    src="/plane-aesthetic.gif" 
                    height="0" 
                    width="0"
                    alt="" 
                    className="rounded-3xl sepia-[.75] contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:lg:xl:2xl:w-80 md:lg:xl:2xl:h-44 w-56 h-36"
                  >
                  </Image>
               </Link>
                <div className="flex flex-col md:lg:xl:2xl:w-1/2 w-5/6 lg:xl:ml-9">
                  <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:lg:xl:2xl:pt-0 pt-3">Battuta.ai</h5>
                  <p className="text-mudbrick lg:xl:text-base text-xs font-medium pt-2 pb-3 leading-relaxed">Often times, itinerary planning can leave you lost in a myriad of options. Battuta is a website powered by OpenAI to provide you streamlined itineraries. Pick a starting city, list anywhere else you'll like to visit and Battuta will create a painless itinerary for your dream trip.</p>
                  <ProjectTechTray techStack={["Next.js", "TypeScript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/battuta.ai"} hostingLink={""}></ProjectTechTray>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={AmiriBoldSlanted.className}>
            <div className="grid grid-rows-1 justify-end h-full align-bottom">
                <h4 className="lg:xl:2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 mt-20 align-bottom select-none z-0">٣</  h4>
            </div>
          </div>
        </section>

        <div className="hidden md:block">
          <NextPageButton nextPageReference={'#travel'}></NextPageButton>      
        </div>

        <section id="travel" className="relative h-screen">
          <div className={AmiriBoldSlanted.className}>
            {/* <div className="grid grid-rows-1 justify-end h-full align-bottom">
              <h4 className="text-9xl text-dusty relative ml-auto bottom-0 mt-16 marker:mr-12 mt-auto align-bottom select-none z-0">٣</h4>
            </div> */}
          </div>
        </section>
        </main>
    </>
  )
}
