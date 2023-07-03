import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import styles from '../styles/Home.module.css'
import LandingPageHeaders from '../components/landingPage/LandingPageHeaders'
import AboutMe from '../components/about/AboutMe'
import SectionLayout from '../components/section/SectionLayout'
import SectionTitle from '../components/SectionTitle'
import SocialsTray from '../components/SocialsTray'
import SkillsTray from '../components/about/SkillsTray'
import ProjectsTray from '../components/projects/ProjectsTray'
import CountryCardTray from '../components/travel/CountryCardTray'
import NextPageButton from '../components/NextPageButton'
import ProjectCard from '../components/projects/ProjectCard'
import ContactForm from '../components/contact/ContactForm'
import ContactSection from 'components/contact/ContactSection'
import { PROJECTS } from '../lib/projects'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../lib/localNextFonts'

export default function Home() {

  const sections: Map<string, { id: string, margin?: string, sectionTitle?: string, sectionTitleMargin?: string, coreComponent: ReactElement, trayComponent?: ReactElement,  pageNumber?: string, nextPageReference?: string, nextButtonMargins?: string }> = new Map([
    ["home", {id: "home", coreComponent: <LandingPageHeaders/>, trayComponent: <SocialsTray/>, nextPageReference: "#about", nextButtonMargins: "mt-[19rem] lg:mt-[21.5rem]"}],
    ["about", {id: "about", sectionTitle: "About Me", coreComponent: <AboutMe/>, trayComponent: <SkillsTray/>, pageNumber: "١", nextPageReference: "#projects", nextButtonMargins: "mt-[5rem]"}],
    ["projects", {id: "projects", sectionTitle: "Projects", sectionTitleMargin: "mb-7", coreComponent: <ProjectsTray/>, pageNumber: "٢", nextPageReference: "#contact", nextButtonMargins: "mt-[5.4rem]"}],
    ["contact", {id: "contact", margin: "mb-72", sectionTitle: "Get in touch!", sectionTitleMargin: "mb-7", coreComponent: <ContactSection/>, pageNumber: "٣"}
  ]
  ]);

  return (
    <> 
      <main className={styles.main}>
        {Array.from(sections.entries()).map(([sectionId, sectionDetails]) => {
            return (
              <SectionLayout id={sectionDetails.id} margin={sectionDetails.margin} sectionTitle={sectionDetails.sectionTitle} sectionTitleMargin={sectionDetails.sectionTitleMargin} coreComponent={sectionDetails.coreComponent} trayComponent={sectionDetails.trayComponent} pageNumber={sectionDetails.pageNumber} nextPageReference={sectionDetails.nextPageReference} nextButtonMargins={sectionDetails.nextButtonMargins}/>
            )
          })
        }
      </main>
    </>
  )
}
