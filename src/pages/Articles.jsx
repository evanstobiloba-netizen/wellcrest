import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../sections/Footer'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, Heart, Video, Shield, Users, Clock, MapPin, Phone, Mail, ArrowRight, Calendar, Tag } from 'lucide-react'
import { useContent } from '../context/ContentContext'

export default function Articles(){
  const { content, loading } = useContent()
  
  // Wait for content to load, with fallback images
  const articles = content?.blogPosts || []
  
  const displayArticles = articles.length > 0 ? articles : [
    { id: 1, title: 'Loading...', content: 'Loading content...', category: 'General', date: '2025-01-01', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d1b37?w=800&h=400&fit=crop' }
  ]

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="pt-32 text-center">
          <p className="text-slate-500">Loading...</p>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-20 -left-40 w-96 h-96 bg-[brand-navy]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 -right-40 w-80 h-80 bg-[#00C2FF]/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 bg-[brand-navy]/10 text-[brand-navy] rounded-full text-sm font-medium mb-6">
              Articles
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#0A2540] mb-6">
              News & Articles
            </h1>
            <p className="text-lg text-[#5A6A7A]">
              Stay informed with the latest insights on mental health, wellness, and evidence-based treatment approaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article, idx) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
              >
                {article.image ? (
                  <img src={article.image} alt={article.title} className="h-48 w-full object-cover" />
                ) : (
                  <div className="h-48 bg-gradient-to-r from-brand to-brand-teal flex items-center justify-center">
                    <Brain className="w-16 h-16 text-white/30" />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-brand-navy font-medium">
                      <Tag className="w-3 h-3" />{article.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs text-slate-500">{article.readTime || '3 min read'}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[brand-navy] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#5A6A7A] mb-4">
                    {article.content?.substring(0, 120) || article.content?.substring(0, 120)}...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">{article.date}</span>
                    <Link to={`/articles/detail?id=${article.id}`} className="text-sm text-brand font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}