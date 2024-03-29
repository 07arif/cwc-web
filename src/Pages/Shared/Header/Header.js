import './Header.css';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../../assets/main.png';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className='bg-gradient-to-r from-blue-500 to-red-500'>
      <div className='px-8 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-9'>
        <div className='relative flex items-center justify-between'>
          <NavLink
            to='/'
            aria-label='CarryWithCare'
            title='CarryWithCare'
            className='inline-flex items-center'
          >
            <img className='w-12' src={logo} alt="CWC-LOGO"></img>
            <span className='main-name ml-1 lg:ml-2 font-logo  lg:text-xl tracking-wide text-gray-200'>
              Carry with Care 2.0
            </span>
          </NavLink>
          <ul className=' items-center hidden space-x-8 lg:flex'>
            <li>
              <NavLink
                to='/home'
                aria-label='Home'
                title='Home'
                className={({ isActive }) => isActive ? 'font-medium tracking-wide text-yellow-200 border-2 rounded p-2 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/service'
                aria-label='Service'
                title='Service'
                className={({ isActive }) => isActive ? ' border-2 rounded p-2 font-medium tracking-wide text-yellow-200 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                aria-label='About us'
                title='About us'
                className={({ isActive }) => isActive ? ' border-2 rounded p-2 font-medium tracking-wide text-yellow-200 transition-colors duration-200 hover:text-deep-purple-accent-400' : 'font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400'}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-gray-100 border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    <div>
                      <a
                        href='/'
                        aria-label='CarryWithCare'
                        title='CarryWithCare'
                        className='inline-flex items-center'
                      >
                        <img className='w-12' src={logo} alt="CWC-LOGO"></img>
                        <span className='ml-2 font-logo text-xl font-bold tracking-wide text-gray-800 uppercase'>
                          C W C
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      <li>
                        <a
                          href='/'
                          aria-label='Home'
                          title='Home'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href='/service'
                          aria-label='Service'
                          title='Service'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          Service
                        </a>
                      </li>
                      {/* <li>
                        <a
                          href='/about'
                          aria-label='About Us'
                          title='About Us'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                        >
                          About Us
                        </a>
                      </li> */}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header