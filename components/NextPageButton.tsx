import Image from 'next/image'
import Link from 'next/link'

interface buttonProps{
    nextPageReference: string;
    margin?: string;
}

const NextPageButton = (props: buttonProps) => {
    return(
      <div className={`${props.margin} lg:-ml-24 -ml-10`}>
        <div className={`absolute hidden md:block relative bottom-0 w-full h-1/6 opacity-0 hover:opacity-100 animation-fade duration-700 mix-blend-difference `}>
          <div className="absolute bottom-0 inset-x-[47%] mb-12">
            <button className="p-3 hover:bg-opacity-5 cursor-pointer select-none align-middle">
              <Link href={props.nextPageReference}>
                <Image src="/icons/chevron.svg" width={28} height={28} alt="chevron icon" className="cursor-pointer"/>
              </Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default NextPageButton;