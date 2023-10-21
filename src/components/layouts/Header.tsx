'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { FaSistrix, FaSquareXTwitter } from 'react-icons/fa6';

import { ThemeSwitcher } from '@/components/common';

export const Header = () => {
  return (
    <Navbar shouldHideOnScroll className=''>
      <NavbarBrand>Ocean Script</NavbarBrand>
      <NavbarContent justify='end' className='gap-x-6' >
        <NavbarItem >
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className=' '>
          <Link href='#' className='inline-block'>
            <FaSquareXTwitter size={20} />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button className='inline-block'>
            <FaSistrix size={20} />
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
