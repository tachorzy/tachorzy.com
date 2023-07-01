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
        <div className={ManropeMedium.className + " absolute right-0 w-[40%] lg:xl:ml-24 bg-metal py-12 px-16 rounded-md mr-[17rem] h-full"}>
            <form className="flex flex-col gap-y-1">
                {Array.from(contactFields.entries()).map(([label, placeholderText]) => {
                    return (
                        <label className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                            <span className="text-dune text-xl">{label}</span>
                                {label == "Your message:" 
                                    ? <textarea name="message" placeholder="" className=" group bg-shark h-auto w-full focus-within:h-28 border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-sandstone focus-within:border-slate border-sandstone border-inherit"></textarea> 
                                    : <input type="text" name="name" placeholder="" className=" group bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-sandstone visited:autofill:text-sandstone focus-within:border-slate border-sandstone border-inherit w-full"></input>
                                }
                        </label>
                    )
                })}
            </form>
        </div>
    );
}

export default ContactForm;