import React from 'react'
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
    const [visible, setVisible] = useState(false);
    
    return (
        <div className='flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8 font-medium bg-white'>
            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} className="w-32 sm:w-36" alt="Logo"/>        
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-8 text-sm text-gray-700 font-medium">
                <NavLink 
                    to='/' 
                    className={({isActive}) => 
                        `flex flex-col items-center gap-1 hover:text-red-500 transition-colors ${
                            isActive ? 'text-red-500' : ''
                        }`
                    }
                >
                    <p>Home</p>
                    <hr className="w-2/4 border-none h-[2px] bg-red-500 hidden"/>
                </NavLink>
                <NavLink 
                    to='/restaurants' 
                    className={({isActive}) => 
                        `flex flex-col items-center gap-1 hover:text-red-500 transition-colors ${
                            isActive ? 'text-red-500' : ''
                        }`
                    }
                >
                    <p>Restaurants</p>
                    <hr className="w-2/4 border-none h-[2px] bg-red-500 hidden"/>
                </NavLink>
                <NavLink 
                    to='/about' 
                    className={({isActive}) => 
                        `flex flex-col items-center gap-1 hover:text-red-500 transition-colors ${
                            isActive ? 'text-red-500' : ''
                        }`
                    }
                >
                    <p>About</p>
                    <hr className="w-2/4 border-none h-[2px] bg-red-500 hidden"/>
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({isActive}) => 
                        `flex flex-col items-center gap-1 hover:text-red-500 transition-colors ${
                            isActive ? 'text-red-500' : ''
                        }`
                    }
                >
                    <p>Contact</p>
                    <hr className="w-2/4 border-none h-[2px] bg-red-500 hidden"/>
                </NavLink>
            </ul>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                {/* Search Icon */}
                <div className="hidden sm:block cursor-pointer hover:text-red-500 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>

                {/* Cart Icon */}
                <div className="relative cursor-pointer hover:text-red-500 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6-5V4a2 2 0 00-2-2H9a2 2 0 00-2 2v4" />
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        0
                    </span>
                </div>

                {/* Order Now Button - Hidden on mobile */}
                <button className="hidden lg:block bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Order Now
                </button>

                {/* Mobile Menu Toggle */}
                <div 
                    className="md:hidden cursor-pointer"
                    onClick={() => setVisible(true)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white shadow-lg transition-all duration-300 ${
                    visible ? "w-80 sm:w-96" : "w-0"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
                        <div
                            onClick={() => setVisible(false)}
                            className="cursor-pointer p-2 hover:bg-gray-100 rounded-full"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>

                    {/* Sidebar Navigation */}
                    <div className="flex flex-col py-4">
                        <NavLink
                            onClick={() => setVisible(false)}
                            className={({isActive}) => 
                                `py-4 px-6 hover:bg-gray-50 transition-colors ${
                                    isActive ? 'text-red-500 bg-red-50' : 'text-gray-700'
                                }`
                            }
                            to="/"
                        >
                            HOME
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className={({isActive}) => 
                                `py-4 px-6 hover:bg-gray-50 transition-colors ${
                                    isActive ? 'text-red-500 bg-red-50' : 'text-gray-700'
                                }`
                            }
                            to="/restaurants"
                        >
                            RESTAURANTS
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className={({isActive}) => 
                                `py-4 px-6 hover:bg-gray-50 transition-colors ${
                                    isActive ? 'text-red-500 bg-red-50' : 'text-gray-700'
                                }`
                            }
                            to="/about"
                        >
                            ABOUT
                        </NavLink>
                        <NavLink
                            onClick={() => setVisible(false)}
                            className={({isActive}) => 
                                `py-4 px-6 hover:bg-gray-50 transition-colors ${
                                    isActive ? 'text-red-500 bg-red-50' : 'text-gray-700'
                                }`
                            }
                            to="/contact"
                        >
                            CONTACT
                        </NavLink>
                    </div>

                    {/* Sidebar Footer */}
                    <div className="mt-auto p-6">
                        <button 
                            onClick={() => setVisible(false)}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-medium transition-colors"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {visible && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setVisible(false)}
                />
            )}
        </div>
    )
}

export default NavBar