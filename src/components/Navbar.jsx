import React, { useEffect, useState } from 'react'
import { links } from '../Data'
import { NavLink } from 'react-router'
import { RiCloseLine, RiMenuLine } from 'react-icons/ri'
import { RiMoonFill, RiSunFill } from 'react-icons/ri'
import './navbar.css'

//rafce
const Navbar = () => {
  const [dark, setDark] = useState(false)

  //Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'dark') setDark(true) 
  }, [])

  //Apply theme
  useEffect(() => {
    document.body.classList.toggle('dark-theme', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="nav">
      <div className={`${showMenu ? 'nav-menu show-menu': 'nav-menu'}`}>
        <ul className="nav-list grid">
          {links.map(({name, icon, path}, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink 
                  to={path} className={({ isActive }) => 
                  isActive ? 'nav-link active-nav' : 'nav-link'}
                  onClick={() => setShowMenu(!showMenu)}>
                    {icon}

                    <h3 className='nav-name'>{ name }</h3>
                  </NavLink>
              </li>
            )
          })}

          <li className="nav-item">
            <button className='nav-link theme-toggle-btn' onClick={() =>setDark(!dark)}>
              {dark ? <RiSunFill /> : <RiMoonFill />}
              <h3 className="nav-name">Theme</h3>
            </button>
          </li>
        </ul>

        <RiCloseLine className='nav-close' onClick={() => setShowMenu(!showMenu)}/>
      </div>

      <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
      </div>
    </nav>
  )
}

export default Navbar