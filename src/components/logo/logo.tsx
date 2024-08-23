function Logo({ className }: { className?: string }) {
  return (
    <img
      className={`h-12 w-12 rounded-lg ${className}`} // Tailwind classes for size and border-radius
      src="./assets/logo.png"
      alt="Company Logo"
    />
  )
}

export default Logo
