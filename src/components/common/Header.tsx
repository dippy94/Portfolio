'use client';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'Work', href: '#work' },
    { label: 'Studio', href: '#studio' },
    { label: 'Connect', href: '#connect' }
  ]

  return (
    <header
      className={twMerge(
        'w-full bg-background-primary',
        className
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-row justify-between items-center py-4 sm:py-5 md:py-[22px]">
          {/* Logo Section */}
          <div className="flex flex-col justify-start items-start w-auto">
            {/* Brand Name */}
            <div className="flex flex-row gap-[8px] justify-start items-center w-auto">
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
                Dipti
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
                Moharana
              </span>
            </div>

            {/* Tagline */}
            <div className="flex flex-row gap-[10px] justify-start items-center w-auto mt-1">
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                Product
              </span>
              <span className="text-sm font-normal leading-base text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                ·
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                UX
              </span>
              <span className="text-sm font-normal leading-base text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                ·
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                UI
              </span>
            </div>
          </div>

          {/* Hamburger Menu Icon (Mobile only) */}
          <button
            className="block lg:hidden p-2 focus:outline-none focus:ring-2 focus:ring-text-secondary"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6 text-text-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex flex-row gap-[36px] justify-center items-center"
            role="navigation"
            aria-label="Main navigation"
          >
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-secondary font-['JetBrains_Mono']"
                role="menuitem"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`${
            menuOpen ? 'block' : 'hidden'
          } lg:hidden pb-4 border-t border-border-primary mt-2`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 mt-4">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary hover:text-text-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-secondary font-['JetBrains_Mono']"
                role="menuitem"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header