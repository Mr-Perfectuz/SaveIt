'use client';
import { avatarPlaceholderUrl, navItems } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SideBar = () => {
  const pathName = usePathname();
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
          <div className='hidden lg:block h1 text-brand-100 font-bold mt-auto mb-auto'>
            SaveIt
          </div>
        </div>
        <Image
          src='/assets/icons/logo-brand.svg'
          alt='logo'
          width={52}
          height={52}
          className='lg:hidden'
        />
      </Link>
      <nav className='sidebar-nav'>
        <ul className='flex flex-col flex-1 gap-6'>
          {navItems.map(({ name, icon, url }) => (
            <Link key={name} href={url} className='lg:w-full'>
              <li
                className={cn(
                  'sidebar-nav-item',
                  pathName === url && 'shad-active'
                )}
              >
                <Image
                  src={icon}
                  alt={name}
                  width={24}
                  height={24}
                  className={cn(
                    'nav-icon',
                    pathName === url && 'nav-icon-active'
                  )}
                />
                <p className='hidden lg:block'>{name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <Image
        src='/assets/images/files-2.png'
        alt='logo'
        width={506}
        height={418}
        className='w-full'
      />
      <div className='sidebar-user-info'>
        <Image src={avatarPlaceholderUrl} alt='Avatar' width={44} height={44} />
      </div>
    </aside>
  );
};

export default SideBar;
