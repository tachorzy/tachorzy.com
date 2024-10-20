import Image from 'next/image'
import Link from 'next/link'

interface buttonProps{
    nextPageReference: string;
    margin?: string;
}

const NextPageButton = (props: buttonProps) => {
    return(
        <div className={`${props.margin} hidden md:block relative bottom-0 w-full h-1/6 animation-fade duration-700`}>
            <button className="absolute bottom-0 inset-x-[47%] mb-12 p-3 bg-metal rounded-full w-16 items-center flex flex-row cursor-pointer select-none">
              <Link href={props.nextPageReference}>
                <Image src="/icons/chevron.svg" width={28} height={28} alt="chevron icon" className="cursor-pointer"/>
              </Link>
            </button>
        </div>
    );
}

export default NextPageButton;