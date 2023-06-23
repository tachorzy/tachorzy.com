import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Logo from '../components/Logo'
import SectionTitle from '../components/SectionTitle'
import SocialsTray from '../components/SocialsTray'
import SkillsTray from '../components/SkillsTray'
import HamburgerMenu from '../components/HamburgerMenu'
import NextPageButton from '../components/NextPageButton'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../lib/projects'
import { skills } from '../lib/skills'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../lib/localNextFonts'

export default function Home() {
  return (
    <> 
      <main className={styles.main}>
        <section className = "relative h-screen">
          {/* HEADER SECTION */}
          <div className={ManropeExtraBold.className}>
            <h1 className=" text-dusty md:max-2xl:text-landingPageTitle text-5xl font-bold md:lg:xl:ml-24 ml-10 md:lg:xl:2xl:mt-28 mt-32">Tariq<br/>Achor Zyad</h1>
            <h2 className="text-sandstone lg:xl:text-2xl md:text-2xl text-landingPageBioMobile font-bold md:lg:xl:ml-24 ml-10 pt-2 lg:xl:mt-5 mt-4 leading-relaxed w-4/5 ">Hey, I'm Tariq, a senior Computer Science student at the University of Houston, <div className="text-dusty">Exploring the vast world of tech.</div></h2>
            {/* SOCIALS TRAY */}
            <SocialsTray/>
          </div>

          <Logo/>

          <div className="mt-[19rem] lg:mt-[21.5rem] hidden md:max-2xl:block">
            <NextPageButton nextPageReference={'#about'}/>
          </div>
        </section>

        <section id="about" className="relative h-screen mt-24">
          {/* ABOUT ME */}
          <div className={ManropeMedium.className}>
            <SectionTitle title="About Me" className=""/>
            {/* refactor this to remove redundancies: */}
            <div className="text-sandstone lg:max-2xl:text-xl md:text-lg text-xs font-medium lg:xl:ml-24 ml-10 pt-1.5 flex flex-col gap-y-4 lg:max-xl:mt-2 mt-1.5 leading-loose md:max-2xl:w-3/5 w-4/5">
              <p>I'm a developer with a tireless passion for full-stack web development. With that passion, I continously drive myself to learn, grow and create.</p>
              <p>Over the years, I've built scalable applications, created responsive user interfaces, and enabled user-focused experiences. All of which you can find here on this portfolio.</p>
              <p>The technologies that I use:</p>
            </div>
            <div className="pt-3 lg:xl:ml-24 ml-10 mb-[7.5rem]">
              <SkillsTray/>
            </div>
          </div>

          <div className={AmiriBoldSlanted.className}>
            <div className="grid grid-rows-1 justify-end h-full align-bottom">
              <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 lg:max-2xl:mr-12 mr-10 mt-5 align-bottom select-none z-0">١</h4>
            </div>
          </div>
        </section>        
        
        <div className="hidden md:max-2xl:block">
          <NextPageButton nextPageReference={'#projects'}/>
        </div>
  
        <section id="projects" className="relative h-screen md:lg:xl:2xl:mb-0 mt-0.5 mb-80">
          {/* <span className={ManropeExtraBold.className}>
            <h3 className="text-dusty lg:xl:text-6xl text-2xl font-extrabold lg:xl:ml-24 ml-10 lg:xl:mt-32 mt-4 pt-20 mb-7"  id="projects">Projects</h3>
          </span> */}
          <div  className="">
            <SectionTitle title="Projects" className="mb-7"/>
          </div>
          {/* <div>
            {Array.from(projects.entries()).map(([projectName, projectDetails]) => {
                return(
                  <div className="lg:xl:ml-24 ml-12">
                    <ProjectCard name={projectName} imageUrl={projectDetails.imageUrl} hostLink={projectDetails.hostLink} gitHubLink={projectDetails.gitHubLink}></ProjectCard>
                  </div>
              )
              })}
          </div> */}
          
          <div className="flex flex-col gap-y-10 mt-2 md:max-2xl:ml-24 ml-10">
            <div className="flex flex-col md:max-2xl:flex-row gap-y-12 md:max-2xl:gap-x-12 flex-wrap"> 
              <ProjectCard name="Gibraltr" description="Visa Search Engine" imageUrl='/aesthetic_station.gif' hostLink='https://www.gibraltr.com/' gitHubLink='https://github.com/tachorzy/Gibraltr/tree/main/app'></ProjectCard>
              <ProjectCard name="Battuta.ai" description="AI Itinerary Generator" imageUrl='/aesthetic_travel.gif' hostLink='https://www.gibraltr.com/' gitHubLink='https://github.com/tachorzy/Gibraltr/tree/main/app'></ProjectCard>
              {/* <ProjectCard name="test" description="" imageUrl='/passport_akira.gif' hostLink='https://www.gibraltr.com/' gitHubLink='https://github.com/tachorzy/Gibraltr/tree/main/app'></ProjectCard> */}
              {/* <ProjectCard name="test" imageUrl='dasd' ></ProjectCard> */}
            </div>



            {/* <div className="lg:xl:ml-24 ml-10 flex md:max-2xl:flex-row flex-col">
              <Link href="https://www.gibraltr.com/" target="_blank">
                <Image 
                  src="/passport_akira.gif" 
                  height="0" 
                  width="0" 
                  alt="" 
                  className="rounded-3xl sepia-75 contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:max-2xl:w-80 md:max-2xl:h-44 w-56 h-36"
                >
                </Image>
              </Link>

              <div className="flex flex-col md:max-2xl:w-1/2 w-5/6 md:max-2xl:ml-10">
                <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:max-2xl:pt-0 pt-3">Gibraltr</h5>
                  <p className="text-mudbrick lg:xl:text-base text-xs  font-medium pt-2 pb-3 leading-relaxed">With ever changing travel restrictions worldwide, it's always best to know before you go. And that's why Gibraltr provides a robust search engine for travelers to find visa requirements. Available for 197+ countries! With over 30,000 possible results!</p>
                  <ProjectTechTray techStack={["Next.js", "Javascript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/Gibraltr"} hostingLink={"https://www.gibraltr.com/"}/>
                </div>
              </div>
            </div> */}

            {/* <div className="lg:xl:ml-24 ml-10 flex md:max-2xl:flex-row flex-col">
              
              <Link href="https://github.com/tachorzy/COSC4353-Project-Group39" target="_blank">
                <Image 
                  src="/art-artist.gif" 
                  width="0"
                  height="0"
                  alt=""
                  className="rounded-3xl sepia-75 contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:max-2xl:w-80 md:max-2xl:h-44 w-56 h-36"
                ></Image>
              </Link>

              <div className="flex flex-col md:max-2xl:w-1/2 w-5/6 md:max-2xl:ml-10">
                <div className={ManropeMedium.className}>
                  <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:max-2xl:pt-0 pt-3">This Portfolio</h5>
                  <p className="text-mudbrick lg:xl:text-base text-xs  font-medium pt-2 pb-3 leading-relaxed">I've designed this page as a space to present my professional work in one accessible place. And in this one place, my passions for web-development and design meet. Here you'll find my projects, blogs, and where to best reach me.</p>
                  <ProjectTechTray techStack={["Next.js", "Javascript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/tachorzy.com"} hostingLink={"https://tachorzy.com/"}/>
                </div>
              </div>
            </div> */}

            {/* <div className="md:max-2xl:ml-24 ml-10 flex md:max-2xl:flex-row flex-col">
                <Link href="https://github.com/tachorzy/battuta.ai" target="_blank">
                  <Image 
                    src="/plane-aesthetic.gif" 
                    height="0" 
                    width="0"
                    alt="" 
                    className="rounded-3xl sepia-[.75] contrast-125 hover:sepia-0 hover:contrast-100 duration-1000 bg-blend-luminosity md:max-2xl:w-80 md:max-2xl:h-44 w-56 h-36"
                  >
                  </Image>
               </Link>
              <div className="flex flex-col md:max-2xl:w-1/2 w-5/6 md:max-2xl:ml-10">
                <div className={ManropeMedium.className}>
                <h5 className="text-mudbrick lg:xl:text-4xl text-2xl font-extrabold md:max-2xl:pt-0 pt-3">Battuta.ai</h5>
                <p className="text-mudbrick lg:xl:text-base text-xs font-medium pt-2 pb-3 leading-relaxed">Often times, itinerary planning can leave you lost in a myriad of options. Battuta is a website powered by OpenAI to provide you streamlined itineraries. Pick a starting city, list anywhere else you'll like to visit and Battuta will create you a painless itinerary.</p>
                <ProjectTechTray techStack={["Next.js", "TypeScript", "TailwindCSS"]} gitHubLink={"https://github.com/tachorzy/battuta.ai"} hostingLink={""}/>
                </div>
              </div>
            </div> */}
            {/* PAGE NUMBER */}
            <div className={AmiriBoldSlanted.className}>
              <div className="grid grid-rows-1 justify-end h-full align-bottom">
                  <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 mr-12 align-bottom select-none z-0">٢</h4>
              </div>
            </div>
          </div>
        </section>
      
        <section id="travel" className="relative h-screen">

        </section>
        </main>
    </>
  )
}
