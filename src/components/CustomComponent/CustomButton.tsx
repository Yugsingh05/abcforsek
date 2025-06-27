import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

type Props = {
  buttonText: string
  buttonLink: string
  backgroundColor?: string
  className?: string
  buttonTextColor?: string
}

const CustomButton = ({ buttonText, buttonLink, backgroundColor, className , buttonTextColor}: Props) => {

  console.log(buttonTextColor, 'buttonTextColor');
  return (
    <Button
      asChild
      style={{ backgroundColor: backgroundColor || '#4658C2', fontWeight: 500 }}
      className={` mt-12  text-white text-md hover:bg-opacity-95 font-medium py-2.5 h-auto  px-6 rounded-full transition ${className} ${buttonTextColor ? `text-[${buttonTextColor}]` : 'text-white'}`}
    >
      <Link href={buttonLink}>{buttonText}</Link>
    </Button>
  )
}

export default CustomButton
