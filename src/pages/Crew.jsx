import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../../public/data/data.json';

export const Crew = () => {
    return (
        <div className='flex h-full flex-col bg-CrewBackgound bg-cover bg-no-repeat text-white items-center pb-8 pt-32 px-36 w-full min-h-screen'>
            <div className='w-full h-full px-12 py-8 relative'>
                <div className='flex gap-6 pt-8 items-center text-center text-[28px] w-full'>
                    <span className='font-BarlowCondensed opacity-25'>02</span>
                    <h1 className="font-BarlowCondensed uppercase">Meet your crew</h1>
                </div>

                <Outlet />
                <div className='w-full flex justify-star absolute'>
                <nav className="flex gap-8 mr-64 font-BarlowCondensed text-[16px] items-center h-10">
                        {data.crew.map(crewMember => (
                            <NavLink
                                key={crewMember.id}
                                to={crewMember.name.toLowerCase().replace(' ', '-')}
                                className={({ isActive }) =>
                                    `flex h-[15px] w-[15px] rounded-full bg-[#979797] ${isActive ? 'bg-white' : 'hover:bg-opacity-55'}`
                                }
                            >
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}
