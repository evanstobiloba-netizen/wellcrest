import React, { createContext, useContext, useState, useEffect } from 'react'

const defaultContent = {
  _version: 2,
  hero: {
    badge: 'YOUR HEALTH, OUR PRIORITY',
    title: 'Mental Health & Primary Care.',
    subtitle: 'Compassionate, evidence-based care delivered with convenience and affordability. In-person in Georgia. Telehealth across Georgia, Arizona, and Maryland.',
    ctaPrimary: 'Book Appointment',
    ctaSecondary: 'Explore Services',
  },
  services: [
    { id: 1, title: 'Mental Health Services', shortDesc: 'Personalized therapy & psychiatric care', description: 'Comprehensive mental health services including therapy, psychiatric evaluations, and medication management.', icon: 'Brain' },
    { id: 2, title: 'Primary Care', shortDesc: 'Comprehensive medical services', description: 'Full-spectrum primary care for all ages, including preventive care and chronic disease management.', icon: 'Stethoscope' },
    { id: 3, title: 'Telehealth', shortDesc: 'Virtual visits in GA, AZ, MD', description: 'Convenient virtual appointments accessible from anywhere in our serving states.', icon: 'Video' },
  ],
  locations: [
    { id: 'georgia', name: 'Georgia', tagline: 'In-Person Care', address: '123 Healthcare Dr, Atlanta, GA 30301', phone: '404-555-0100', email: 'georgia@wellcrest.com' },
    { id: 'arizona', name: 'Arizona', tagline: 'Telehealth Only', address: 'Virtual Care', phone: '480-555-0200', email: 'arizona@wellcrest.com' },
    { id: 'maryland', name: 'Maryland', tagline: 'Telehealth Only', address: 'Virtual Care', phone: '301-555-0300', email: 'maryland@wellcrest.com' },
  ],
  contact: {
    email: 'contact@wellcrest.com',
    phone: '404-555-0100',
    fax: '404-555-0101',
    address: '123 Healthcare Dr, Atlanta, GA 30301',
    hours: 'Mon-Fri: 8am-6pm, Sat: 9am-1pm',
  },
  blogPosts: [
    { id: 1, title: 'Understanding Anxiety: Signs and Coping Strategies', content: 'Learn about the common signs of anxiety and effective strategies to manage it. Anxiety is a normal part of life, but when it becomes overwhelming or persistent, it may indicate an anxiety disorder. Key signs include excessive worry, restlessness, difficulty concentrating, sleep disturbances, and physical symptoms like rapid heartbeat. Management strategies include deep breathing, mindfulness, regular exercise, and seeking professional help when needed.', date: '2025-04-15', category: 'Mental Health', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d1b37?w=800&h=400&fit=crop' },
    { id: 2, title: 'The Benefits of Telehealth for Mental Health', content: 'Discover how virtual therapy can provide convenient and effective care. Telehealth has revolutionized mental health care delivery, making it more accessible than ever. Benefits include convenience, privacy, flexibility in scheduling, and access to specialists regardless of location. Many patients find telehealth just as effective as in-person sessions.', date: '2025-04-10', category: 'Telehealth', image: 'https://images.unsplash.com/photo-1576091160399-1128b0bbd1be?w=800&h=400&fit=crop' },
    { id: 3, title: 'Managing Stress in Daily Life', content: 'Practical tips for reducing stress and improving your overall well-being. Stress management is essential for mental health. Techniques include time management, regular exercise, adequate sleep, healthy eating, and practicing gratitude. Remember to take breaks and prioritize self-care.', date: '2025-04-05', category: 'Wellness', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop' },
  ],
  newsletters: [
    { id: 1, title: 'April 2025 Newsletter', subject: 'Mental Health Awareness Month', sentDate: '2025-04-01', recipients: 150, status: 'sent' },
    { id: 2, title: 'March 2025 Newsletter', subject: 'Telehealth Updates', sentDate: '2025-03-01', recipients: 145, status: 'sent' },
  ],
}

const ContentContext = createContext()

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    let saved = localStorage.getItem('wellcrest-content')
    if (saved) {
      const parsed = JSON.parse(saved)
      // Force fresh data if old version or missing images
      if (!parsed._version || parsed._version < 2) {
        localStorage.removeItem('wellcrest-content')
        return defaultContent
      }
      return parsed
    }
    return defaultContent
  })

  useEffect(() => {
    localStorage.setItem('wellcrest-content', JSON.stringify(content))
  }, [content])

  const updateContent = (section, data) => {
    setContent(prev => ({ ...prev, [section]: data }))
  }

  return (
    <ContentContext.Provider value={{ content, updateContent }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return useContext(ContentContext)
}