import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../../public/data/data.json';

export const Destination = () => {
    return (
        <section className='flex flex-col bg-DestinationBackgound bg-cover bg-no-repeat text-white items-center pb-8 pt-32 px-36 w-full min-h-screen justify-center'>
            <div className='w-full py-8 px-12'>
                <div className='flex gap-6 pt-8 items-center text-center text-[28px] w-full'>
                    <span className='font-BarlowCondensed opacity-25'>01</span>
                    <h1 className="font-BarlowCondensed uppercase">Pick Your Destination</h1>
                </div>
                <div className='w-full flex justify-end p-6'>
                    <nav className="flex gap-8 mr-64 font-BarlowCondensed text-[16px] items-center h-10">
                        {data.destinations.map(destination => (
                            <NavLink
                                key={destination.id}
                                to={destination.name.toLowerCase()}
                                className={({ isActive }) =>
                                    `flex h-full items-center ${isActive ? 'border-b-[2px] border-white text-white' : 'text-SoftViolet hover:border-b-[2px] hover:border-white hover:border-opacity-25'
                                    }`
                                }                            >
                                {destination.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
                <Outlet />
            </div>
        </section>
    )
}
