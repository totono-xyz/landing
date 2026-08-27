import { useState, useCallback } from 'react'

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
    <section id="contact" className="mt-32 mb-40 flex flex-col md:flex-row gap-8">
      <div className="flex flex-col justify-center items-start p-8 mx-auto items-center text-center">
        <span className="font-sans text-[0.6875rem] uppercase tracking-[0.2em] font-bold text-secondary mb-4">
          Contact Information
        </span>

        <h2 className="font-display text-3xl font-bold text-primary mb-6">
          US company looking for Argentinian talent? Reach out.
        </h2>

        <div className="relative">
          <a
            className="group flex items-center gap-4 text-xl font-sans font-medium text-primary hover:text-secondary transition-colors"
            href={`mailto:${EMAIL}`}
            onClick={handleClick}
          >
            {EMAIL}
            <span
              aria-hidden="true"
              className="material-symbols-outlined transition-transform group-hover:translate-x-1"
            >
              arrow_forward
            </span>
          </a>

          <span
            aria-hidden={!copied}
            className={`absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-sans text-on-surface-variant transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied to clipboard
          </span>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
