import SectionWrapper from '../components/section/SectionWrapper'
import React, { ReactElement } from 'react';
import LandingPageHeaders from '../components/landingPage/LandingPageHeaders'
import AboutMe from '../components/about/AboutMe'
import SocialsTray from '../components/about/SocialsTray'
import SkillsTray from '../components/about/SkillsTray'
import ProjectsTray from '../components/projects/ProjectsTray'
import CountryCardTray from 'components/travel/CountryCardTray'
import ContactSection from 'components/contact/ContactSection'

interface Section {
  margin?: string;
  sectionTitle?: string;
  sectionTitleMargin?: string;
  coreComponent: ReactElement;
  trayComponent?: ReactElement;
  pageNumber?: string;
  nextPageReference?: string;
  nextButtonMargins?: string;
}

const sections: Map<string, Section> = new Map([
    ["home", {coreComponent: <LandingPageHeaders/>, trayComponent: <SocialsTray/>, nextPageReference: "#about", nextButtonMargins: "mt-[19rem] lg:mt-[15rem] xl:mt-[21.5rem] 2xl:mt-[18.55%]"}],
    ["about", { sectionTitle: "About Me", coreComponent: <AboutMe/>, pageNumber: "١", nextPageReference: "#projects", nextButtonMargins: "mt-2.5 2xl:-mt-16 2xl:mb-36"}],
    ["projects", {sectionTitle: "Projects", sectionTitleMargin: "mb-7", coreComponent: <ProjectsTray/>, pageNumber: "٢", nextPageReference: "#travel", nextButtonMargins: "mt-2.5 lg:mt-72 lg:mb-16 2xl:mt-[36%]"}],
    ["travel", {margin: "mb-72 mt-[40rem]", sectionTitle: "Travel", sectionTitleMargin: "mb-7", coreComponent: <CountryCardTray/>, pageNumber: "٣", nextButtonMargins: "" ,nextPageReference: "#contact"}],
    ["contact", {margin: "mb-72 ", sectionTitle: "Get in touch!", sectionTitleMargin: "mb-7", coreComponent: <ContactSection/>, pageNumber: "٤"}
  ]
  ]);

export default function Home() {
  return (
    <> 
      <main className="bg-shark flex flex-col overflow-hidden gap-y-24 2xl:gap-y-24">
        {Array.from(sections.entries()).map(([sectionId, sectionDetails], index) => {
            return (
              <SectionWrapper key={index} id={sectionId} margin={sectionDetails.margin} sectionTitle={sectionDetails.sectionTitle} sectionTitleMargin={sectionDetails.sectionTitleMargin} coreComponent={sectionDetails.coreComponent} trayComponent={sectionDetails.trayComponent} pageNumber={sectionDetails.pageNumber} nextPageReference={sectionDetails.nextPageReference} nextButtonMargins={sectionDetails.nextButtonMargins}/>
            )
          })
        }
      </main>
    </>
  )
}
