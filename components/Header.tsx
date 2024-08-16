'use client';

import * as React from 'react';

import {
  Heart,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  ShoppingCartIcon,
  SunIcon,
  User2Icon,
  X,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Montserrat } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './ui/button';

const monserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function Header() {
  const { setTheme, theme } = useTheme();

  const handleThemeChange = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const links = [
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Shop',
      href: '/shop',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ];

  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-background drop-shadow-md md:sticky md:top-0 md:shadow-none z-20">
      {/* DESKTOP */}
      <div className="hidden lg:block animate-in fade-in zoom-in bg-background p-4">
        <div className="flex justify-between mx-[41px] items-center">
          <Link
            href="/"
            className={`flex gap-2 items-center mr-12 ${monserrat.className}`}
          >
            <img
              src="/images/favicon.png"
              alt="shop logo"
              className="h-16 w-16"
            />
            <span className="text-3xl font-bold hidden sm:block">
              J-Shopify
            </span>
          </Link>

          <div className="flex gap-[20px] xl:gap-[50px] text-[16px] items-center select-none">
            {links.map(({ href, title }) => (
              <Link
                key={href}
                href={href}
                className={`hover:text-custom-primary flex items-center gap-2  font-[500] text-gray`}
              >
                {title}
              </Link>
            ))}
          </div>

          <div className="ms-auto flex gap-4 justify-between items-center">
            <User2Icon
              className="hover:text-custom-primary cursor-pointer"
              size={26}
              onClick={() => console.log('clicked!')}
            />
            <SearchIcon
              className="hover:text-custom-primary cursor-pointer"
              size={26}
              onClick={() => console.log('clicked!')}
            />
            <Heart
              className="hover:text-custom-primary cursor-pointer"
              size={26}
              onClick={() => console.log('clicked!')}
            />
            <ShoppingCartIcon
              className="hover:text-custom-primary cursor-pointer"
              size={26}
              onClick={() => console.log('clicked!')}
            />
            <Button variant="ghost" onClick={handleThemeChange}>
              {theme === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white  dark:bg-background py-4 animate-in fade-in zoom-in  ${
          menu ? ' bg-[#fff3e3] py-2' : 'bg-background'
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
            <Link href="/" className="flex gap-2 items-center">
              <img
                src="/images/favicon.png"
                alt="shop logo"
                className="h-14 w-14"
              />
              <span className="text-2xl font-bold hidden sm:block">
                J-Shopify
              </span>
            </Link>
          </div>
          <div className="flex items-center gap-[8px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            ) : (
              <MenuIcon
                className="cursor-pointer animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
            <div className="ms-auto">
              <Button variant="ghost" onClick={handleThemeChange}>
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </div>
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map(({ href, title }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hover:text-custom-primary flex items-center gap-2  font-[500] text-gray`}
                >
                  {title}
                </Link>
              ))}
              <User2Icon
                className="hover:text-custom-primary cursor-pointer"
                size={26}
                onClick={() => console.log('clicked!')}
              />
              <SearchIcon
                className="hover:text-custom-primary cursor-pointer"
                size={26}
                onClick={() => console.log('clicked!')}
              />
              <Heart
                className="hover:text-custom-primary cursor-pointer"
                size={26}
                onClick={() => console.log('clicked!')}
              />
              <ShoppingCartIcon
                className="hover:text-custom-primary cursor-pointer"
                size={26}
                onClick={() => console.log('clicked!')}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
