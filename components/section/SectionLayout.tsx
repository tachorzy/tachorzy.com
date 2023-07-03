import Image from 'next/image'
import React, { ReactElement } from 'react'
import SectionTitle from '../../components/SectionTitle'
import Logo from '../../components/Logo'
import NextPageButton from '../../components/NextPageButton'
import { ManropeExtraBold, ManropeRegular, ManropeMedium, AmiriBoldSlanted } from '../../lib/localNextFonts'

interface sectionProps{
    id: string;
    margin?: string;
    sectionTitle?: string;
    sectionTitleMargin?: string;
    coreComponent: ReactElement;
    trayComponent?: ReactElement;
    pageNumber?: string; //refactor later with a map for all Arabic numbers
    nextPageReference?: string;
    nextButtonMargins?: string;
}

const SectionLayout = (props: sectionProps) => {

    return(
        <section id={props.id} className={` relative lg:xl:ml-24 ml-10 ${props.margin}`}>
            {props.sectionTitle != undefined && 
                <SectionTitle title={props.sectionTitle} sectionTitleMargin={props.sectionTitleMargin}/>
            }
            <>
                {props.coreComponent}
                {props.trayComponent}
            </>
            {props.pageNumber != null 
                ? <div className={AmiriBoldSlanted.className}>
                    <div className="grid grid-rows-1 justify-end h-full align-bottom">
                        <h4 className="lg:max-2xl:text-9xl text-8xl text-dusty relative ml-auto bottom-0 lg:max-2xl:mr-12 mr-10 mt-5 align-bottom select-none z-0">
                            {props.pageNumber}
                        </h4>
                    </div>
                </div>
                : <Logo/> 
            } 
            {props.nextPageReference != undefined &&
                <NextPageButton nextPageReference={props.nextPageReference} margin={props.nextButtonMargins}/>
            }
        </section>
    );
}

export default SectionLayout;