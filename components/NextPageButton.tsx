import Image from 'next/image'
import Link from 'next/link'

interface buttonProps{
    nextPageReference: string;
    margin?: string;
}

const NextPageButton = (props: buttonProps) => {
    return(
        <div className={`${props.margin} hidden md:block relative bottom-0 opacity-0 hover:opacity-100 w-full h-2 animation-fade duration-700`}>
            <button className="flex flex-row items-center justify-center absolute bottom-0 inset-x-[42%] mb-12 p-2 bg-metal rounded-full w-[6%] border-2 border-opacity-75 border-[#1C2B2D] cursor-pointer select-none">
              <Link href={props.nextPageReference}>
                <Image src="/icons/chevron.svg" width={24} height={24} alt="chevron icon" className="cursor-pointer"/>
              </Link>
            </button>
        </div>
    );
}

export default NextPageButton;