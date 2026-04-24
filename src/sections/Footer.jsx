import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Heart, Video, Shield, Users, Clock, MapPin, Phone, Mail, ArrowRight, Award, CheckCircle } from 'lucide-react'

const FooterLink = ({to, children}) => (
  <Link to={to} className="text-sm text-slate-500 hover:text-slate-900 transition-colors duration-200">{children}</Link>
)

export default function Footer(){
  const footerLinks = {
    services: [
      { name: 'Depression Treatment', href: '/services/mental-health' },
      { name: 'Anxiety Treatment', href: '/services/mental-health' },
      { name: 'Bipolar Disorder', href: '/services/mental-health' },
      { name: 'PTSD Treatment', href: '/services/mental-health' },
      { name: 'ADD/ADHD', href: '/services/mental-health' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Articles', href: '/articles' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'HIPAA Notice', href: '#' },
    ],
  }

  return (
    <motion.footer 
      className="bg-slate-900 text-white pt-20 pb-8" 
      initial={{opacity: 0}} 
      whileInView={{opacity: 1}} 
      viewport={{once:true}}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
{/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/wellcrest-logo.png" alt="WellCrest" className="h-20 w-auto" />
            </Link>
            <p className="text-slate-400 mb-6 max-w-xs leading-relaxed">
              Compassionate, convenient, and affordable mental health services. We deliver evidence-based care across Georgia, Arizona, and Maryland.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:4704812034" className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>470-481-2034</span>
              </a>
              <a href="mailto:info@wellcresttherapy.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>info@wellcresttherapy.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4" />
                <span>7910 Mall Ring Road, Stonecrest, GA</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-slate-300">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}><FooterLink to={link.href}>{link.name}</FooterLink></li>
              ))}
            </ul>
          </div>
          
          {/* Regions */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-slate-300">Regions</h4>
            <ul className="space-y-3">
              <li><FooterLink to="/locations/georgia">Georgia</FooterLink></li>
              <li><FooterLink to="/locations/arizona">Arizona</FooterLink></li>
              <li><FooterLink to="/locations/maryland">Maryland</FooterLink></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-slate-300">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, idx) => (
                <li key={idx}><FooterLink to={link.href}>{link.name}</FooterLink></li>
              ))}
            </ul>
          </div>
          
          {/* CTA Column */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-6 text-slate-300">Quick Links</h4>
            <Link to="/contact" className="btn-primary w-full justify-center">
              Book Appointment
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://linkedin.com/company/wellcrest-health" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0h.003z"/></svg>
              </a>
              <a href="https://web.facebook.com/profile.php?id=61577744694621" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/></svg>
              </a>
              <a href="https://instagram.com/wellcresttherapy" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">© 2025 WellCrest Health. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="#" className="text-sm text-slate-500 hover:text-white transition-colors">Accessibility</Link>
              <Link to="#" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-sm text-slate-500 hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}