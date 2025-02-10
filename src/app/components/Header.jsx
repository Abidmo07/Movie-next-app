import React from 'react';
import Link from 'next/link';
import SwitchMode from './SwitchMode';

export default function Header() {
  return (
    <header className="dark:bg-gray-900 bg-gray-100 px-10 py-4 flex items-center justify-between shadow-md transition-all">
      {/* Navigation Menu */}
      <nav className="flex items-center gap-6">
        <Link href="/">
          <h2 className="cursor-pointer text-lg font-semibold dark:text-white text-gray-900 transition-colors hover:text-orange-500">
            Home
          </h2>
        </Link>
        <Link href="/about">
          <h2 className="cursor-pointer text-lg font-semibold dark:text-white text-gray-900 transition-colors hover:text-orange-500">
            About
          </h2>
        </Link>
      </nav>

      {/* Logo & Dark Mode Toggle */}
      <div className="flex items-center gap-5">
        <SwitchMode />
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <span className="bg-orange-500 text-white rounded-md px-3 py-1 font-bold text-lg">
              IMDB
            </span>
            <p className="ml-2 dark:text-white text-gray-900 font-semibold text-lg">
              Clone
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
}
