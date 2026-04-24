import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Heart, Video, Star, Zap, Brain, Users, Calendar } from 'lucide-react'

export default function Hero(){
  return (
    <header className="relative w-full min-h-[92vh] lg:min-h-[88vh] overflow-hidden bg-white text-slate-900" id="home">
      {/* Premium background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[0%] right-[-5%] w-[700px] h-[700px] rounded-full bg-slate-100 blur-[150px]" />
        <div className="absolute bottom-[0%] left-[-5%] w-[600px] h-[600px] rounded-full bg-slate-50 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(to right, #64748B 1px, transparent 1px), linear-gradient(to bottom, #64748B 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-0">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center min-h-[80vh] lg:h-[88vh]">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-7 order-2 lg:order-1 pt-12 lg:pt-0">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 font-medium text-xs uppercase tracking-[0.2em] text-brand-navy mb-6 px-4 py-2 rounded-full bg-blue-50 border border-blue-100"
            >
              <Zap className="w-4 h-4" />
              YOUR HEALTH, OUR PRIORITY
            </motion.div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6"
            >
<span className="text-brand">
                Mental Health
              </span>
              <span className="text-slate-900">
                & Primary Care.
              </span>
              <br />
              <span className="text-transparent bg-clip-text from-brand-navy">
                Primary Care.
              </span>
            </motion.h1>
            
            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-500 max-w-xl mb-8 leading-relaxed"
            >
              WellCrest Health delivers compassionate, evidence-based care across mental health and primary medicine. In-person in Georgia. Telehealth across Georgia, Arizona, and Maryland.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 text-base">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="btn-secondary flex items-center justify-center gap-2 text-base">
                Explore Services
              </Link>
            </motion.div>
            
            {/* Trust indicators */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Star className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">4.9</div>
                  <div className="text-xs text-slate-400">Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">HIPAA</div>
                  <div className="text-xs text-slate-400">Compliant</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">10+</div>
                  <div className="text-xs text-slate-400">Years Exp</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center">
                  <Video className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Telehealth</div>
                  <div className="text-xs text-slate-400">Available</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Right Content - Illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-12 lg:col-span-5 order-1 lg:order-2 hidden lg:block"
          >
            <div className="relative">
              {/* Abstract brain/neural network illustration */}
              <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                {/* Background circles */}
                <div className="absolute inset-0 bg-white rounded-full" />
                
                {/* Neural nodes */}
                {[
                  { cx: '50%', cy: '30%', r: 12, delay: 0 },
                  { cx: '30%', cy: '50%', r: 10, delay: 0.1 },
                  { cx: '70%', cy: '50%', r: 14, delay: 0.15 },
                  { cx: '40%', cy: '70%', r: 8, delay: 0.2 },
                  { cx: '60%', cy: '75%', r: 11, delay: 0.25 },
                  { cx: '50%', cy: '50%', r: 20, delay: 0.3 },
                  { cx: '20%', cy: '35%', r: 6, delay: 0.35 },
                  { cx: '80%', cy: '30%', r: 7, delay: 0.4 },
                  { cx: '25%', cy: '70%', r: 5, delay: 0.45 },
                  { cx: '75%', cy: '70%', r: 9, delay: 0.5 },
                ].map((node, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: node.delay }}
                    className="absolute bg-brand rounded-full shadow-lg"
                    style={{
                      left: node.cx,
                      top: node.cy,
                      width: node.r * 2,
                      height: node.r * 2,
                      transform: 'translate(-50%, -50%)'
                    }}
                  />
                ))}
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.2 }}>
                  <motion.line x1="50%" y1="30%" x2="30%" y2="50%" stroke="url(#gradient)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
                  <motion.line x1="50%" y1="30%" x2="70%" y2="50%" stroke="url(#gradient)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }} />
                  <motion.line x1="30%" y1="50%" x2="40%" y2="70%" stroke="url(#gradient)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.7 }} />
                  <motion.line x1="70%" y1="50%" x2="60%" y2="75%" stroke="url(#gradient)" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.8 }} />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#2AB7A6" />
                      <stop offset="100%" stopColor="#2AB7A6" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Center icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-brand flex items-center justify-center shadow-xl"
                >
                  <Brain className="w-12 h-12 text-white" />
                </motion.div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-4 -right-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-brand" />
                  <span className="text-sm font-medium text-slate-700">Holistic Care</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute bottom-16 -left-8 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand" />
                  <span className="text-sm font-medium text-slate-700">Easy Scheduling</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
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