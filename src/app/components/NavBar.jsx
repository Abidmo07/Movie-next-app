"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function NavBar() {
    const searchParam=useSearchParams();
    const genre=searchParam.get('genre');
  return (
    <div className='dark:bg-gray-900 bg-gray-100 flex justify-center gap-10 py-4 shadow-md'>
      <Link href={"/?genre=fetchTrending"} className={`text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 cursor-pointer  ${genre==="fetchTrending"? 'underline underline-offset-8 decoration-4 decoration-orange-400 rounded-lg':''}`}>
        Trending
      </Link>
      <Link href={"/?genre=fetchTopRated"} className={`text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition duration-300 cursor-pointe ${genre==="fetchTopRated"? 'underline underline-offset-8 decoration-4 decoration-orange-400 rounded-lg':''}`}>
        Top Rated
      </Link>
    </div>
  );
}
