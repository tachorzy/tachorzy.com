import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import LandingPageHeaders from '../components/landingPage/LandingPageHeaders'
import AboutMe from '../components/about/AboutMe'
import SectionLayout from '../components/section/SectionLayout'
import SectionTitle from '../components/SectionTitle'
import SocialsTray from '../components/SocialsTray'
import SkillsTray from '../components/SkillsTray'
import ProjectsTray from '../components/projects/ProjectsTray'
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

        <SectionLayout id="home" coreComponent={<LandingPageHeaders/>} trayComponent={<SocialsTray/>} nextPageReference={"#about"} nextButtonMargins='mt-[19rem] lg:mt-[21.5rem]'/>
        <SectionLayout id="about" sectionTitle={"About Me"} coreComponent={<AboutMe/>} trayComponent={<SkillsTray/>} pageNumber={"١"} nextPageReference={"#projects"} nextButtonMargins='mt-[6rem]'/>
        {/* <SectionLayout id="projects" sectionTitle={"Projects"} coreComponent={<ProjectsTray/>} pageNumber={"٢"} nextPageReference={"#contact"} nextButtonMargins='mt-[5.4rem]'/> */}
        <section id="projects" className="relative md:lg:xl:2xl:mb-0 mt-0.5 mb-72 md:max-2xl:ml-24 ml-10">
          <SectionTitle title="Projects" sectionTitleMargin="mb-7"/>

          <div className="flex flex-col gap-y-12 mt-2">
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
        <section id="contact" className="relative mb-72 md:max-2xl:ml-24 ml-10">
          <SectionTitle title="Get in touch!" sectionTitleMargin="mb-7"/>

          <div className="flex md:max-2xl:flex-row flex-col mb-4 mr-10 md:max-2xl:mr-0">
            <div className="flex flex-col md:max-2xl:gap-y-8 gap-y-5 md:max-2xl:w-[40%]">
              <h1 className={ManropeMedium.className + " text-sandstone md:max-2xl:text-3xl text-2xl"}>I'm <span className="">available</span> for freelance opportunities.</h1>
              <div className={ManropeMedium.className + " flex flex-col gap-y-2 text-sandstone md:max-2xl:text-2xl text-xl  md:max-2xl:w-[65%] mb-10"}>
                <p>Got a question or want to get connected?</p>
                <p>By all means shoot me a message!</p>
                <div className="md:max-2xl:scale-[90%] self-start">
                  <SocialsTray/>
                </div>
              </div>
            </div>
            <ContactForm/>
          </div>
          <div className={AmiriBoldSlanted.className + " grid grid-rows-1 justify-end h-full align-bottom"}>
              <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٣</h4>
          </div>
        </section>
        </main>
    </>
  )
}
