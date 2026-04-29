'use client';
import Image from'next/image';

export default function StudioSection() {
  return (
    <section 
      id="studio"
      className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[144px] justify-start items-center w-full"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-[100px] sm:gap-[120px] md:gap-[160px] lg:gap-[208px] justify-center items-center w-full border-t border-b border-[rgba(128,128,128,0.3)] pt-[80px] sm:pt-[100px] md:pt-[120px] lg:pt-[140px] pb-[80px] sm:pb-[100px] md:pb-[120px] lg:pb-[140px]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-8 lg:gap-0">
            <div className="flex flex-row justify-start items-center w-auto">
              <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                Studio
              </span>
            </div>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-medium leading-3xl tracking-[2px] text-left text-text-primary font-['Cormorant_Garamond'] self-center w-full lg:w-[76%]">
              I spent four years <span className="text-text-accent">breaking</span> products as a Senior Quality Analyst — finding the seams, the silent failures, the moments users gave up. Now I design from the other side of that mirror: building the experiences I once filed bugs against.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-8 lg:gap-0">
            {/* Profile Image */}
            <div className="w-full lg:w-[50%]">
              <Image
                src="/images/img_frame_6.png"
                alt="Dipti Moharana profile"
                width={564}
                height={744}
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col gap-[36px] justify-center items-center w-full lg:w-[42%]">
              {/* Bio Text */}
              <div className="flex flex-col gap-[60px] justify-start items-center w-full border-b border-[rgba(128,128,128,0.3)] pb-8">
                <p className="text-md sm:text-lg font-normal leading-xl text-left text-text-secondary font-['JetBrains_Mono'] w-full">
                  I am Dipti — a UI/UX & product designer working end-to-end: research, IA, interaction, hi-fi UI, and the unglamorous bits in between. My QA past is my unfair advantage: I think in edge cases, empty states, and the second click.
                </p>

                <p className="text-md sm:text-lg font-normal leading-xl text-left text-text-secondary font-['JetBrains_Mono'] w-full mb-[34px]">
                  I care about typography, the weight of a divider, the timing of a transition. And I care, almost compulsively, about whether the thing actually works.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full">
                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-7xl tracking-wider text-left text-text-primary font-['Cormorant_Garamond']">
                    04+
                  </h3>
                  <p className="text-sm font-medium leading-base tracking-[1px] text-left text-text-secondary font-['JetBrains_Mono'] mt-2">
                    Years in QA
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-7xl tracking-wider text-left text-text-primary font-['Cormorant_Garamond']">
                    33%
                  </h3>
                  <p className="text-sm font-medium leading-base tracking-[1px] text-left text-text-secondary font-['JetBrains_Mono'] mt-2 mb-1">
                    Problems reduced
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-7xl tracking-wider text-left text-text-primary font-['Cormorant_Garamond']">
                    ∞
                  </h3>
                  <p className="text-sm font-medium leading-base tracking-[1px] text-left text-text-secondary font-['JetBrains_Mono'] mt-2">
                    Curiosity
                  </p>
                </div>

                <div className="flex flex-col justify-start items-start">
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-7xl tracking-wider text-left text-text-primary font-['Cormorant_Garamond']">
                    From QA
                  </h3>
                  <p className="text-sm font-medium leading-base tracking-[1px] text-left text-text-secondary font-['JetBrains_Mono'] mt-2 mb-[6px]">
                    → Product Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}