import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'} className='flex items-center gap-1'>
       <div className='relative w-6 h-6 flex items-center justify-center p-1 rounded-md bg-black  text-white'>
        {/* <Image src={'/Ammar-transparent.png'} alt='Logo' className='object-contain' fill/> */}
        <span className='text-xl font-semibold font-sans'>A</span>
    </div>
    <p className='font-sans font-semibold'>
    Developer
    </p>

    </Link>
 
  )
}

export default Logo