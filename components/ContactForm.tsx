import React, { useState} from 'react'
import router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'


const ContactForm = () => {
    return( 
        <div className={ManropeMedium.className + " w-1/3 lg:xl:ml-24"}>
            <form className="">
                {/* <h1 className={ManropeExtraBold.className + " text-dusty lg:xl:text-6xl text-3xl"}>Get in touch!</h1> */}
                <input name="_input" type="hidden" className="hidden"></input>
                <label className="flex flex-row my-2 p-1 pl-3 focus-within:border-l-4 border-dune border-inherit rounded">
                    <span className="text-dune text-xl">Hi, my name is </span>
                    <input type="text" name="name" placeholder="Your Name" className=" group ml-2 bg-shark border-b-[3px] text-xl placeholder-mudbrick text-dune border-dune border-inherit w-min"></input>
                </label>
            </form>
        </div>
    );
}

export default ContactForm;