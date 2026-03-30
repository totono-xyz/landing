function HeroSection() {
  return (
    <section className="mt-20 md:mt-32 max-w-4xl relative z-10">
      <div className="inline-block px-3 py-1 bg-surface-container-high rounded-full mb-8">
        <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] font-semibold text-on-surface-variant">
          Version 4.0 // 2026
        </span>
      </div>

      <div className="ml-0 md:ml-48 border-l-4 border-primary pl-8 py-2 mb-12">
        <p className="font-sans text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed">
          Bringing your ideas to life with tailored software services. We focus on reliability,
          structural integrity, and the technical precision your vision deserves.
        </p>
      </div>

      <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight text-primary leading-[1.1]">
        Let's <span className="text-accent">build<span className="animate-cursor-blink text-accent">_</span></span> something great together.
      </h1>
    </section>
  )
}

export default HeroSection
