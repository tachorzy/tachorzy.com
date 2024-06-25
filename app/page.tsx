import React, { ReactElement } from 'react'
// import styles from '../styles/Home.module.css'
import LandingPageHeaders from '../components/landingPage/LandingPageHeaders'
import AboutMe from '../components/about/AboutMe'
import SectionLayout from '../components/section/SectionLayout'
import SocialsTray from '../components/about/SocialsTray'
import SkillsTray from '../components/about/SkillsTray'
import ProjectsTray from '../components/projects/ProjectsTray'
import ContactSection from 'components/contact/ContactSection'

export default function Home() {

  const sections: Map<string, { margin?: string, sectionTitle?: string, sectionTitleMargin?: string, coreComponent: ReactElement, trayComponent?: ReactElement,  pageNumber?: string, nextPageReference?: string, nextButtonMargins?: string }> = new Map([
    ["home", {coreComponent: <LandingPageHeaders/>, trayComponent: <SocialsTray/>, nextPageReference: "#about", nextButtonMargins: "mt-[19rem] lg:mt-[15rem] xl:mt-[21.5rem] 2xl:mt-[30rem]"}],
    ["about", { sectionTitle: "About Me", coreComponent: <AboutMe/>, trayComponent: <SkillsTray/>, pageNumber: "١", nextPageReference: "#projects", nextButtonMargins: "mt-2.5 2xl:mt-5"}],
    ["projects", {sectionTitle: "Projects", sectionTitleMargin: "mb-7", coreComponent: <ProjectsTray/>, pageNumber: "٢", nextPageReference: "#contact", nextButtonMargins: "mt-10 lg:mt-72 lg:mb-16 2xl:mt-7"}],
    ["contact", {margin: "mb-72", sectionTitle: "Get in touch!", sectionTitleMargin: "mb-7", coreComponent: <ContactSection/>, pageNumber: "٣"}
  ]
  ]);

  return (
    <> 
      <main className="bg-shark flex flex-col overflow-hidden">
        {Array.from(sections.entries()).map(([sectionId, sectionDetails], index) => {
            return (
              <SectionLayout key={index} id={sectionId} margin={sectionDetails.margin} sectionTitle={sectionDetails.sectionTitle} sectionTitleMargin={sectionDetails.sectionTitleMargin} coreComponent={sectionDetails.coreComponent} trayComponent={sectionDetails.trayComponent} pageNumber={sectionDetails.pageNumber} nextPageReference={sectionDetails.nextPageReference} nextButtonMargins={sectionDetails.nextButtonMargins}/>
            )
          })
        }
      </main>
    </>
  )
}
