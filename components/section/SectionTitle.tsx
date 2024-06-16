import { JakartaBold } from '../lib/localNextFonts'

interface sectionTitleProperties {
    title: string
    sectionTitleMargin?: string
}

const SectionTitle = (props: sectionTitleProperties) => {
    return(
        <div className={JakartaBold.className}>
            <h3 className={`text-dusty lg:text-5xl text-3xl font-extrabold pt-2 lg:mt-32 mt-24 ${props.sectionTitleMargin}`}>{props.title}</h3>
        </div>
    );
}

export default SectionTitle;