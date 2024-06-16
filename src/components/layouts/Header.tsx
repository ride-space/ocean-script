import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import { Link as TransitionLink } from 'next-view-transitions'
import { FaSistrix, FaSquareXTwitter } from 'react-icons/fa6';

import { ThemeSwitcher } from '@/components/common';
import { x } from '@/const/urls';

export const Header = () => {
  return (
    <Navbar maxWidth="2xl" shouldHideOnScroll>
      <NavbarBrand>
        <TransitionLink href='/'>Ocean Script</TransitionLink>
      </NavbarBrand>
      <NavbarContent justify='end' className='gap-x-6'>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className=' '>
          <Link
            href={x}
            target='blank'
            rel='noopener noreferrer'
            className='inline-block'>
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
