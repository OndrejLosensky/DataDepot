import React from 'react';
import Link from 'next/link';
import LogoDark from './layout/LogoDark';
import LogoLight from './layout/LogoLight';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 sticky top-0">
      <div className="navbar-start ml-4 ">
        <LogoLight/>
        <h2 className='text-2xl pt-2 text-gray-200'> DataDepot </h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <button> <Link className='btn btn-ghost mr-4' href="/auth/login">Login</Link> </button>
          <button> <Link className='btn btn-primary mr-4' href="/auth/register">Sign in</Link> </button>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
