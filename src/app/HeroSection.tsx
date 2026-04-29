'use client';
import Image from'next/image';

export default function HeroSection() {
  return (
    <section 
      id="home"
      className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[140px] justify-start items-start w-full"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        {/* Hero Text */}
        <div className="relative flex flex-col justify-end items-end w-full sm:w-[90%] md:w-[80%] lg:w-[72%]">
          <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[123px] xl:text-[180px] font-semibold leading-[72px] sm:leading-[96px] md:leading-[120px] lg:leading-[149px] xl:leading-[218px] text-left uppercase text-text-primary font-['Cormorant_Garamond']">
            Dipti
          </h1>
          <h1 className="text-[60px] sm:text-[80px] md:text-[100px] lg:text-[123px] xl:text-[180px] font-medium italic leading-[72px] sm:leading-[96px] md:leading-[120px] lg:leading-[149px] xl:leading-[218px] text-left text-text-primary font-['Cormorant_Garamond']">
            Moharana<span className="text-text-accent">.</span>
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end w-full gap-8 lg:gap-0 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-[52px]">
          {/* Location & Status */}
          <div className="flex flex-col justify-start items-center gap-2 w-full lg:w-auto">
            <div className="flex flex-row justify-start items-center gap-4 w-full">
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                Bengaluru
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                India
              </span>
            </div>
            
            <div className="flex flex-row justify-start items-center gap-2 w-full mt-[6px]">
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                Senior QA
              </span>
              <span className="text-sm font-normal leading-base text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                →
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                UI/UX
              </span>
            </div>
            
            <div className="flex flex-row justify-start items-center gap-2 w-full">
              <span className="text-lg sm:text-xl font-normal leading-xl text-left uppercase text-text-accent font-['JetBrains_Mono']">
                ·
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
                Open to work
              </span>
            </div>
          </div>

          {/* Philosophy Statement */}
          <p className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg font-normal leading-lg sm:leading-xl md:leading-4xl lg:leading-4xl text-left text-text-primary font-['JetBrains_Mono'] w-full lg:w-[40%] self-center mb-2">
            I design products at the intersection of{' '}
            <span className="text-text-accent">analytical rigour</span> and editorial craft — interfaces that earn attention and keep it.
          </p>

          {/* Selected Work Link */}
          <div className="flex flex-row gap-[6px] justify-center items-center w-auto border-b border-[rgba(128,128,128,0.3)] pb-2 mb-2">
            <span className="text-xs font-normal leading-xs tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
              Selected Work
            </span>
            <Image
              src="/images/img_icon_park_arrow_up.svg"
              alt="Arrow icon"
              width={14}
              height={14}
              className="w-[14px] h-[14px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}