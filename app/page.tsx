"use client"
import Image from 'next/image'
import GirlImage from '../public/girl_image.jpeg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-20 ">
      <div className='flex flex-col items-center'>
      <Image alt="" src={GirlImage} className='rounded-full mt-10 w-60'/>
      </div>
      <h1 className='mt-4 text-2xl'>congenial-fiesta</h1>
      <p>thanks for stopping by! im exploring nextjs, and writing reviews of all the fizzy drinks I have every tried. </p>
      <a className='mt-2'><button className='bg-violet-400 p-2 rounded-md'>who tf is ellie</button></a>
    </main>
  )
}
