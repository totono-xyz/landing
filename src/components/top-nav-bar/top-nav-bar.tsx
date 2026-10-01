function TopNavBar() {
  return (
    <nav className="border-line bg-background/90 fixed top-0 z-50 w-full border-b backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <a href="/" className="font-brand text-on-surface text-2xl font-bold">
          TOTONO
        </a>

        <div className="flex items-center gap-8">
          <div className="hidden gap-7 text-[15px] font-medium sm:flex">
            <a className="hover:text-secondary" href="/#how">
              How it works
            </a>
            <a className="hover:text-secondary" href="/#harness">
              The harness
            </a>
            <a className="hover:text-secondary" href="/faq">
              FAQ
            </a>
          </div>
          <a
            href="/#contact"
            className="bg-primary text-on-primary font-display inline-flex min-h-11 items-center rounded-md px-5 text-[13px] font-extrabold tracking-[0.12em] uppercase transition-all hover:opacity-90 active:scale-[0.99]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  )
}

export default TopNavBar
