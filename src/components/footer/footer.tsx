const EMAIL = 'toni.tralice@totono.xyz'

function Footer() {
  return (
    <footer className="bg-dark text-dark-muted border-dark-line mt-auto w-full border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-9 md:flex-row md:items-center">
        <div>
          <div className="font-brand text-on-dark mb-2 text-lg font-bold">TOTONO</div>
          <p className="font-mono text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} TOTONO LLC. Registered in Delaware.
          </p>
          <nav className="mt-3 flex flex-wrap gap-6 font-mono text-xs tracking-widest uppercase">
            <a className="transition-colors hover:text-white" href="/about">
              About
            </a>
            <a
              className="transition-colors hover:text-white"
              href="/nearshore-ai-software-development"
            >
              Nearshore AI development
            </a>
            <a className="transition-colors hover:text-white" href="/contact">
              Contact
            </a>
            <a className="transition-colors hover:text-white" href="/faq">
              FAQ
            </a>
            <a className="transition-colors hover:text-white" href="/privacy">
              Privacy
            </a>
          </nav>
        </div>

        <div className="relative">
          <a
            className="font-mono text-xs tracking-widest uppercase transition-colors hover:text-white"
            href={`mailto:${EMAIL}`}
            data-copy={EMAIL}
          >
            {EMAIL}
          </a>
          <span
            role="status"
            data-copied
            className="text-dark-body absolute -bottom-6 left-1/2 -translate-x-1/2 font-sans text-xs whitespace-nowrap opacity-0 transition-opacity duration-300"
          />
        </div>
      </div>
    </footer>
  )
}

export default Footer
