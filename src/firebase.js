import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }

// Default content for first-time setup
export const defaultContent = {
  _version: 3,
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
  blogPosts: [
    { id: 1, title: 'Understanding Anxiety: Signs and Coping Strategies', content: 'Learn about the common signs of anxiety and effective strategies to manage it.', date: '2025-04-15', category: 'Mental Health', image: 'https://images.unsplash.com/photo-1559757148-5c350d0d1b37?w=800&h=400&fit=crop' },
    { id: 2, title: 'The Benefits of Telehealth for Mental Health', content: 'Discover how virtual therapy can provide convenient and effective care.', date: '2025-04-10', category: 'Telehealth', image: 'https://images.unsplash.com/photo-1576091160399-1128b0bbd1be?w=800&h=400&fit=crop' },
    { id: 3, title: 'Managing Stress in Daily Life', content: 'Practical tips for reducing stress and improving your well-being.', date: '2025-04-05', category: 'Wellness', image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop' },
  ],
  newsletters: [
    { id: 1, title: 'April 2025 Newsletter', subject: 'Mental Health Awareness Month', sentDate: '2025-04-01', recipients: 150, status: 'sent' },
  ],
}

export async function fetchContent() {
  const docRef = doc(db, 'website', 'content')
  const snap = await getDoc(docRef)
  if (snap.exists()) {
    return snap.data()
  }
  await setDoc(docRef, defaultContent)
  return defaultContent
}

export async function saveContent(data) {
  const docRef = doc(db, 'website', 'content')
  await setDoc(docRef, data, { merge: true })
}

export function subscribeToContent(callback) {
  const docRef = doc(db, 'website', 'content')
  return onSnapshot(docRef, (snap) => {
    if (snap.exists()) {
      callback(snap.data())
    }
  })
}