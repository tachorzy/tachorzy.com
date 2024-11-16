"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { JakartaRegular, JakartaMedium } from '../../lib/localNextFonts'
import ContactForm from './ContactForm'

export interface ContactInfo { 
    name: string, 
    email: string, 
    message: string 
}

export interface ContactFormProps {
    contactInfo : ContactInfo,
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const ContactFormWrapper = () => {
    const router = useRouter()

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    })
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const req = await fetch(`https://getform.io/f/${process.env.GETFORM_KEY}`, { method: 'POST', body: formData });
        if(req.status == 200)
            router.push("/success")
        setContactInfo({ name: "", email: "", message: "" })
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setContactInfo((prevContactInfo) => ({
          ...prevContactInfo,
          [name]: value,
        }));
    };

    return( 
        <div className={JakartaRegular.className + " scale-[80%] md:scale-100 md:absolute right-0 md:w-[40%] -ml-[12%] md:ml-24 bg-metal md:py-12 md:px-16 py-10 px-8 rounded-md md:mr-[17rem] h-full"}>
            <ContactForm contactInfo={contactInfo} handleSubmit={handleSubmit} handleChange={handleChange}/>
        </div>
    );
}

export default ContactFormWrapper;