import React, { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import CalendlyModal from '../components/CalendlyModal'
import { useCalendly } from '../components/CalendlyModal'
import { motion } from 'framer-motion'
import { ArrowLeft, Tag, Calendar, Mail, Send } from 'lucide-react'
import { useContent } from '../context/ContentContext'

export default function BlogDetail() {
  const [searchParams] = useSearchParams()
  const { content } = useContent()
  const postId = parseInt(searchParams.get('id'))
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const calendly = useCalendly()
  
  const post = content?.blogPosts?.find(p => p.id === postId) || content?.blogPosts?.[0]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <p className="text-slate-500">Post not found</p>
          <Link to="/articles" className="text-brand mt-4 inline-block">Back to Articles</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-28 pb-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <Link to="/articles" className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all mb-6">
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="flex items-center gap-1 text-sm text-brand font-medium">
                <Tag className="w-4 h-4" />{post.category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-sm text-slate-500">{post.date}</span>
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">{post.title}</h1>
            
            {post.image && (
              <img src={post.image} alt={post.title} className="w-full h-64 lg:h-96 object-cover rounded-2xl mb-8" />
            )}
            
            <div className="prose max-w-none">
              <p className="text-lg text-slate-600 whitespace-pre-wrap">{post.content}</p>
            </div>

            {/* CTAs */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Book Appointment CTA */}
                <button 
                  onClick={calendly.open}
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-brand to-brand-teal text-white px-6 py-4 rounded-2xl font-medium hover:opacity-90 transition-opacity"
                >
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>

                {/* Newsletter CTA */}
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <div className="flex items-center gap-2 mb-3">
                    <Mail className="w-5 h-5 text-brand" />
                    <h3 className="font-semibold text-slate-900">Subscribe to Newsletter</h3>
                  </div>
                  {subscribed ? (
                    <p className="text-emerald-600 font-medium">Thanks for subscribing!</p>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex gap-2">
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email"
                        required
                        className="flex-1 px-4 py-2 rounded-xl border border-slate-200"
                      />
                      <button type="submit" className="flex items-center gap-2 bg-brand text-white px-4 py-2 rounded-xl font-medium">
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CalendlyModal isOpen={calendly.isOpen} onClose={calendly.close} />

      <Footer />
    </div>
  )
}