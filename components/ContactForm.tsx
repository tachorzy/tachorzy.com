import React, { useState} from 'react'
import router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'


const ContactForm = () => {
    return( 
        <div className={ManropeMedium.className + " right-0 w-1/2 lg:xl:ml-24 bg-metal py-12 px-16 rounded-md mr-32 h-max"}>
            <form className="flex flex-col gap-y-1">
                {/* <h1 className={ManropeExtraBold.className + " text-dusty lg:xl:text-6xl text-3xl"}>Get in touch!</h1> */}
                {/* <input name="_input" type="hidden" className="hidden"></input> */}
                {/* <h1 className={ManropeExtraBold.className + " text-3xl text-sandstone"}>Contact form:</h1> */}
                <label className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">What's your name? </span>
                    <input type="text" name="name" placeholder="" className=" group bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-sandstone visited:autofill:text-sandstone focus-within:border-slate border-sandstone border-inherit w-full"></input>
                </label>
                <label className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">Your e-mail </span>
                    <input type="text" name="email" placeholder="" className=" group bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-sandstone visited:autofill:text-sandstone focus-within:border-slate border-sandstone border-inherit w-full"></input>
                </label>
                <label className="flex flex-col my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">Your message: </span>
                    <textarea name="message" placeholder="" className=" group bg-shark h-auto w-full focus-within:h-32 border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-sandstone focus-within:border-slate border-sandstone border-inherit"></textarea>
                </label>
            </form>
        </div>
    );
}

export default ContactForm;