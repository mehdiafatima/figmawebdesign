import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link'; // Link component ko import karen

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6 bg-[#d8b4fe] text-white">
      {/* Logo */}
      <h1 className="text-xl font-bold">SKIN BLISS.</h1>
      
     
     <nav className="flex space-x-8 text-lg">
        <Link href="/" target="_parent" rel="noopener noreferrer" className="hover:underline">Home</Link>
        <Link href="/about" target="_parent" rel="noopener noreferrer" className="hover:underline">About</Link>
        <Link href="/shop" target="_parent" rel="noopener noreferrer" className="hover:underline">Shop</Link>
        <Link href="/blog" target="_parent" rel="noopener noreferrer" className="hover:underline">Blog</Link>
      </nav> 
    
      
      {/* Cart Icon - Right Aligned */}
      <div>
        <button className="hover:text-gray-200">
          <FaShoppingCart size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;

