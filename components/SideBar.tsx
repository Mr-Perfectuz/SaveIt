import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <Link href='/'>
        <div className='flex align-center gap-3  text-brand-100 '>
          <Image
            src='/assets/icons/logo_bg.svg'
            alt='logo'
            width={84}
            height={82}
            className='hidden h-auto lg:block brand-100'
          />
          <div className='h1 text-brand-100 font-bold mt-auto mb-auto'>
            SaveIt
          </div>
        </div>
      </Link>
    </aside>
  );
};

export default SideBar;
