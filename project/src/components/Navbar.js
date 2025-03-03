import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <button 
          className="lg:hidden bg-gray-800 p-2 rounded"
          onClick={() => {
            const navMenu = document.getElementById('navMenu');
            if (navMenu) {
              navMenu.classList.toggle('hidden');
            }
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
        <div id="navMenu" className="hidden w-full lg:flex lg:w-auto lg:items-center mt-4 lg:mt-0">
          <ul className="flex flex-col lg:flex-row lg:space-x-8">
            <li className="py-2 lg:py-0">
              <Link to="/about" className="hover:text-blue-300 transition duration-300">About</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/products" className="hover:text-blue-300 transition duration-300">Products</Link>
            </li>
            <li className="py-2 lg:py-0">
              <Link to="/contact" className="hover:text-blue-300 transition duration-300">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <svg className="h-10" viewBox="-12.185 94.07 801.671 208.391">
        <g id="svg2" style={{transformOrigin: '227.316px 231.757px'}} transform="matrix(3.602564, 0, 0, 3.784445, 162.385671, -34.805562)">
          <g transform="matrix(1, 0, 0, 1, -4.330015, 149.484425)">
            <rect x="208.749" y="67.621" width="130.794" height="30" rx="15" fill="#000080" style={{transformBox: 'fill-box', transformOrigin: '50% 50%'}}/>
            <rect x="123.166" y="67.621" width="114.637" height="30" rx="15" fill="#8B0000" style={{transformBox: 'fill-box', transformOrigin: '50% 50%'}}/>
            <text style={{fill: 'rgb(255, 255, 255)', fontFamily: '"Segoe UI Variable Display"', fontSize: '19.8px', fontWeight: 200, lineHeight: '27.4809px', whiteSpace: 'pre', transformBox: 'fill-box', transformOrigin: '50% 50%'}} x="134.887" y="88.969" transform="matrix(1, 0, 0, 1, -0.001426, -0.00404)">PRECISION</text>
            <text style={{fill: 'rgb(255, 255, 255)', fontFamily: '"Segoe UI Variable Display"', fontSize: '19.8px', fontWeight: 300, lineHeight: '28.3265px', whiteSpace: 'pre', transformBox: 'fill-box', transformOrigin: '50% 50%'}} x="239.826" y="88.969" transform="matrix(1, 0, 0, 1, -0.001466, -0.004094)">SCIENTIFIC</text>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Navbar;