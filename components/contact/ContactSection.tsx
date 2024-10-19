import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import SocialsTray from 'components/about/SocialsTray';
import ContactFormWrapper from './ContactFormWrapper';
import ContactMe from './ContactMe';

const ContactSection = () => {
    return(
        <div className="flex md:flex-row flex-col mb-4 mr-10 md:mr-0">
          <ContactMe/>
          <ContactFormWrapper/>
      </div>
    );
}

export default ContactSection;