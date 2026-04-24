import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Mail, CheckCircle } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Stay Updated</h2>
              <p className="text-slate-400 mb-0">Get the latest mental health insights, news, and updates from WellCrest Health.</p>
            </div>
            
            {subscribed ? (
              <div className="flex items-center gap-3 text-emerald-400">
                <CheckCircle className="w-6 h-6" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:border-brand-teal focus:outline-none transition-colors"
                  />
                </div>
                <button 
                  type="submit"
                  className="btn-primary whitespace-nowrap flex items-center justify-center gap-2"
                >
                  Subscribe <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}