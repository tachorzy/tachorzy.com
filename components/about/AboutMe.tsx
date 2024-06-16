import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'

const AboutMe = () => {
    return(
        <div className={JakartaRegular.className + " text-sandstone lg:text-lg md:text-base text-xs font-medium pt-6 flex flex-col gap-y-4 lg:mt-2 mt-1.5 leading-loose md:w-3/5 w-4/5"}>
            <p>{"I'm an intrepid developer with a tireless passion for software development. With that passion, I continuously drive myself to learn, grow, and create."}</p>
            <p>{"Over the years, I've built scalable applications, instructed hundreds of students in algorithm design and analysis, led the agile development of production-ready software, and enabled convenient user-focused experiences."}</p>
            <p>The technologies that I use:</p>
        </div>
    );
}

export default AboutMe;