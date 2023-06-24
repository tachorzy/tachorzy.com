import { ManropeExtraBold } from '../lib/localNextFonts'

interface sectionTitleProperties {
    title: string
    className: string
}

const SectionTitle = (props: sectionTitleProperties) => {
    return(
        <div className={ManropeExtraBold.className}>
            <h3 className={`text-dusty lg:xl:text-6xl text-3xl font-extrabold lg:xl:ml-24 ml-10 pt-2 lg:xl:mt-32 mt-24 ${props.className}`}>{props.title}</h3>
        </div>
    );
}

export default SectionTitle;