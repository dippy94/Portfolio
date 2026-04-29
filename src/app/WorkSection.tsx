'use client';
import Image from'next/image';

interface ProjectCardProps {
  number: string
  category: string
  subcategory?: string
  skills: string
  title: string
  subtitle: string
  imageSrc: string
  imagePosition?: 'left' | 'right'
}

const ProjectCard = ({
  number,
  category,
  subcategory,
  skills,
  title,
  subtitle,
  imageSrc,
  imagePosition = 'right'
}: ProjectCardProps) => {
  const isLeft = imagePosition === 'left'

  return (
    <div className={`flex flex-col ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-between items-center w-full gap-6 lg:gap-0`}>
      {/* Project Info */}
      <div className={`flex flex-col gap-1 justify-start items-start ${isLeft ? 'lg:items-center' : 'lg:items-start'} self-end w-full lg:w-[18%] order-2 ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
        <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
          {number}
        </span>
        
        <div className="flex flex-row justify-start items-center gap-3 w-full">
          <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
            {category}
          </span>
          {subcategory && (
            <>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                ·
              </span>
              <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                {subcategory}
              </span>
            </>
          )}
        </div>
        
        <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
          {skills}
        </span>
      </div>

      {/* Project Image */}
      <div className={`flex flex-col justify-end items-start w-full lg:w-[76%] rounded-xl overflow-hidden shadow-[0px_8px_28px_rgba(255,255,255,0.1)] order-1 ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
        <div 
          className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[548px] rounded-xl overflow-hidden"
          style={{
            backgroundImage: `url(${imageSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-9 lg:p-9">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-6xl text-left text-text-primary font-['Cormorant_Garamond']">
              {title}
            </h3>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium italic leading-6xl text-left font-['Cormorant_Garamond'] mt-1">
              <span className="text-text-primary">{subtitle}</span>
              <span className="text-text-accent">.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const projects = [
    {
      number: '01 / 04',
      category: 'youtube',
      subcategory: 'ux redesign',
      skills: 'Research, ia, interaction',
      title: 'From Saved',
      subtitle: 'to Done',
      imageSrc: '/images/img_.png',
      imagePosition: 'right' as const
    },
    {
      number: '02 / 04',
      category: 'Mobile App',
      subcategory: '',
      skills: 'Product Design, Flows',
      title: 'Recipe',
      subtitle: 'Buzz',
      imageSrc: '/images/img__0x0.png',
      imagePosition: 'left' as const
    },
    {
      number: '03 / 04',
      category: 'LinkedIn',
      subcategory: 'Profile Redesign',
      skills: 'IA, Visual Design',
      title: 'From Scroll',
      subtitle: 'to Scan',
      imageSrc: '/images/img__1.png',
      imagePosition: 'right' as const
    },
    {
      number: '04 / 04',
      category: 'Smartwatch',
      subcategory: 'Messaging UX',
      skills: 'Interaction, Micro-UX',
      title: 'Glance, Speak,',
      subtitle: 'Send',
      imageSrc: '/images/img__2.png',
      imagePosition: 'left' as const
    }
  ]

  return (
    <section 
      id="work"
      className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[140px] justify-center items-center w-full"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[140px] justify-start items-start w-full border-t border-[rgba(128,128,128,0.3)] pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[116px] pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pb-[116px]">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center w-full gap-8 lg:gap-0">
            <div className="flex flex-col gap-[6px] justify-start items-start self-end w-full lg:w-[40%]">
              <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                selected work
              </span>
              
              <div className="flex flex-row justify-start items-center gap-2 w-full">
                <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
                  2025
                </span>
                <span className="text-sm font-normal leading-base text-left uppercase text-text-primary font-['JetBrains_Mono']">
                  →
                </span>
                <span className="text-sm font-normal leading-base tracking-[1px] text-left uppercase text-text-primary font-['JetBrains_Mono']">
                  2026
                </span>
              </div>
            </div>

            <div className="flex flex-row justify-end items-center w-full lg:w-[60%]">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-xl font-semibold leading-2xl tracking-wide text-left uppercase text-text-primary font-['Cormorant_Garamond']">
                Four pieces. Patient.
              </h2>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="flex flex-col gap-12 sm:gap-16 md:gap-20 lg:gap-24 w-full">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}