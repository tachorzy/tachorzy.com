"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ManropeMedium } from '../../lib/localNextFonts'

const ContactForm = () => {
    const router = useRouter()

    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        message: ""
    })

    const contactFields: Map<string, { inputName: string, inputHook: string }> = new Map([
        ["What's your name?", { inputName: "name", inputHook: contactInfo.name }],
        ["What's your email?", { inputName: "email", inputHook: contactInfo.email }],
        ["Let's hear your message!", { inputName: "message", inputHook: contactInfo.message }],
    ])
    
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault(); //prevent page refresh
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
        <div className={ManropeMedium.className + " md:absolute right-0 md:w-[40%] lg:ml-24 bg-metal md:py-12 md:px-16 py-10 px-8 rounded-md md:mr-[17rem] h-full"}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-1">
                {Array.from(contactFields.entries()).map(([labelText, inputDetails], key) => {
                    return (
                        <label key={key} className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                            <span className="text-dune md:text-xl text-lg pb-1.5">{labelText}</span>
                                {labelText == "Your message:" 
                                    ? <textarea name="message" value={contactInfo.message} onChange={handleChange} className=" pl-1.5 py-0.5 group bg-shark h-auto duration-700 transition-[height] w-full focus-within:h-28 border-b-[3px] md:text-xl text-lg placeholder-mudbrick ring-0 outline-0 text-sandstone focus-within:border-slate border-sandstone border-inherit"/> 
                                    : <input type="text" name={inputDetails.inputName} value={inputDetails.inputHook} onChange={handleChange} className=" group pl-1 pt-0.5 bg-shark border-b-[3px] md:text-xl text-lg placeholder-mudbrick ring-0 outline-0 text-sandstone visited:autofill:text-sandstone focus-within:border-slate border-sandstone border-inherit w-full"/>
                                }
                        </label>
                    )
                })}
                <button type="submit" className=" rounded bg-sandstone hover:bg-dusty text-slate font-semibold py-2 md:w-1/4 w-1/3 mt-6">
                    {"Submit!"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;