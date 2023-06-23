import Image from 'next/image'

const Logo = () => {

    return(
        <div className="flex flex-col justify-end">
            <Image src="/T.png" width={100} height={100} className="absolute right-0 bottom-0 mr-12 mb-12 select-none z-0 hidden md:block" alt="larger ط"></Image>
            <Image src="/T.png" width={60} height={60} className="absolute right-0 bottom-0 mr-12 mb-12 select-none z-0 md:hidden block" alt="smaller ط"></Image>
        </div>
    );
}

export default Logo;