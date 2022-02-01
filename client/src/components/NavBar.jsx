import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavBarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='flex w-full justify-between md:justify-center items-center p-4'>
      <div className='flex-initial md:flex-[0.5] justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer' />
      </div>
      <ul className='text-white hidden md:flex list-none flex-row justify-between flex-initial'>
        {['Market', 'Exchange', 'Tutorials', 'Wallets'].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
          Login
        </li>
      </ul>
      <div className='flex relative'>
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className='text-white md:hidden cursor-pointer'
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul className='flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in z-10 fixed top-0 -right-2 p-3 w-[70vw] h-scren shadow-2xl md:hidden list-none'>
            <li className='text-xl w-full my-2'>
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {['Market', 'Exchange', 'Tutorials', 'Wallets'].map(
              (item, index) => (
                <NavBarItem
                  key={item + index}
                  title={item}
                  classProps='my-2 text-lg'
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
