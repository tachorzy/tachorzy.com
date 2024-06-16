import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'

const AboutMe = () => {
    return(
        <div className={JakartaMedium.className + " text-sandstone lg:text-xl md:text-lg text-xs font-medium pt-1.5 flex flex-col gap-y-4 lg:mt-2 mt-1.5 leading-loose md:w-3/5 w-4/5"}>
            <p>{"I'm a developer with a tireless passion for full-stack web development. With that passion, I continuously drive myself to learn, grow and create."}</p>
            <p>{"Over the years, I've built scalable applications, created responsive user interfaces, and enabled user-focused experiences. All of which you can find here on this portfolio."}</p>
            <p>The technologies that I use:</p>
        </div>
    );
}

export default AboutMe;