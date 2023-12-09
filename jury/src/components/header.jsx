import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative bg-cover bg-center bg-no-repeat h-[593px] bg-header-img">
      <div className="container mx-auto flex justify-between items-center h-full relative">

        <div className="pr-12 py-[13px] left-[136px] top-[16px] absolute justify-start items-center inline-flex">
            <img src="/images/logo.png" alt="JuryDAO Logo" className="h-10 w-auto" />

            <div className="text-white text-2xl font-bold font-['Martel'] leading-loose pl-2 "> JuryDAO </div>
        </div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        
    
        {/* Navigation menu for larger screens */}
        <div className="pr-12 py-[13px] justify-items-end top-[30px] absolute right-[136px] inline-flex">
          <div className={`hidden lg:flex space-x-4 ml-auto  ${isMenuOpen ? 'flex-col' : 'flex'}`}>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Home</a>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">About</a>
            <a href="#" className="text-white text-sm font-semibold font-['Open Sans'] leading-normal tracking-tight">Contact</a>
            <div class="w-[83px] h-7  text-center text-sm font-semibold font-['Open Sans'] leading-normal pt-[3px] tracking-tight bg-[#D0A144] rounded-[37px]">Log in</div>
          </div>
        </div>
    
        {/* Navigation menu for smaller screens */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 right-0 left-0 bg-white p-4">
            <a href="#" className="block text-black">Home</a>
            <a href="#" className="block text-black">About</a>
            <a href="#" className="block text-black">Contact</a>
          </div>
        )}
        <div className='text-center pl-[200px]'>
          <div className="w-[1075px] h-[183px]  text-white text-[58px] font-black font-['Martel'] leading-[65px] tracking-tight">Empower Justice, One Block at a <br/>Time with LegalChain</div>
          <div className="w-[979px] h-[89px] pl-14 text-white text-xl font-medium font-['Montserrat'] leading-[30px] tracking-tight">Transforming Legal Technology with Blockchain Innovation.Empowers the seamless selection of the jurors for a legal case. Bringing the best of web2 and web3 world.</div>
          <div class="w-[155px] h-12 px-9 py-2.5 rounded-[37px] border border-white flex-col justify-start items-center gap-2.5 inline-flex">
            <div class="text-center text-white text-sm font-bold font-['Open Sans'] leading-7 tracking-tight">
                <Link to="/signup">Join Channel</Link>
            </div>
          </div>
        </div>
        
        
      </div>
    </header>
  );
};

export default Header;
