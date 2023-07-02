import React, { useState} from 'react'
import router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'

const contactFields: Map<string, string> = new Map([
    ["What's your name?", ""],
    ["Your e-mail:", ""],
    ["Your message:", ""],
])


const ContactForm = () => {

    return( 
        <div className={ManropeMedium.className + " md:max-2xl:absolute right-0 md:max-2xl:w-[40%] lg:xl:ml-24 bg-metal md:max-2xl:py-12 md:max-2xl:px-16 py-10 px-8 rounded-md md:max-2xl:mr-[17rem] h-full"}>
            <form className="flex flex-col gap-y-1">
                {Array.from(contactFields.entries()).map(([label, placeholderText]) => {
                    return (
                        <label className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                            <span className="text-dune md:max-2xl:text-xl text-lg">{label}</span>
                                {label == "Your message:" 
                                    ? <textarea name="message" placeholder={placeholderText} className=" pl-1.5 py-0.5 group bg-shark h-auto duration-700 transition-[height] w-full focus-within:h-28 border-b-[3px] md:max-2xl:text-xl text-lg placeholder-mudbrick ring-0 outline-0 text-sandstone focus-within:border-slate border-sandstone border-inherit"></textarea> 
                                    : <input type="text" name="name" placeholder={placeholderText} className=" group pl-1 pt-0.5 bg-shark border-b-[3px] md:max-2xl:text-xl text-lg placeholder-mudbrick ring-0 outline-0 text-sandstone visited:autofill:text-sandstone focus-within:border-slate border-sandstone border-inherit w-full"></input>
                                }
                        </label>
                    )
                })}
                <button className=" rounded bg-sandstone hover:bg-dusty text-slate font-semibold py-2 md:max-2xl:w-1/4 w-1/3 mt-6">
                    {"Submit!"}
                </button>
            </form>
        </div>
    );
}

export default ContactForm;