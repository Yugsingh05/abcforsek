import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props ={
    buttonText: string,
    buttonLink: string,
    backgroundColor?: string
    className?: string
}

const CustomButton = ({buttonText,buttonLink , backgroundColor , className}:Props) => {
  return (
     <Button
            asChild
            style={{ backgroundColor: backgroundColor||'#4658C2',fontWeight:500 }}
            className={`inline-block mt-12  text-white text-md hover:bg-opacity-95 font-medium py-2.5 h-auto font-serif px-6 rounded-full transition ${className} `}
          >
            <Link href={buttonLink}>{buttonText}</Link>
          </Button>
  )
}

export default CustomButton