import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import data from '../../public/data/data.json';

export const Technology = () => {
  return (
    <section className='flex flex-col bg-TechnologyBackgound bg-cover bg-no-repeat text-white items-center pb-8 pt-32 pl-36 w-full min-h-screen justify-center'>
      <div className='w-full py-8 pl-12'>
                <div className='flex gap-6 pt-8 items-center text-center text-[28px] w-full'>
                    <span className='font-BarlowCondensed opacity-25'>03</span>
          <h1 className="font-BarlowCondensed uppercase">Space Launch 101</h1>
        </div>
        <div className='w-full flex items-center justify-center py-6 pl-6'>
          <nav className="flex flex-col gap-10 font-Bellefair text-[32px] items-center">
            {data.technology.map(technology => (
              <NavLink
                key={technology.id}
                to={technology.name.toLowerCase().replace(' ', '-')}
                className={({ isActive }) =>
                  `flex justify-center h-[80px] w-[80px] rounded-full border-white border-[1px]  items-center ${isActive ? 'bg-white text-SpaceDark' : 'hover:text-opacity-55 hover:border-opacity-25'
                  }`
                }
              >
                {technology.id}
              </NavLink>
            ))}
          </nav>
        <Outlet />
        </div>
      </div>
    </section>
  );
};
