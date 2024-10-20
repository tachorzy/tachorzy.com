import Image from 'next/image'

const Logo = () => {

    return(
        <div className="flex flex-col justify-end">
            <Image src="/ط.svg" width={60} height={60} className="absolute right-0 bottom-0 mr-[3.75rem] mb-12 select-none z-0 lg:hidden block " alt="smaller ط"></Image>
            <Image src="/ط.svg" width={100} height={100} className="absolute right-0 bottom-0 mr-[3.75rem] select-none z-0 hidden lg:block mb-12 " alt="larger ط"></Image>
        </div>
    );
}

export default Logo;