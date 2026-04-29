'use client';
import { twMerge } from 'tailwind-merge';

interface FooterProps {
  className?: string
}

const Footer = ({ className }: FooterProps) => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Behance', url: 'https://behance.net' }
  ]

  return (
    <footer
      className={twMerge(
        'w-full bg-background-primary mb-[92px]',
        className
      )}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[122px] justify-center items-center w-full">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
            {/* Direct Contact Section */}
            <div className="flex flex-col gap-[14px] justify-start items-start w-full lg:w-auto lg:flex-1">
              <div className="flex flex-col gap-[14px] justify-start items-start w-full">
                <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                  direct
                </span>
                <a
                  href="mailto:diptim.moharana@gmail.com"
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-5xl text-left text-text-primary hover:text-text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-accent font-['Cormorant_Garamond'] break-all"
                >
                  diptim.moharana@gmail.com
                </a>
              </div>
              <p className="text-sm font-normal leading-base tracking-[2px] text-left text-text-secondary font-['JetBrains_Mono']">
                Replies within 24 hours, usually faster.
              </p>
            </div>

            {/* Elsewhere & Located Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start gap-8 sm:gap-12 w-full lg:w-auto">
              {/* Elsewhere Links */}
              <div className="flex flex-col gap-[14px] justify-start items-start w-full sm:w-auto">
                <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                  elsewhere
                </span>
                <ul className="flex flex-col gap-[12px] justify-start items-start list-none">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-5xl text-left text-text-primary hover:text-text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-accent font-['Cormorant_Garamond']"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-[14px] justify-start items-start w-full sm:w-auto">
                <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                  located
                </span>
                <a
                  href="https://maps.google.com/?q=Bengaluru,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold leading-md text-left text-text-primary hover:text-text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-text-accent font-['JetBrains_Mono']"
                >
                  Bengaluru, India
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Credits Section */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full pt-6 sm:pt-8 md:pt-10 border-t border-[rgba(128,128,128,0.3)] gap-4 sm:gap-0">
            <div className="flex flex-row justify-start items-center w-auto">
              <span className="text-sm font-normal leading-base tracking-[2px] text-left text-text-secondary font-['JetBrains_Mono']">
                © 2026 Dipti Moharana
              </span>
            </div>
            <span className="text-sm font-normal leading-base tracking-[2px] text-left text-text-secondary font-['JetBrains_Mono']">
              Composed in equal parts curiosity and caffeine.
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer