'use client';
interface MethodStepProps {
  number: string
  label: string
  title: string
  description: string
}

const MethodStep = ({ number, label, title, description }: MethodStepProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-3 md:gap-[14px] justify-start items-center w-full border-[rgba(128,128,128,0.3)] p-6 sm:p-7 md:p-8">
      <div className="flex flex-row justify-between items-center w-full sm:w-[90%]">
        <span className="text-3xl sm:text-4xl font-medium italic leading-5xl text-left uppercase text-text-accent font-['Cormorant_Garamond']">
          {number}
        </span>
        <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
          {label}
        </span>
      </div>

      <div className="flex flex-row justify-start items-center w-auto">
        <h3 className="text-3xl sm:text-4xl font-semibold leading-5xl text-left text-text-primary font-['Cormorant_Garamond']">
          {title}
        </h3>
      </div>

      <div className="flex flex-row justify-center items-center w-full sm:w-[90%] mb-[6px] sm:mb-2">
        <p className="text-sm font-normal leading-sm text-left text-text-secondary font-['JetBrains_Mono'] w-full">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function MethodSection() {
  const methods = [
    {
      number: 'I.',
      label: 'Step',
      title: 'Listen',
      description: 'Stakeholders, support tickets, real users. Behaviour over opinion.'
    },
    {
      number: 'Ii.',
      label: 'Step',
      title: 'Frame',
      description: 'Reframe the problem until the brief stops sounding like the solution.'
    },
    {
      number: 'iiI.',
      label: 'Step',
      title: 'Sketch',
      description: 'Cheap, ugly, plural. Twenty bad ideas before one good one.'
    },
    {
      number: 'Iv.',
      label: 'Step',
      title: 'Architect',
      description: 'Information first. Visuals serve the structure, never the reverse.'
    },
    {
      number: 'v.',
      label: 'Step',
      title: 'Craft',
      description: 'Type, motion, edge cases. The 5% that the other 95% earns.'
    },
    {
      number: 'vi.',
      label: 'Step',
      title: 'Measure',
      description: 'Did it move the number that mattered? Iterate without ego.'
    }
  ]

  return (
    <section className="flex flex-row justify-start items-center w-full mb-[108px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[138px] justify-center items-center w-full border-b border-[rgba(128,128,128,0.3)] pt-[60px] sm:pt-[80px] md:pt-[100px] lg:pt-[120px] pb-[60px] sm:pb-[80px] md:pb-[100px] lg:pt-[120px]">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-0">
            <div className="flex flex-row justify-start items-center w-auto">
              <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-secondary font-['JetBrains_Mono']">
                method
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-8xl tracking-[2px] text-left text-text-primary font-['Cormorant_Garamond'] self-center w-full lg:w-[72%]">
              A six-step <span className="italic text-text-accent">ritual</span>, performed slightly differently every time.
            </h2>
          </div>

          {/* Method Steps Grid */}
          <div className="flex flex-row justify-start items-center w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
              {/* Row 1 */}
              <div className="border-b border-r-0 sm:border-r border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[0]} />
              </div>
              <div className="border-b border-l-0 sm:border-l border-r-0 lg:border-r border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[1]} />
              </div>
              <div className="border-b border-l-0 lg:border-l border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[2]} />
              </div>

              {/* Row 2 */}
              <div className="border-t border-r-0 sm:border-r border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[3]} />
              </div>
              <div className="border-t border-l-0 sm:border-l border-r-0 lg:border-r border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[4]} />
              </div>
              <div className="border-t border-l-0 lg:border-l border-[rgba(128,128,128,0.3)]">
                <MethodStep {...methods[5]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}