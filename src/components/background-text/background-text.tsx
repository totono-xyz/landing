function BackgroundText() {
  const marqueeContent = (
    <span className="text-huge font-display font-extrabold tracking-tighter whitespace-nowrap">
      ENGINEERING_SYSTEMS&nbsp;&nbsp;&nbsp;&nbsp;ENGINEERING_SYSTEMS&nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  )

  return (
    <div aria-hidden="true">
      <div className="absolute top-40 left-0 w-full overflow-hidden opacity-[0.03] select-none pointer-events-none">
        <div className="animate-marquee flex w-max">
          {marqueeContent}
          {marqueeContent}
        </div>
      </div>
      <div className="absolute bottom-20 -right-20 opacity-[0.03] select-none pointer-events-none">
        <span className="text-huge font-display font-extrabold tracking-tighter">01001111</span>
      </div>
    </div>
  )
}

export default BackgroundText
