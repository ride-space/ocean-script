'use client';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { FaSistrix, FaSquareXTwitter } from 'react-icons/fa6';

export const Header = () => {
  return (
    <Navbar shouldHideOnScroll className=''>
      <NavbarBrand>Ocean Script</NavbarBrand>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex '>
          <Link href='#' className='flex items-center'>
            <FaSquareXTwitter />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <button>
            <FaSistrix />
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
