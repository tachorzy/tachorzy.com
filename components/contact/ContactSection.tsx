"use client";

import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import SocialsTray from 'components/about/SocialsTray';
import ContactForm from './ContactForm';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ContactSection = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  
    return(
        <div ref={ref} className="flex md:flex-row flex-col mb-4 mr-10 md:mr-0">
          <div className="flex flex-col md:gap-y-8 gap-y-5 md:w-[40%]">
            <h1 className={JakartaMedium.className + " text-sandstone md:text-3xl text-2xl"}>{"I'm"} <span className="">available</span> for new opportunities.</h1>
            <div className={JakartaRegular.className + " flex flex-col gap-y-2 text-sandstone md:text-2xl text-xl  md:w-[65%] mb-10 2xl:mb-32"}>
              <p>{"Got a question or want to get connected?"}</p>
              <p>{"By all means shoot me a message!"}</p>
              <div className="md:scale-[90%] self-start">
                <SocialsTray/>
              </div>
            </div>
          </div>
          <ContactForm isInView={isInView}/>
      </div>
    );
}

export default ContactSection;