'use client';
import Image from'next/image';

export default function ConnectSection() {
  return (
    <section 
      id="connect"
      className="flex flex-col gap-[38px] justify-start items-center w-full"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-[42px] justify-start items-center w-full pt-[50px] pb-[50px]">
          {/* Label */}
          <div className="flex flex-row justify-center items-center w-full mt-[90px]">
            <div className="flex flex-row justify-start items-center w-full">
              <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                connect
              </span>
            </div>
          </div>

          {/* Hero Text */}
          <div className="flex flex-row justify-center items-center w-full">
            <div className="flex flex-col justify-start items-center w-full">
              <div className="flex flex-row justify-start items-center w-full">
                <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] font-semibold leading-[58px] sm:leading-[77px] md:leading-[96px] lg:leading-[115px] xl:leading-[156px] tracking-widest text-left uppercase text-text-primary font-['Cormorant_Garamond']">
                  Let&apos;s
                </h2>
              </div>

              <div className="flex flex-col sm:flex-row justify-center items-center w-full gap-4 sm:gap-0 -mt-8 sm:-mt-12 md:-mt-14 lg:-mt-16">
                <h2 className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px] font-semibold italic leading-[58px] sm:leading-[77px] md:leading-[96px] lg:leading-[115px] xl:leading-[156px] tracking-widest text-left lowercase text-text-primary font-['Cormorant_Garamond']">
                  Make it
                </h2>

                {/* Contact Info Box */}
                <div className="flex flex-col justify-start items-center w-full sm:w-[280px] md:w-[320px] lg:w-[20%] border-t border-b border-[rgba(128,128,128,0.3)] py-[60px]">
                  <div className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[148px] justify-start items-end w-full">
                    <div className="flex flex-col gap-3 justify-start items-start w-full">
                      <div className="flex flex-row justify-start items-center w-full">
                        <span className="text-sm font-normal leading-sm tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                          Direct
                        </span>
                      </div>
                      <a 
                        href="mailto:diptim.moharana@gmail.com"
                        className="text-xl sm:text-2xl md:text-2xl font-normal leading-4xl tracking-wide text-left text-text-primary hover:text-text-accent transition-colors duration-200 font-['JetBrains_Mono'] break-all"
                      >
                        diptim.moharana@gmail.com
                      </a>
                    </div>

                    <div className="mr-[266px] mb-8">
                      <Image
                        src="/images/img_vector.svg"
                        alt="Arrow decoration"
                        width={122}
                        height={90}
                        className="w-[61px] sm:w-[81px] md:w-[101px] lg:w-[122px] h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="relative w-full h-[534px] border-t border-b border-[rgba(128,128,128,0.3)]" />
        </div>
      </div>
    </section>
  )
}