import Image from "next/image"
import newStatic from '@/../public/content/content.png'
import clsx from 'clsx'

export type TestProps = {
  heading : string,
  default_text : string
  icon : string
}

export default  function NewTestComponent({heading , default_text , icon }: TestProps){
  return (
    <div className={clsx('flex flex-col items-center justify-center', 'bg-white p-12')}>
      <h1 className="text-3xl font-bold">{heading}</h1>
      <p className="text-xl">{default_text}</p>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8">
        <Image
        alt="icon"
        src={icon}
        height={400}
        width={400}
        objectFit="contain"
        className="mt-8"
      />
      <Image
        alt="icon"
        src={newStatic}
        height={400}
        width={400}
        objectFit="contain"
        className="mt-8"
      />
      </div>
    </div>
  )
}
