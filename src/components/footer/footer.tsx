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
    <footer className="bg-slate-50 w-full mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-12 py-10">
        <div className="mb-6 md:mb-0">
          <div className="font-brand font-bold text-on-surface mb-2">TOTONO</div>
          <p className="font-sans text-xs tracking-widest uppercase text-slate-500">
            &copy; {new Date().getFullYear()} TOTONO LLC. Registered in Delaware.
          </p>
        </div>

        <div className="relative">
          <a
            className="font-sans text-xs tracking-widest uppercase text-slate-500 hover:text-black transition-colors"
            href={`mailto:${EMAIL}`}
            onClick={handleClick}
          >
            {EMAIL}
          </a>
          <span
            className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-sans text-on-surface-variant whitespace-nowrap transition-opacity duration-300 ${copied ? 'opacity-100' : 'opacity-0'}`}
          >
            Copied to clipboard
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
