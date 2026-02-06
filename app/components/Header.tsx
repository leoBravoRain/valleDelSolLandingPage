'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavigationItem } from './types';

interface HeaderProps {
  logoUrl?: string;
  logoAlt?: string;
  navigationItems: NavigationItem[];
  reservasButtonId?: string;
}

export default function Header({
  logoUrl = 'https://i0.wp.com/valledelsolquillon.cl/wp-content/uploads/2024/08/Blanco-e1723074296739.png',
  logoAlt = 'Valle del Sol Logo',
  navigationItems,
  reservasButtonId = 'btn-widgte1',
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={logoUrl}
                alt={logoAlt}
                width={130}
                height={107}
                className="h-auto w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 font-medium transition-colors"
                >
                  {item.label}
                </Link>
                {item.children && item.children.length > 0 && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Reservas Button */}
          <div className="hidden md:flex flex-shrink-0">
            <button
              id={reservasButtonId}
              className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
            >
              Reservas
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item, index) => (
                <div key={index}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-gray-900 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && item.children.length > 0 && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="block text-sm text-gray-600 hover:text-gray-900 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                id={reservasButtonId}
                className="w-full px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors font-medium mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Reservas
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
