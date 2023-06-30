import React, { useState} from 'react'
import router from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { ManropeExtraBold, ManropeMedium, ManropeRegular } from '../lib/localNextFonts'


const ContactForm = () => {
    return( 
        <div className={ManropeMedium.className + " w-[36rem] lg:xl:ml-24"}>
            <form className="">
                {/* <h1 className={ManropeExtraBold.className + " text-dusty lg:xl:text-6xl text-3xl"}>Get in touch!</h1> */}
                <input name="_input" type="hidden" className="hidden"></input>
                <label className="flex flex-row p-2 pl-3">
                    <span className="text-dune text-lg">Hi, my name is </span>
                    <input type="text" name="name" placeholder="Your Name" className=" ml-2 bg-shark border-b-[3px] text-lg placeholder-mudbrick text-dune border-dune border-inherit w-fill"></input>
                </label>
            </form>
        </div>
    );
}

export default ContactForm;