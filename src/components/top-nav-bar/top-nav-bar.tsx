function TopNavBar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-12 py-6 mx-auto">
        <div className="text-2xl font-bold text-on-surface font-brand">TOTONO</div>

        <a
          href="#contact"
          className="bg-primary text-on-primary px-6 py-2 rounded-lg font-display font-bold uppercase text-sm tracking-widest hover:bg-primary-container transition-all active:scale-[0.99]"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  )
}

export default TopNavBar
