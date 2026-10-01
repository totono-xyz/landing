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

        <h2 className="max-w-[820px] font-serif text-[clamp(34px,4.6vw,58px)] leading-[1.08] font-semibold tracking-[-0.02em]">
          One engineer. A fleet of agents. Your software factory.
        </h2>

        <p className="text-dark-body max-w-[560px] text-lg leading-relaxed">
          Tell us what you want shipped. We reply within two business days.
        </p>

        <div className="relative">
          <a
            className="bg-attention hover:bg-attention-hover inline-flex min-h-14 items-center gap-3 rounded-md px-7 font-serif text-lg font-bold text-white transition-colors"
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
