import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    const menuItems =<>
        <li className='font-semibold hover:text-primary'><NavLink to='/talk'>TALK</NavLink></li>
        <li className='font-semibold hover:text-primary'><NavLink to='/more'>MORE</NavLink></li>
        <li className='font-semibold hover:text-primary'><NavLink to='/light'>LIGHT</NavLink></li>
    </>
    return (
        <div className="navbar sticky top-0 z-50 mx-auto px-14 shadow-sm bg-black text-white">
        <div className="navbar-start">
            <div className="dropdown">
                <label tabIndex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" storkewidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-black text-white">
                  {menuItems}
                </ul>
            </div>
            <a className="normal-case text-2xl hover:text-primary cursor-pointer font-semibold"><NavLink to='/'>KAASH</NavLink></a>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
               {menuItems}
            </ul>
        </div>
    </div>
    );
};

export default Navbar;