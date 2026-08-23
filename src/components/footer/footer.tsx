import { useState, useCallback } from 'react'

const EMAIL = 'toni.tralice@totono.xyz'

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
}

function Footer() {
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
    <footer className="mt-auto w-full bg-slate-50">
      <div className="flex w-full flex-col items-center justify-between px-12 py-10 md:flex-row">
        <div className="mb-6 md:mb-0">
          <div className="font-brand text-on-surface mb-2 font-bold">TOTONO</div>
          <p className="font-sans text-xs tracking-widest text-slate-500 uppercase">
            &copy; {new Date().getFullYear()} TOTONO LLC. Registered in Delaware.
          </p>
          <nav className="mt-3 flex gap-6 font-sans text-xs tracking-widest text-slate-500 uppercase">
            <a className="transition-colors hover:text-black" href="/about">
              About
            </a>
            <a className="transition-colors hover:text-black" href="/contact">
              Contact
            </a>
            <a className="transition-colors hover:text-black" href="/privacy">
              Privacy
            </a>
          </nav>
        </div>

        <div className="relative">
          <a
            className="font-sans text-xs tracking-widest text-slate-500 uppercase transition-colors hover:text-black"
            href={`mailto:${EMAIL}`}
            onClick={handleClick}
          >
            {EMAIL}
          </a>
          <span
            className={`text-on-surface-variant absolute -bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs whitespace-nowrap transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied to clipboard
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
