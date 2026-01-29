'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          <a href="/" className="flex items-center">
            <div className="text-xl md:text-3xl font-bold tracking-wider text-gray-900">
              APEX <span className="text-blue-600">ML</span> SOLUTIONS
            </div>
          </a>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/case-studies" className="text-gray-700 hover:text-blue-600">Case Studies</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </div>

          <button 
            className="md:hidden text-gray-700 text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <a href="/" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</a>
            <a href="/services" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</a>
            <a href="/case-studies" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Case Studies</a>
            <a href="/contact" className="block py-2 text-gray-700 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}