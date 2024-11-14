import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './navBar.css'
import { IconContext } from 'react-icons' 

function NavBar(){
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
        <IconContext.Provider value={{color: 'fff'}}>
            <div className="navbar">
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <h1>Olá, Kathon</h1>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return(
                            <Link to={item.path} className='a'>
                                <li key={index} className='item-cName'>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>    
        </>
    )
}

export default NavBar