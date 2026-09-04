import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap, ArrowRight } from 'lucide-react'
import { useCalendly } from './CalendlyModal'

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const navRef = useRef(null)
  const location = useLocation()
  const calendly = useCalendly()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus when the route changes
  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenDropdown(null)
  }, [location.pathname])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  // Close overlays with Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { setMobileMenuOpen(false); setOpenDropdown(null) }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Close the desktop dropdown when clicking outside the nav
  useEffect(() => {
    if (!openDropdown) return
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null)
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [openDropdown])

  const sexualHealthLinks = [
    { label: 'Assessment & Diagnosis', href: '/sexual-health/assessment' },
    { label: 'Individual Therapy', href: '/sexual-health/individual-therapy' },
    { label: 'Education & Psychoeducation', href: '/sexual-health/education' },
    { label: 'Coordination of Care', href: '/sexual-health/coordination' },
  ]

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      hasMega: true,
      activePrefixes: ['/services', '/sexual-health'],
      mega: {
        columns: [
          {
            title: 'Mental Health',
            footerLink: { label: 'View all services', href: '/services' },
            links: [
              { label: 'Depression Treatment', href: '/services/mental-health' },
              { label: 'Anxiety Treatment', href: '/services/mental-health' },
              { label: 'Bipolar Disorder', href: '/services/mental-health' },
              { label: 'PTSD Treatment', href: '/services/mental-health' },
              { label: 'ADD/ADHD', href: '/services/mental-health' },
            ]
          },
          {
            title: 'Sexual Health',
            links: sexualHealthLinks
          },
        ],
      }
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

  const isActive = (href, extraPrefixes = []) => {
    if (extraPrefixes.length) return extraPrefixes.some((p) => location.pathname.startsWith(p))
    if (href === '/') return location.pathname === '/'
    return location.pathname.startsWith(href)
  }

  const dropChevron = (item) => (
    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
  )

  return (
    <nav ref={navRef} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/90 backdrop-blur-xl shadow-xl py-3' 
        : 'bg-white py-5'
    }`}>
      {/* Top Bar */}
      {!scrolled && (
        <div className="hidden lg:block bg-slate-900 text-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 h-10 flex items-center justify-between">
            <a href="tel:4704812034" className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              470-481-2034
            </a>
            <a href="mailto:info@wellcresttherapy.com" className="text-sm text-slate-300 hover:text-white transition-colors">
              info@wellcresttherapy.com
            </a>
          </div>
        </div>
      )}

      {/* Main Nav */}
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 pt-2 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
          <img src="/wellcrest-logo.png" alt="WellCrest" className="h-16 xl:h-20 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => (item.hasDropdown || item.hasMega) && setOpenDropdown(item.label)}
              onMouseLeave={() => (item.hasDropdown || item.hasMega) && setOpenDropdown(null)}
            >
              {item.hasMega ? (
                <>
                  <div className="flex items-center gap-0.5">
                    <Link
                      to={item.href}
                      className={`text-[15px] 2xl:text-base transition-colors font-medium py-4 ${
                        isActive(item.href, item.activePrefixes) 
                          ? 'text-brand' 
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <span className="relative inline-flex items-center">
                        {item.label}
                        <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-brand-teal text-white text-[9px] font-bold uppercase tracking-wide leading-none px-1.5 py-1">
                          <motion.span
                            animate={{ opacity: [1, 0.35, 1], scale: [1, 1.15, 1] }}
                            transition={{ duration: 1.6, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-white"
                          />
                          New
                          <span className="sr-only"> sexual health service</span>
                        </span>
                      </span>
                    </Link>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      className="text-slate-500 hover:text-slate-900 transition-colors py-4"
                    >
                      {dropChevron(item)}
                    </button>
                  </div>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] 2xl:w-[760px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 xl:p-7"
                      >
                        <div className="grid grid-cols-2 gap-8">
                          {item.mega.columns.map((column) => (
                            <div key={column.title}>
                              <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand mb-3">
                                {column.title}
                                {column.title === 'Sexual Health' && (
                                  <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal text-white text-[9px] font-bold uppercase tracking-wide leading-none px-1.5 py-1">
                                    <span className="w-1 h-1 rounded-full bg-white animate-pulse" />
                                    New
                                  </span>
                                )}
                              </h4>
                              <div className="space-y-1">
                                {column.links.map((lnk) => (
                                  <Link
                                    key={lnk.label}
                                    to={lnk.href}
                                    onClick={() => setOpenDropdown(null)}
                                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                                      isActive(lnk.href)
                                        ? 'text-brand bg-brand-50 font-medium'
                                        : 'text-slate-600 hover:text-brand hover:bg-slate-50'
                                    }`}
                                  >
                                    {lnk.label}
                                  </Link>
                                ))}
                              </div>
                              {column.footerLink && (
                                <Link
                                  to={column.footerLink.href}
                                  onClick={() => setOpenDropdown(null)}
                                  className="group/link mt-3 inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
                                >
                                  {column.footerLink.label}
                                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : item.hasDropdown ? (
                <>
                  <button 
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                    onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    className="flex items-center gap-1 text-[15px] 2xl:text-base text-slate-600 hover:text-slate-900 transition-colors py-4 font-medium"
                  >
                    {item.label}
                    {dropChevron(item)}
                  </button>

                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 min-w-[230px] bg-white rounded-xl shadow-xl border border-slate-100 py-2"
                      >
                        {item.dropdown.map((dropItem) => (
                          <Link 
                            key={dropItem.label}
                            to={dropItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2.5 text-sm text-slate-600 hover:text-brand hover:bg-slate-50 transition-colors"
                          >
                            {dropItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link 
                  to={item.href}
                  className={`text-[15px] 2xl:text-base transition-colors font-medium py-4 ${
                    isActive(item.href) 
                      ? 'text-brand' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden xl:flex items-center gap-2.5">
          <Link
            to="/preceptorship"
            className={`flex items-center gap-1.5 border-2 border-brand-teal text-brand-teal px-3.5 py-2 rounded-xl font-semibold transition-colors ${
              isActive('/preceptorship') ? 'bg-brand-teal/10' : 'hover:bg-brand-teal/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            Preceptorship
          </Link>
          <button onClick={calendly.open} className="btn-primary !py-2 !px-4 whitespace-nowrap">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden bg-white border-t border-slate-100 overflow-y-auto max-h-[80dvh]"
          >
            <div className="px-4 py-4 space-y-1">
              <div className="flex items-center gap-4 text-sm text-slate-600 border-b border-slate-100 pb-4 mb-2">
                <a href="tel:4704812034" className="flex items-center gap-2 hover:text-brand transition-colors">
                  <Phone className="w-4 h-4" />
                  470-481-2034
                </a>
                <span className="text-slate-300">|</span>
                <a href="mailto:info@wellcresttherapy.com" className="flex items-center gap-2 hover:text-brand transition-colors">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>

              {navItems.map((item) => (
                <div key={item.label}>
                  {item.hasMega ? (
                    <>
                      <div className="flex items-center justify-between">
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex-1 flex items-center gap-2 px-4 py-3 rounded-xl transition-colors ${
                            isActive(item.href, item.activePrefixes)
                              ? 'text-brand bg-brand-50'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          {item.label}
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal text-white text-[9px] font-bold uppercase tracking-wide leading-none px-1.5 py-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                            New
                          </span>
                        </Link>
                        <button
                          type="button"
                          aria-expanded={openDropdown === item.label}
                          className="p-3 text-slate-500 hover:text-slate-900"
                          onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      <AnimatePresence initial={false}>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="space-y-1 mt-1 mb-1">
                              {item.mega.columns.map((column) => (
                                <div key={column.title} className="pt-2">
                                  <p className="flex items-center gap-1.5 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
                                    {column.title}
                                    {column.title === 'Sexual Health' && (
                                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-teal text-white text-[9px] font-bold uppercase tracking-wide leading-none px-1.5 py-1">
                                        New
                                      </span>
                                    )}
                                  </p>
                                  {column.links.map((lnk) => (
                                    <Link
                                      key={lnk.label}
                                      to={lnk.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`block px-4 py-2.5 text-sm rounded-xl transition-colors ${
                                        isActive(lnk.href)
                                          ? 'text-brand bg-brand-50 font-medium'
                                          : 'text-slate-500 hover:text-brand hover:bg-slate-50'
                                      }`}
                                    >
                                      {lnk.label}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : item.hasDropdown ? (
                    <>
                      <button 
                        type="button"
                        aria-expanded={openDropdown === item.label}
                        className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                        onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {openDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 overflow-hidden"
                          >
                            <div className="space-y-1 mt-1 mb-1">
                              {item.dropdown.map((dropItem) => (
                                <Link 
                                  key={dropItem.label}
                                  to={dropItem.href}
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="block px-4 py-2.5 text-sm text-slate-500 hover:text-brand hover:bg-slate-50 rounded-xl transition-colors"
                                >
                                  {dropItem.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
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

              <Link
                to="/preceptorship"
                className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <GraduationCap className="w-5 h-5 text-brand-teal" />
                Preceptorship
              </Link>
              <button onClick={() => { calendly.open(); setMobileMenuOpen(false) }} className="block w-full mt-4 btn-primary text-center">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}