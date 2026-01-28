export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <a href="/" className="flex items-center">
            <div className="text-2xl font-bold tracking-wider text-gray-900">
                APEX <span className="text-blue-600">ML</span> SOLUTIONS
            </div>
            </a>


          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
