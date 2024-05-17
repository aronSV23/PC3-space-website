import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/assets/shared/logo.svg';


export const Header = () => {


    return (
        <header className='text-white flex items-center w-screen py-12 absolute'>
            <figure className='h-[48px] w-[90px] ml-14 flex items-center justify-center'>
                <img className='h-[48px] w-[48px]' src={logo} alt="logo" />
            </figure>
            <div className='w-[50%] relative'>
                <div className='absolute ml-8 w-[473px] h-px z-10 bg-white opacity-35'></div>
            </div>
            <nav className='flex bg-[#979797] bg-opacity-15 backdrop-blur-xl w-full h-[96px] items-center pl-[200px]'>
                <ul className='flex text-[16px] items-center h-full font-BarlowCondensed justify-between gap-14'>
                    <li className='h-full flex items-center'>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `flex gap-3 h-full items-center ${isActive ? 'border-b-[3px] border-white' : 'hover:border-b-[3px] hover:border-white hover:border-opacity-25'
                                }`
                            }
                        >
                            <span className='font-bold'>00</span>
                            <span className='font-normal'>HOME</span>
                        </NavLink>
                    </li>
                    <li className='h-full flex items-center'>
                        <NavLink
                            to="/destination"
                            className={({ isActive }) =>
                                `flex gap-3 h-full items-center ${isActive ? 'border-b-[3px] border-white' : 'hover:border-b-[3px] hover:border-white hover:border-opacity-25'
                                }`
                            }
                        >
                            <span className='font-bold'>01</span>
                            <span className='font-normal'>DESTINATION</span>
                        </NavLink>
                    </li>
                    <li className='h-full flex items-center'>
                        <NavLink
                            to="/crew"
                            className={({ isActive }) =>
                                `flex gap-3 h-full items-center ${isActive ? 'border-b-[3px] border-white' : 'hover:border-b-[3px] hover:border-white hover:border-opacity-25'
                                }`
                            }
                        >
                            <span className='font-bold'>02</span>
                            <span className='font-normal'>CREW</span>
                        </NavLink>
                    </li>
                    <li className='h-full flex items-center'>
                        <NavLink
                            to="/technology"
                            className={({ isActive }) =>
                                `flex gap-3 h-full items-center ${isActive ? 'border-b-[3px] border-white' : 'hover:border-b-[3px] hover:border-white hover:border-opacity-25'
                                }`
                            }
                        >
                            <span className='font-bold'>03</span>
                            <span className='font-normal'>TECHNOLOGY</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
