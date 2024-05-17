import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section className='flex justify-between bg-HomeBackgound p-36 bg-cover bg-no-repeat text-white items-center w-full min-h-screen'>
        <article className='w-450 pt-36'>
            <h3 className='text-[28px] font-BarlowCondensed text-SoftViolet'>SO, YOU WANT TO TRAVEL TO</h3>
            <h2 className='text-[150px] font-Bellefair font-normal'>SPACE</h2>
            <p className='w-[450px] text-SoftViolet text-[18px] font-normal'>
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </p>
        </article>
        <aside className='pt-32 pl-8'>
            <div 
            className='text-center w-[347px] h-[347px]  transition-all rounded-full cursor-pointer ease-in-out delay-150 bg-transparent flex items-center justify-center hover:bg-opacity-20 hover:bg-white'>
                <Link to='/destination' className='text-center font-Bellefair flex justify-center items-center text-[32px] w-[247px] h-[247px] text-SpaceDark bg-white cursor-pointer rounded-full '>
                EXPLORE
                </Link>
            </div>
        </aside>
    </section>
  )
}
