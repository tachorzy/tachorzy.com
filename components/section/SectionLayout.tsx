import React, { ReactElement } from 'react'
import SectionTitle from './SectionTitle'
import Logo from '../../components/Logo'
import NextPageButton from '../../components/NextPageButton'
import { Rakkas } from '../../lib/localNextFonts'

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
        <section id={props.id} className={` relative lg:ml-24 ml-10 ${props.margin}`}>
            {props.sectionTitle != undefined && 
                <SectionTitle title={props.sectionTitle} sectionTitleMargin={props.sectionTitleMargin}/>
            }
            
            <>
                {props.coreComponent}
                {props.trayComponent}
            </>
            
            {props.pageNumber != undefined 
                ? <div className={Rakkas.className}>
                    <div className="absolute grid grid-rows-1 justify-end h-11/12 align-bottom right-0 bottom-0">
                        <h4 className="absolute lg:text-[8.5rem] text-8xl text-dusty relative lg:mr-12 mr-10 mt-5 lg:-mt-36 2xl:-mt-8 align-bottom select-none z-0">
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