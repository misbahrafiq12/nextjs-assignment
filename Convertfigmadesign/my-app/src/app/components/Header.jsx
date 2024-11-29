import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <nav className="w-full bg-gray-100">
      <div className="container mx-auto">
        <ul className="flex justify-end items-center space-x-4 p-4">
          <li>
            <Link href="/work" className="font-serif text-xl font-medium leading-6">
              Work
            </Link>
          </li>
          <li>
            <Link href="/blog" className="font-serif text-xl font-medium leading-6">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact" className="font-serif text-xl font-medium leading-6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
