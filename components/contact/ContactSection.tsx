import { ManropeMedium, ManropeExtraBold } from '../../lib/localNextFonts'
import SocialsTray from 'components/SocialsTray';
import ContactForm from './ContactForm';

const ContactSection = () => {
    return(
        <div className="flex md:flex-row flex-col mb-4 mr-10 md:mr-0">
          <div className="flex flex-col md:gap-y-8 gap-y-5 md:w-[40%]">
            <h1 className={ManropeMedium.className + " text-sandstone md:text-3xl text-2xl"}>I'm <span className="">available</span> for freelance opportunities.</h1>
            <div className={ManropeMedium.className + " flex flex-col gap-y-2 text-sandstone md:text-2xl text-xl  md:w-[65%] mb-10"}>
              <p>Got a question or want to get connected?</p>
              <p>By all means shoot me a message!</p>
              <div className="md:scale-[90%] self-start">
                <SocialsTray/>
              </div>
            </div>
          </div>
          <ContactForm/>
      </div>
    );
}

export default ContactSection;