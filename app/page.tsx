import SectionWrapper from '../components/section/SectionWrapper'
import { sections } from '../models/sections'

export default function Home() {

  return (
    <> 
      <main className="bg-shark flex flex-col overflow-hidden 2xl:gap-y-24">
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
