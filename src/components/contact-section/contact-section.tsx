import { useState, useCallback } from 'react'
import { ArrowIcon } from '@/components/hero-section'

const EMAIL = 'toni.tralice@totono.xyz'

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function ContactSection() {
  const [copied, setCopied] = useState(false)

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isMobile()) return

    e.preventDefault()
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])

  return (
    <section id="contact" className="bg-dark text-on-dark scroll-mt-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-7 px-6 py-30">
        <span className="text-accent-on-dark font-mono text-xs tracking-[0.14em] uppercase">
          Contact
        </span>

        <h2 className="font-display max-w-[820px] text-[clamp(36px,5vw,64px)] leading-[1.04] font-extrabold tracking-[-0.035em]">
          Want agents shipping on your codebase?
        </h2>

        <p className="text-dark-body max-w-[560px] text-lg leading-relaxed">
          Tell us about your product, your stack and what you want shipped. We reply within two
          business days, in English or Spanish. The first call and proposal are free.
        </p>

        <div className="relative">
          <a
            className="bg-accent hover:bg-accent-hover font-display inline-flex min-h-14 items-center gap-3 rounded-md px-7 text-lg font-extrabold text-white transition-colors"
            href={`mailto:${EMAIL}`}
            onClick={handleClick}
          >
            {EMAIL}
            <ArrowIcon />
          </a>

          <span
            aria-hidden={!copied}
            className={`text-dark-body absolute -bottom-8 left-0 font-sans text-xs transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied to clipboard
          </span>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
