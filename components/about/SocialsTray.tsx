"use client"

import SocialMediaButtonWrapper from './SocialMediaButtonWrapper'
// SocialMediaContext.ts
import { createContext } from 'react';

interface SocialMediaContextType {
  socialMedia: string;
  socialMediaLink: string;
}

export const SocialMediaContext = createContext<SocialMediaContextType>({} as SocialMediaContextType);

const SocialsTray = () => {
    
    const latestResume = "/resume/tachorzy_resume_sept_2024.pdf";

    const socialLinks = new Map<string, string>([
        ["GitHub", "https://github.com/tachorzy"],
        ["LinkedIn", "https://www.linkedin.com/in/tachorzy/"],
        ["Resume", latestResume],
    ]);

    return(
        <div className="lg:mt-5 md:mt-2.5 mt-4 flex flex-row gap-x-5 xl:gap-x-6">
            {Array.from(socialLinks.entries()).map(([socialMedia, socialMediaLink], key) => (    
                <SocialMediaContext.Provider value={{socialMedia, socialMediaLink}} key={key}>
                    <SocialMediaButtonWrapper/>
                </SocialMediaContext.Provider>
            ))}
        </div>
    )
}

export default SocialsTray;