import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, FileText, MapPin, Users, LogOut, Edit, Plus, Trash2,
  Phone, BookOpen, Send, Lock, X, Menu, Save
} from 'lucide-react'
import { ContentProvider, useContent } from '../context/ContentContext'

const ADMIN_PASSWORD = 'WellCrest2025!'

function HeroEditor({ content, onUpdate }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Badge</label>
        <input 
          type="text" 
          value={content.badge}
          onChange={(e) => onUpdate({ ...content, badge: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
        <input 
          type="text" 
          value={content.title}
          onChange={(e) => onUpdate({ ...content, title: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Subtitle</label>
        <textarea 
          value={content.subtitle}
          onChange={(e) => onUpdate({ ...content, subtitle: e.target.value })}
          rows={3}
          className="w-full px-4 py-3 rounded-xl border border-slate-200"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Primary CTA</label>
          <input 
            type="text" 
            value={content.ctaPrimary}
            onChange={(e) => onUpdate({ ...content, ctaPrimary: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Secondary CTA</label>
          <input 
            type="text" 
            value={content.ctaSecondary}
            onChange={(e) => onUpdate({ ...content, ctaSecondary: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
        </div>
      </div>
    </div>
  )
}

function ServicesEditor({ content, onUpdate }) {
  const addService = () => {
    const newService = {
      id: Date.now(),
      title: 'New Service',
      shortDesc: 'Description here',
      description: 'Full description',
      icon: 'Brain'
    }
    onUpdate([...content, newService])
  }

  const updateService = (id, field, value) => {
    onUpdate(content.map(s => s.id === id ? { ...s, [field]: value } : s))
  }

  const deleteService = (id) => {
    if (confirm('Delete this service?')) {
      onUpdate(content.filter(s => s.id !== id))
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={addService} className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl">
        <Plus className="w-4 h-4" /> Add Service
      </button>
      {content.map((service, idx) => (
        <div key={service.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input 
                type="text" 
                value={service.title}
                onChange={(e) => updateService(service.id, 'title', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Icon (name)</label>
              <input 
                type="text" 
                value={service.icon}
                onChange={(e) => updateService(service.id, 'icon', e.target.value)}
                placeholder="Brain, Video, Heart..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Short Description</label>
            <input 
              type="text" 
              value={service.shortDesc}
              onChange={(e) => updateService(service.id, 'shortDesc', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200"
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Description</label>
            <textarea 
              value={service.description}
              onChange={(e) => updateService(service.id, 'description', e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-slate-200"
            />
          </div>
          <button onClick={() => deleteService(service.id)} className="mt-4 flex items-center gap-2 px-4 py-2 text-red-500">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      ))}
    </div>
  )
}

function LocationsEditor({ content, onUpdate }) {
  const addLocation = () => {
    const newLocation = {
      id: Date.now(),
      name: 'New State',
      tagline: 'Telehealth Only',
      address: 'Virtual Care',
      phone: '000-000-0000',
      email: 'new@wellcrest.com'
    }
    onUpdate([...content, newLocation])
  }

  const updateLocation = (id, field, value) => {
    onUpdate(content.map(l => l.id === id ? { ...l, [field]: value } : l))
  }

  const deleteLocation = (id) => {
    if (confirm('Delete this location?')) {
      onUpdate(content.filter(l => l.id !== id))
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={addLocation} className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl">
        <Plus className="w-4 h-4" /> Add Location
      </button>
      {content.map((location) => (
        <div key={location.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">State Name</label>
              <input 
                type="text" 
                value={location.name}
                onChange={(e) => updateLocation(location.id, 'name', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tagline</label>
              <input 
                type="text" 
                value={location.tagline}
                onChange={(e) => updateLocation(location.id, 'tagline', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
            <input 
              type="text" 
              value={location.address}
              onChange={(e) => updateLocation(location.id, 'address', e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
              <input 
                type="text" 
                value={location.phone}
                onChange={(e) => updateLocation(location.id, 'phone', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="text" 
                value={location.email}
                onChange={(e) => updateLocation(location.id, 'email', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <button onClick={() => deleteLocation(location.id)} className="mt-4 flex items-center gap-2 px-4 py-2 text-red-500">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      ))}
    </div>
  )
}

function ContactEditor({ content, onUpdate }) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
          <input 
            type="text" 
            value={content.email}
            onChange={(e) => onUpdate({ ...content, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
          <input 
            type="text" 
            value={content.phone}
            onChange={(e) => onUpdate({ ...content, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border border-slate-200"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
        <input 
          type="text" 
          value={content.address}
          onChange={(e) => onUpdate({ ...content, address: e.target.value })}
          className="w-full px-4 py-3 rounded-xl border border-slate-200"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Hours</label>
        <textarea 
          value={content.hours}
          onChange={(e) => onUpdate({ ...content, hours: e.target.value })}
          rows={2}
          className="w-full px-4 py-3 rounded-xl border border-slate-200"
        />
      </div>
    </div>
  )
}

function BlogPostsEditor({ content, onUpdate }) {
  const addPost = () => {
    const newPost = {
      id: Date.now(),
      title: 'New Blog Post',
      content: 'Write your full blog post content here...',
      date: new Date().toISOString().split('T')[0],
      category: 'Mental Health',
      image: ''
    }
    onUpdate([...content, newPost])
  }

  const updatePost = (id, field, value) => {
    onUpdate(content.map(p => p.id === id ? { ...p, [field]: value } : p))
  }

  const deletePost = (id) => {
    if (confirm('Delete this post?')) {
      onUpdate(content.filter(p => p.id !== id))
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={addPost} className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl">
        <Plus className="w-4 h-4" /> Add Post
      </button>
      {content.map((post) => (
        <div key={post.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input 
                type="text" 
                value={post.title}
                onChange={(e) => updatePost(post.id, 'title', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
              <input 
                type="text" 
                value={post.category}
                onChange={(e) => updatePost(post.id, 'category', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-slate-700 mb-2">Full Blog Post Content</label>
            <textarea 
              value={post.content}
              onChange={(e) => updatePost(post.id, 'content', e.target.value)}
              rows={10}
              className="w-full px-4 py-3 rounded-xl border border-slate-200"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
              <input 
                type="date" 
                value={post.date}
                onChange={(e) => updatePost(post.id, 'date', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Image URL</label>
              <input 
                type="text" 
                value={post.image || ''}
                onChange={(e) => updatePost(post.id, 'image', e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <button onClick={() => deletePost(post.id)} className="mt-4 flex items-center gap-2 px-4 py-2 text-red-500">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      ))}
    </div>
  )
}

function NewslettersEditor({ content, onUpdate }) {
  const addNewsletter = () => {
    const newNl = {
      id: Date.now(),
      title: 'New Newsletter',
      subject: 'Subject line...',
      sentDate: new Date().toISOString().split('T')[0],
      recipients: 0,
      status: 'draft'
    }
    onUpdate([...content, newNl])
  }

  const updateNewsletter = (id, field, value) => {
    onUpdate(content.map(n => n.id === id ? { ...n, [field]: value } : n))
  }

  const deleteNewsletter = (id) => {
    if (confirm('Delete this newsletter?')) {
      onUpdate(content.filter(n => n.id !== id))
    }
  }

  return (
    <div className="space-y-4">
      <button onClick={addNewsletter} className="flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-xl">
        <Plus className="w-4 h-4" /> Create Newsletter
      </button>
      {content.map((nl) => (
        <div key={nl.id} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Title</label>
              <input 
                type="text" 
                value={nl.title}
                onChange={(e) => updateNewsletter(nl.id, 'title', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
              <input 
                type="text" 
                value={nl.subject}
                onChange={(e) => updateNewsletter(nl.id, 'subject', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Date</label>
              <input 
                type="date" 
                value={nl.sentDate}
                onChange={(e) => updateNewsletter(nl.id, 'sentDate', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
              <select 
                value={nl.status}
                onChange={(e) => updateNewsletter(nl.id, 'status', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-200"
              >
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
                <option value="sent">Sent</option>
              </select>
            </div>
          </div>
          <button onClick={() => deleteNewsletter(nl.id)} className="mt-4 flex items-center gap-2 px-4 py-2 text-red-500">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      ))}
    </div>
  )
}

function AdminDashboard({ onLogout }) {
  const { content, updateContent } = useContent()
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'hero', label: 'Hero Section', icon: Edit },
    { id: 'services', label: 'Services', icon: FileText },
    { id: 'locations', label: 'Locations', icon: MapPin },
    { id: 'contact', label: 'Contact Info', icon: Phone },
    { id: 'blogposts', label: 'Blog Posts', icon: BookOpen },
    { id: 'newsletters', label: 'Newsletters', icon: Send },
  ]

  const handleSave = () => {
    alert('Content saved! Changes appear on the main website.')
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-brand text-white z-50 px-4 py-3 flex items-center justify-between">
        <button onClick={() => setSidebarOpen(true)} className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <span className="font-bold">WellCrest Admin</span>
        <button onClick={onLogout} className="p-2">
          <LogOut className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setSidebarOpen(false)}>
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-brand text-white" onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <span className="font-bold">Menu</span>
              <button onClick={() => setSidebarOpen(false)}><X className="w-5 h-5" /></button>
            </div>
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => { setActiveSection(item.id); setSidebarOpen(false) }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${activeSection === item.id ? 'bg-white/20' : ''}`}>
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.label}</span>
                </button>
              ))}
              <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3 mt-4 border-t border-white/10">
                <LogOut className="w-5 h-5" />
                <span className="text-sm">Logout</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex w-64 bg-brand text-white fixed h-full flex-col">
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white text-brand flex items-center justify-center font-bold text-sm">WC</div>
            <span className="font-bold">WellCrest</span>
          </Link>
          <p className="text-xs text-white/60 mt-1">Admin Panel</p>
        </div>
        <nav className="flex-1 p-4">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 ${activeSection === item.id ? 'bg-white/20' : ''}`}>
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-white/10">
          <button onClick={onLogout} className="w-full flex items-center gap-3 px-4 py-3">
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-20 lg:pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{navItems.find(i => i.id === activeSection)?.label}</h1>
              <p className="text-slate-500">Manage your website content</p>
            </div>
            {activeSection !== 'dashboard' && (
              <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-xl">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            )}
          </div>
          
          {/* Dashboard Stats */}
          {activeSection === 'dashboard' && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-brand">{content?.services?.length || 0}</div>
                <div className="text-sm text-slate-500">Services</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-brand">{content?.locations?.length || 0}</div>
                <div className="text-sm text-slate-500">Locations</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-brand">3</div>
                <div className="text-sm text-slate-500">States</div>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-3xl font-bold text-brand">{content?.blogPosts?.length || 0}</div>
                <div className="text-sm text-slate-500">Blog Posts</div>
              </div>
            </div>
          )}

          {/* Hero Editor */}
          {activeSection === 'hero' && (
            <HeroEditor content={content?.hero} onUpdate={(data) => updateContent('hero', data)} />
          )}

          {/* Services Editor */}
          {activeSection === 'services' && (
            <ServicesEditor content={content?.services || []} onUpdate={(data) => updateContent('services', data)} />
          )}

          {/* Locations Editor */}
          {activeSection === 'locations' && (
            <LocationsEditor content={content?.locations || []} onUpdate={(data) => updateContent('locations', data)} />
          )}

          {/* Contact Editor */}
          {activeSection === 'contact' && (
            <ContactEditor content={content?.contact} onUpdate={(data) => updateContent('contact', data)} />
          )}

          {/* Blog Posts Editor */}
          {activeSection === 'blogposts' && (
            <BlogPostsEditor content={content?.blogPosts || []} onUpdate={(data) => updateContent('blogPosts', data)} />
          )}

          {/* Newsletters Editor */}
          {activeSection === 'newsletters' && (
            <NewslettersEditor content={content?.newsletters || []} onUpdate={(data) => updateContent('newsletters', data)} />
          )}
        </div>
      </main>
    </div>
  )
}

export default function Admin() {
  const [showDashboard, setShowDashboard] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setShowDashboard(true)
    } else {
      setError('Invalid password')
    }
  }

  const onLogout = () => {
    setShowDashboard(false)
    setPassword('')
  }

  if (showDashboard) {
    return (
      <ContentProvider>
        <AdminDashboard onLogout={onLogout} />
      </ContentProvider>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <form onSubmit={e => { e.preventDefault(); onLogin() }} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-brand to-brand-teal mx-auto flex items-center justify-center mb-4">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-bold">Admin Login</h1>
          <p className="text-sm text-slate-500 mt-1">Enter your password to continue</p>
        </div>
        <input 
          type="password" 
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Enter admin password"
          className="w-full px-4 py-3 rounded-xl border border-slate-200 mb-4"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button type="submit" className="w-full py-3 bg-gradient-to-r from-brand to-brand-teal text-white rounded-xl font-medium">
          Login
        </button>
        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-slate-500 hover:text-brand">Back to Website</Link>
        </div>
      </form>
    </div>
  )
}