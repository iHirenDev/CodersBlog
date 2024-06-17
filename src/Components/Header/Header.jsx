import React, {useState, useRef} from 'react'
import {Container, LogoutBtn, Logo, ThemeToggler} from '../index'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// imports for hamburger menu
import {Squash as Hamburger} from 'hamburger-react'
import {useClickAway} from 'react-use'
import {AnimatePresence, motion} from 'framer-motion'


function Header() {

  // hamburger implementation
  const [isNavOpen, setIsNavOpen] = useState(false)
  const ref = useRef(null)
  useClickAway(ref, () => setIsNavOpen(false))


  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  // Common syntax for navigation bar
  // Adding all the navigation links

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'SignUp',
      slug: '/signup',
      active: !authStatus
    },
  
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus
    },
  ]

  return (
    
    <header className='flex items-center sticky top-0 z-50 shadow py-3 bg-gradient-to-r from-blue-300 to-indigo-500'>
      <Container>
        <nav className='flex justify-between'>
         <div className='mr-4'>
            <Link to='/'>
              <Logo className='h-10 w-10 rounded-full'/>
            </Link>
          </div>
          <ul className='hidden lg:flex ml-auto'>
          {navItems.map((item) => 
          item.active ? (
            //Applying keys to repeating html element
            <li key={item.name}>
              <button className='inline-block py-2 px-6 duration-200 font-semibold text-white'
                      onClick={() => navigate(item.slug)}>{item.name}</button>
            </li>
          ) : null)}

          {/* Logout button when user logged in...
          If authStatus true then anything after && will work */}
          
          {authStatus && (
            <li>
              <LogoutBtn/>
            </li>
          )}
          </ul>
          
          {/* Hamburger */}

          <div ref={ref} className='lg:hidden'>
            <Hamburger toggled={isNavOpen} size={20} toggle={setIsNavOpen} color='white'/>
            <AnimatePresence>
            {isNavOpen && (
              <div 
              
                className='w-full fixed left-0 shadow-4xl mt-2 border border-b-slate-500'>
              <ul className='grid gap-2 bg-white'>
              {navItems.map((item) => 
              item.active ? (
                //Applying keys to repeating html element
                <li 
                  
                  key={item.name} className='border-b border-b-slate-200'>
                  <button className='w-full text-start inline-block py-2 px-6 duration-200 font-semibold '
                          onClick={() => {navigate(item.slug);
                                          setIsNavOpen((prev) => !prev)}}>
                            {item.name}</button>
                </li>
              ) : null)}
    
              {/* Logout button when user logged in...
              If authStatus true then anything after && will work */}
              
              {authStatus && (
                <li 
                  className='inline-block px-6 duration-200 font-semibold'>
                  <LogoutBtn/>
                </li>
              )}
              </ul>
              </div>
            )}
            </AnimatePresence>
          </div>
          
        </nav>
      </Container>
          <ThemeToggler/>
    </header>

  )
}

export default Header


