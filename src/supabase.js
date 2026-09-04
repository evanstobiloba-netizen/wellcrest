import { createClient } from '@supabase/supabase-js'
import blogPostsData from './data/blogPosts.json'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://ssdbhxpxoraeuzeufufh.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzZGJoeHB4b3JhZXV6ZXVmdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcwMzExNjcsImV4cCI6MjA5MjYwNzE2N30.ZEiqT8MZXTuNUmMdE3NHk1SM7CKgSdNCEztY9zMr8bY'

export const supabase = createClient(supabaseUrl, supabaseKey)

export const defaultContent = {
  _version: 7,
  hero: {
    badge: 'YOUR HEALTH, OUR PRIORITY',
    title: 'Mental & Sexual Health.',
    subtitle: 'Compassionate, evidence-based care delivered with convenience and affordability. In-person in Georgia. Telehealth across Georgia, Arizona, and Maryland.',
    ctaPrimary: 'Book Appointment',
    ctaSecondary: 'About Us',
  },
  services: [
    { id: 1, title: 'Mental Health Services', shortDesc: 'Personalized therapy & psychiatric care', description: 'Comprehensive mental health services including therapy, psychiatric evaluations, and holistic therapy support.', icon: 'Brain' },
    { id: 2, title: 'Telehealth', shortDesc: 'Virtual visits in GA, AZ, MD', description: 'Convenient virtual appointments accessible from anywhere in our serving states.', icon: 'Video' },
    { id: 3, title: 'Sexual Health Services', shortDesc: 'Assessment, therapy & education', description: 'Confidential sexual health care including assessment, individual therapy, education, and coordination of care.', icon: 'Heart' },
  ],
  locations: [
    { id: 'georgia', name: 'Georgia', tagline: 'In-Person Care', address: '7910 Mall Ring Road Suite 200, Stonecrest, GA 30038', phone: '470-481-2034', email: 'info@wellcresttherapy.com' },
    { id: 'arizona', name: 'Arizona', tagline: 'Telehealth Only', address: 'Virtual Care - Serving all of Arizona', phone: '470-481-2034', email: 'info@wellcresttherapy.com' },
    { id: 'maryland', name: 'Maryland', tagline: 'Telehealth Only', address: 'Virtual Care - Serving all of Maryland', phone: '470-481-2034', email: 'info@wellcresttherapy.com' },
  ],
  contact: {
    email: 'info@wellcresttherapy.com',
    phone: '470-481-2034',
    fax: '470-481-2577',
    address: '7910 Mall Ring Road Suite 200, Stonecrest, GA 30038',
    hours: 'Mon-Fri: 8am-5pm',
  },
  blogPosts: blogPostsData,
  newsletters: [
    { id: 1, title: 'April 2025 Newsletter', subject: 'Mental Health Awareness Month', sentDate: '2025-04-01', recipients: 150, status: 'sent' },
  ],
}

export const CURRENT_VERSION = 7

export async function fetchContent() {
  const cached = localStorage.getItem('wellcrest-content')
  const cachedVersion = localStorage.getItem('wellcrest-content-version')
  const cachedData = cached && cachedVersion ? JSON.parse(cached) : null
  
  // Bump cache if version changed
  if (cachedData && Number(cachedVersion) !== CURRENT_VERSION) {
    localStorage.removeItem('wellcrest-content')
    localStorage.removeItem('wellcrest-content-version')
  }
  
  try {
    const { data, error } = await supabase
      .from('content')
      .select('data')
      .eq('id', 'main')
      .maybeSingle()
    
    if (error) {
      console.warn('Supabase fetch error:', error.message)
      return cachedData || defaultContent
    }
    
    if (data && data.data) {
      localStorage.setItem('wellcrest-content', JSON.stringify(data.data))
      localStorage.setItem('wellcrest-content-version', String(CURRENT_VERSION))
      return data.data
    }
    
    return cachedData || defaultContent
  } catch (e) {
    console.warn('Fetch failed, using fallback:', e)
    return cachedData || defaultContent
  }
}

export async function saveContent(data) {
  const newData = { ...data, _version: CURRENT_VERSION }
  const { error } = await supabase
    .from('content')
    .upsert({ id: 'main', data: newData }, { onConflict: 'id' })
  
  if (error) {
    console.error('Save error:', error)
    throw new Error(error.message)
  }
  return true
}

export function subscribeToContent(callback) {
  const channel = supabase
    .channel('content-changes')
    .on('postgres_changes', { 
      event: '*', 
      schema: 'public', 
      table: 'content',
      filter: 'id=eq.main'
    }, (payload) => {
      callback(payload.new.data)
    })
    .subscribe()
  
  return channel
}
