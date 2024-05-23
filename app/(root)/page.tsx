import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const Header = () => {
  return (
    <header className='relative w-full h-screen px-5 py-7 bg-gradient-to-r from-[#FFF0E9] to-[#EAB196]'>

      {/* <div className=''>
      <Image
      src='/images/Img.png'
      alt='House'
      layout='fill'
      className='animate-slide'
      />
      </div> */}
      <Navbar className='mt-12'/>
      <div className='flex gap-4 bg-border bg-opacity-5 p-5 mt-10 w-[65%]'>
          <Image
          src='/images/home.svg'
          width={30}
          height={30}
          alt='home'
          />
        <h2 className='text-3xl text-border font-kufan'>
          Real Estate Agency
        </h2>
      </div>
    </header>
  );
}

export default Header;
