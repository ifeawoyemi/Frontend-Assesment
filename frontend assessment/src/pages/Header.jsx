import React from 'react'
import NavListItem from '../components/NavListItem';
import Search from '../components/Search';
import navListData from '../data/navListData';
import './header.css'

function Header() {
  return (
    <header>
        <a href="/" className='logo'>
            cinema
        </a>
        <ul className='nav'>
            {
               navListData.map(nav => (
                <NavListItem key={nav._id} nav={nav}/>
               )) 
            }
        </ul>

        <Search/>
    </header>
  )
} 

export default Header