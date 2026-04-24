import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'
import Logo from './Logo'
import CalendlyModal from './CalendlyModal'
import { useCalendly } from './CalendlyModal'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const location = useLocation()
  const calendly = useCalendly()
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { 
      label: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdown: [
        { label: 'Mental Health', href: '/services/mental-health' },
        { label: 'Primary Health', href: '/services/primary-health' },
      ]
    },
    { 
      label: 'Locations', 
      href: '/locations',
      hasDropdown: true,
      dropdown: [
        { label: 'Georgia', href: '/locations/georgia' },
        { label: 'Arizona', href: '/locations/arizona' },
        { label: 'Maryland', href: '/locations/maryland' },
      ]
    },
    { label: 'Articles', href: '/articles' },
    { label: 'Contact Us', href: '/contact' },
  ]

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-premium py-3' 
        : 'bg-white py-5'
    }`}>
      {/* Top Bar */}
      {!scrolled && (
        <div className="hidden lg:block bg-slate-900 text-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 h-10 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:4704812034" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                470-481-2034
              </a>
              <span className="text-slate-700">|</span>
              <span className="text-slate-400">Fax: 470-481-2577</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="mailto:info@wellcresttherapy.com" className="text-sm text-slate-300 hover:text-white transition-colors">
                info@wellcresttherapy.com
              </a>
              <div className="flex items-center gap-3">
                <a href="https://linkedin.com/company/wellcrest-health" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/></svg>
                </a>
                <a href="https://web.facebook.com/profile.php?id=61577744694621" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/></svg>
                </a>
                <a href="https://instagram.com/wellcresttherapy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/wellcrest-logo.png" alt="WellCrest" className="h-16 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button 
                  onMouseEnter={() => item.label === 'Services' ? setServicesOpen(true) : setLocationsOpen(true)}
                  onMouseLeave={() => item.label === 'Services' ? setServicesOpen(false) : setLocationsOpen(false)}
                  className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors py-4 font-medium"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${(item.label === 'Services' && servicesOpen) || (item.label === 'Locations' && locationsOpen) ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link 
                  to={item.href}
                  className={`transition-colors font-medium py-4 ${
                    isActive(item.href) 
                      ? 'text-brand' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              )}
              
              {/* Dropdown */}
              {item.hasDropdown && (
                <AnimatePresence>
                  {(item.label === 'Services' && servicesOpen) || (item.label === 'Locations' && locationsOpen) ? (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 min-w-[180px] bg-white rounded-xl shadow-xl border border-slate-100 py-2"
                      onMouseEnter={() => item.label === 'Services' ? setServicesOpen(true) : setLocationsOpen(true)}
                      onMouseLeave={() => item.label === 'Services' ? setServicesOpen(false) : setLocationsOpen(false)}
                    >
                      {item.dropdown.map((dropItem) => (
                        <Link 
                          key={dropItem.label}
                          to={dropItem.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-brand hover:bg-slate-50 transition-colors"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button onClick={calendly.open} className="btn-primary">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100"
          >
            <div className="px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasDropdown ? (
                    <>
                      <button 
                        className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                        onClick={() => {
                          if(item.label === 'Services') setServicesOpen(!servicesOpen)
                          else setLocationsOpen(!locationsOpen)
                        }}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${(item.label === 'Services' && servicesOpen) || (item.label === 'Locations' && locationsOpen) ? 'rotate-180' : ''}`} />
                      </button>
                      {(item.label === 'Services' && servicesOpen || item.label === 'Locations' && locationsOpen) && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.dropdown.map((dropItem) => (
                            <Link 
                              key={dropItem.label}
                              to={dropItem.href}
                              className="block px-4 py-2.5 text-sm text-slate-500 hover:text-brand hover:bg-slate-50 rounded-xl transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link 
                      to={item.href}
                      className={`block px-4 py-3 rounded-xl transition-colors ${
                        isActive(item.href) 
                          ? 'text-brand bg-brand-50' 
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <button onClick={() => { calendly.open(); setMobileMenuOpen(false) }} className="block w-full mt-4 btn-primary text-center">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <CalendlyModal isOpen={calendly.isOpen} onClose={calendly.close} />
    </nav>
  )
}