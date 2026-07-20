import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import BookAppointmentButton from '../components/BookAppointmentButton'
import Newsletter from '../components/Newsletter'
import Services from '../sections/Services'
import Locations from '../sections/Locations'
import Why from '../sections/Why'
import Genesight from '../sections/Genesight'
import DoctorBio from '../components/DoctorBio'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Video, Shield, Heart, Star, Zap, Brain, Users, Calendar, Activity, HeartPulse, Stethoscope, Mic } from 'lucide-react'
import { useContent } from '../context/ContentContext'

const heroStats = [
  { icon: Star, value: '4.9', label: 'Rating' },
  { icon: Shield, value: 'HIPAA', label: 'Compliant' },
  { icon: Users, value: '10+', label: 'Years Exp' },
  { icon: Video, value: 'Telehealth', label: 'Available' },
]

const heroFeatures = [
  { icon: HeartPulse, title: 'Mental Health', desc: 'Personalized therapy & psychiatric care' },
  { icon: Mic, title: 'Telehealth', desc: 'Virtual visits in GA, AZ, MD' },
]

export default function Home(){
  const { content } = useContent()
  const hero = content.hero || {}
  const services = content.services || []
  
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero hero={hero} />
      <DoctorBio />
      <Services services={services} />
      <Locations />
      <Why />
      <Genesight />
      <Newsletter />
      <Footer />
    </div>
  )
}

function Hero({ hero }){
  return (
    <header className="relative w-full min-h-screen lg:min-h-[92vh] overflow-hidden bg-white text-slate-900" id="home">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-slate-100 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-brand/[0.02] blur-[150px]" />
      </div>
      
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-8 md:px-10 lg:px-10 pt-28 sm:pt-32 pb-12 lg:pt-32 lg:pb-6">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-12 items-center min-h-[80vh] lg:h-[88vh]">
          {/* Left Content */}
          <div className="w-full lg:col-span-6 lg:order-1 pt-2 lg:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-medium text-xs uppercase tracking-[0.2em] text-brand mb-5 px-3 py-1.5 rounded-full bg-brand/10"
            >
              <Zap className="w-3.5 h-3.5" />
              {hero.badge || 'YOUR HEALTH, OUR PRIORITY'}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-5"
            >
              <span className="text-brand">
                {hero.title || 'Mental Health & Wellness.'}
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg text-slate-500 max-w-lg mb-6 sm:mb-8 leading-relaxed"
            >
              {hero.subtitle || 'Compassionate, evidence-based care delivered with convenience and affordability.'}
            </motion.p>

<motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <BookAppointmentButton />
              <Link to="/about" className="btn-secondary flex items-center justify-center gap-2 text-base">
                {hero.ctaSecondary || 'About Us'}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6"
            >
              {heroStats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-50 flex items-center justify-center">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900">{stat.value}</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full lg:col-span-6 lg:order-2"
          >
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {heroFeatures.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-slate-100 hover:shadow-xl hover:border-brand/20 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-brand/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-brand" />
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{feature.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-500">{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </header>
  )
}