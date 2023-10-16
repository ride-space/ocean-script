'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <button
        className='inline-block'
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
        aria-label='ダークモードとライトモードの切り替え'>
        {theme === 'dark' ? (
          <BsSunFill size={20} />
        ) : (
          <BsFillMoonFill size={20} />
        )}
      </button>
    </div>
  );
};
