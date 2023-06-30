import React, { useState} from 'react'
import router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'


const ContactForm = () => {
    return( 
        <div className={ManropeMedium.className + " w-1/2 lg:xl:ml-24"}>
            <form className="flex flex-col gap-y-1">
                {/* <h1 className={ManropeExtraBold.className + " text-dusty lg:xl:text-6xl text-3xl"}>Get in touch!</h1> */}
                {/* <input name="_input" type="hidden" className="hidden"></input> */}
                <label className="flex flex-row my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">Hi, my name is </span>
                    <input type="text" name="name" placeholder="Your Name" className=" group ml-2 bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-dune focus-within:border-slate border-sandstone border-inherit w-min"></input>
                </label>
                <label className="flex flex-row my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">You reach me by e-mail at </span>
                    <input type="text" name="name" placeholder="Your e-mail" className=" group ml-2 bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-dune focus-within:border-slate border-sandstone border-inherit w-min"></input>
                </label>
                <label className="flex flex-row my-2 duration-500 focus-within:p-1 focus-within:pl-3 focus-within:border-l-4 border-sandstone border-inherit rounded">
                    <span className="text-dune text-xl">Your message: </span>
                    <input type="text" name="name" placeholder="" className=" group ml-2 bg-shark border-b-[3px] text-xl placeholder-mudbrick ring-0 outline-0 text-dune focus-within:border-slate border-sandstone border-inherit w-min"></input>
                </label>
            </form>
        </div>
    );
}

export default ContactForm;