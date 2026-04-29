'use client';
export default function StorySection() {
  return (
    <section className="flex flex-row justify-start items-center w-full">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-12 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row justify-between items-start w-full border-t border-[rgba(128,128,128,0.3)] pt-[60px] pb-[60px] mb-[18px] gap-8 lg:gap-0">
          {/* Label */}
          <div className="flex flex-row justify-start items-center w-auto mt-0 lg:mt-[60px]">
            <span className="text-sm font-normal leading-base tracking-[2px] text-left uppercase text-text-accent font-['JetBrains_Mono']">
              A short story
            </span>
          </div>

          {/* Story Content */}
          <div className="text-base font-medium leading-lg text-left text-text-secondary font-['JetBrains_Mono'] w-full lg:w-[62%] mt-0 lg:mt-[60px]">
            <p className="mb-4">
              I have always been drawn to <span className="italic">design — sketching ideas</span>, questioning how things work, and imagining how they could be better.
            </p>
            
            <p className="mb-4">
              That instinct stayed with me, even when I started my career as a{' '}
              <span className="italic">Quality Analyst</span> — where I learned to deeply understand systems, identify friction, and think in terms of outcomes.
            </p>
            
            <p className="mb-4">
              Design did not disappear — it evolved.
            </p>
            
            <p className="mb-4">
              When I transitioned into <span className="italic">Product Design</span>, it felt like reconnecting with something familiar, but with a new lens — one shaped by structure, analysis, and real-world complexity.
            </p>
            
            <p className="mb-4">
              Through iterations, failures, and constant questioning, I learned to{' '}
              <span className="italic">trust my thinking and design</span> with intent — not just aesthetics.
            </p>
            
            <p className="mb-4">
              Today, I design at the intersection of clarity, systems thinking, and user empathy — creating experiences that are not just usable, but meaningful.
            </p>
            
            <p>
              <span className="italic font-normal">This portfolio is a reflection of</span>
              <span className="italic font-normal text-text-accent"> that journey.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}