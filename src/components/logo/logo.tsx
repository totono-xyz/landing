import logo from '../../assets/logo.png'

function Logo({ className }: { className?: string }) {
  return (
    <img
      className={`h-12 w-12 rounded-lg ${className}`} // Tailwind classes for size and border-radius
      src={logo} // Imported image reference
      alt="Company Logo"
    />
  )
}

export default Logo
