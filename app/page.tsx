import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo'
import SectionTitle from '../components/SectionTitle'
import SocialsTray from '../components/SocialsTray'
import SkillsTray from '../components/SkillsTray'
import CountryCardTray from '../components/CountryCardTray'
import NextPageButton from '../components/NextPageButton'
import ProjectCard from '../components/ProjectCard'
import ContactForm from '../components/ContactForm'
import { PROJECTS } from '../lib/projects'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../lib/localNextFonts'

export default function Home() {
  return (
    <> 
      <main className={styles.main}>
        <section className = "relative">
          {/* HEADER SECTION */}
          <div className={ManropeExtraBold.className}>
            <h1 className=" text-dusty md:max-2xl:text-landingPageTitle text-5xl font-bold md:lg:xl:ml-24 ml-10 md:lg:xl:2xl:mt-28 mt-32">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:xl:text-2xl md:text-2xl text-landingPageBioMobile font-bold md:lg:xl:ml-24 ml-10 pt-2 lg:xl:mt-5 mt-4 leading-relaxed w-4/5 ">Hey, I'm Tariq, a senior Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>
            {/* SOCIALS TRAY */}
            <SocialsTray/>
          </div>

          <Logo/>

          <NextPageButton nextPageReference={'#about'} margin={"mt-[19rem] lg:mt-[21.5rem]"}/>
        </section>

        <section id="about" className="relative mt-24">
          {/* ABOUT ME */}
          <div className={ManropeMedium.className}>
            <SectionTitle title="About Me" className=""/>
            {/* refactor this to remove redundancies: */}
            <div className="text-sandstone lg:max-2xl:text-xl md:text-lg text-xs font-medium lg:xl:ml-24 ml-10 pt-1.5 flex flex-col gap-y-4 lg:max-xl:mt-2 mt-1.5 leading-loose md:max-2xl:w-3/5 w-4/5">
              <p>I'm a developer with a tireless passion for full-stack web development. With that passion, I continously drive myself to learn, grow and create.</p>
              <p>Over the years, I've built scalable applications, created responsive user interfaces, and enabled user-focused experiences. All of which you can find here on this portfolio.</p>
              <p>The technologies that I use:</p>
            </div>
            <SkillsTray/>
          </div>

          <div className={AmiriBoldSlanted.className}>
            <div className="grid grid-rows-1 justify-end h-full align-bottom">
              <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 lg:max-2xl:mr-12 mr-10 mt-5 align-bottom select-none z-0">١</h4>
            </div>
          </div>
          <NextPageButton nextPageReference={'#projects'} margin={"mt-[6rem]"}/>  
        </section>        
        

        <section id="projects" className="relative md:lg:xl:2xl:mb-0 mt-0.5 mb-72">
          <SectionTitle title="Projects" className="mb-7"/>

          <div className="flex flex-col gap-y-12 mt-2 md:max-2xl:ml-24 ml-10">
            <div className="flex flex-col md:max-2xl:flex-row gap-y-12 md:max-2xl:gap-x-12 flex-wrap"> 
              {Array.from(PROJECTS.entries()).map(([projectName, projectDetails]) => {
                return(
                  <ProjectCard name={projectName} description={projectDetails.description} imageUrl={projectDetails.imageUrl} techStack={projectDetails.techStack} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                )
              })}
            </div>

            {/* PAGE NUMBER */}
            <div className={AmiriBoldSlanted.className}>
              <div className="grid grid-rows-1 justify-end h-full align-bottom">
                  <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٢</h4>
              </div>
            </div>
          </div>
          <NextPageButton nextPageReference={'#contact'} margin={"mt-[5.4rem]"}/>
        </section>
        

        {/* <section id="travel" className="relative h-screen">
          <SectionTitle title="Travel" className="mb-7"/>
          <div className="lg:xl:ml-24 ml-10">
              <CountryCardTray/>
          </div>

          <div className={AmiriBoldSlanted.className}>
            <div className="grid grid-rows-1 justify-end h-full align-bottom">
                <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٣</h4>
            </div>
          </div>
        </section> */}
        <section id="contact" className="relative mb-72">
          <SectionTitle title="Get in touch!" className="mb-7"/>
          <div className={ManropeExtraBold.className + " flex flex-col gap-y-2 text-sandstone md:max-2xl:ml-24 ml-10 w-1/3 mb-10"}>
            {/* <h1 className="text-3xl">I'm <span className="">available</span> for freelance opportunities.</h1> */}
            {/* <h2 className="text-2xl text-dusty">Need help getting your project off the ground?</h2> */}
            {/* <h3 className="text-2xl text-dusty">Contact me at <div className=" bg-slate bg-opacity-70 h-2 hover:h-full duration-700 ">tachorzyad@gmail.com</div></h3> */}
          </div>
          <ContactForm/>
          <div className={AmiriBoldSlanted.className + " grid grid-rows-1 justify-end h-full align-bottom"}>
              <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٣</h4>
          </div>
        </section>
        </main>
    </>
  )
}
