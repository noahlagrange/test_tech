import React from 'react';
import logo from '../sappy_logo.png';
import { Menu } from './Menu';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav className='navig'>
          <img src={logo} className='logo'/>
          <ul className='menu'>
            {Menu.map((item, index)=>{ return(
              <li key={index}>
                <a href={item.url} className={item.cName}>{item.title}</a>
              </li>
            )})}
          </ul>
        </nav>
    </div>
  );
};
  
export default Navbar;