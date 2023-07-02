import Image from 'next/image'
import React, { FunctionComponent, ReactElement } from 'react'
import Logo from '../../components/Logo'
import NextPageButton from '../../components/NextPageButton'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../../lib/localNextFonts'

interface sectionProps{
    coreComponent: ReactElement;
    trayComponent: ReactElement | null;
    pageNumber: string | null; //refactor later with a map for all Arabic numbers
    nextPageReference: string;
    nextButtonMargins: string | null;
}

const SectionLayout = (props: sectionProps) => {

    return(
        <section className="relative lg:xl:ml-24 ml-10">
            <>
                {props.coreComponent}
                {props.trayComponent}
            </>
            {props.pageNumber == null 
                ? <Logo/> 
                : <div className={AmiriBoldSlanted.className}>
                    <div className="grid grid-rows-1 justify-end h-full align-bottom">
                        <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 lg:max-2xl:mr-12 mr-10 mt-5 align-bottom select-none z-0">
                            {props.pageNumber}
                        </h4>
                    </div>
                </div>
            }       
            <NextPageButton nextPageReference={props.nextPageReference} margin={props.nextButtonMargins}/>
        </section>
    );
}

export default SectionLayout;