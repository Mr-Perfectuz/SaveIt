import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SideBar = () => {
  return (
    <aside className='sidebar'>
      <Link href='/'>
        <Image
          src='/assets/icons/logo.jpg'
          alt='logo'
          width={160}
          height={50}
        />
      </Link>
    </aside>
  );
};

export default SideBar;
