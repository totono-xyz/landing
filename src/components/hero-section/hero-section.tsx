function HeroSection() {
  return (
    <section className="relative z-10 mt-20 max-w-4xl md:mt-32">
      <div className="bg-surface-container-high mb-8 inline-block rounded-full px-3 py-1">
        <span className="text-on-surface-variant font-sans text-[0.6875rem] font-semibold tracking-[0.2em] uppercase">
          Version 4.0 // 2026
        </span>
      </div>

      <div className="border-primary mb-12 ml-0 border-l-4 py-2 pl-8 md:ml-48">
        <p className="text-on-surface-variant max-w-2xl font-sans text-xl leading-relaxed md:text-2xl">
          If you are a US company that wants a vetted AI engineer from Argentina, with zero friction, email Totono.
        </p>
      </div>

      <h1 className="font-display text-primary text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl">
        Hire{' '}
        <span className="text-accent">
          Argentinian talent
          <span aria-hidden="true" className="animate-cursor-blink text-accent">
            _
          </span>
        </span>{' '}
        with zero friction.
      </h1>
    </section>
  )
}

export default HeroSection
