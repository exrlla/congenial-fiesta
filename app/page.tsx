"use client"
import Image from 'next/image'
import GirlImage from '../public/girl_image.jpeg'
import FriendIcon from './components/FriendIcon'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col mx-20 ">
      <div className='flex flex-col items-center'>
      <Image alt="" src={GirlImage} className='rounded-full mt-40 w-60' priority/>
      </div>
      <h1 className='mt-4 text-4xl font-medium text-dark-purple'>congenial-fiesta</h1>
      <p>thanks for stopping by! im exploring nextjs by creating a site where my friends and I can write fizzy drink soda reviews. </p>
      <a className='mt-2 '><button className='bg-dark-purple text-white p-2 rounded-md'>who tf is ellie</button></a>
      <FriendIcon />
    </main>
  )
}
