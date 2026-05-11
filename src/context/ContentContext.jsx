import { createContext, useContext, useState, useEffect } from 'react'
import { defaultContent, fetchContent, saveContent as saveToSupabase } from '../supabase'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

function migrateContent(parsed) {
  let updated = false
  if (!parsed._version || parsed._version < 4) {
    parsed._version = 4
    updated = true
  }
  const articleImages = [
    'https://images.unsplash.com/photo-1493982305306-a5a2df364595?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1559757148-5c350d0d1b37?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
  ]
  if (parsed.blogPosts) {
    parsed.blogPosts.forEach((post, i) => {
      if (!post.image || post.image === '') {
        post.image = articleImages[i] || articleImages[0]
        updated = true
      }
      if (!post.readTime) {
        post.readTime = '3 min read'
        updated = true
      }
    })
  }
  return { parsed, updated }
}

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (e) {
    console.warn('localStorage parse failed:', e)
  }
  return null
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  // Load content: Supabase first, fallback to localStorage, then default
  useEffect(() => {
    let mounted = true
    async function load() {
      try {
        const data = await fetchContent()
        if (mounted) {
          const { parsed } = migrateContent(data || {})
          setContent(parsed)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
        }
      } catch (e) {
        console.warn('Supabase fetch failed:', e)
        // Fallback to localStorage
        const cached = loadFromStorage()
        if (mounted) {
          setContent(cached ? migrateContent(cached).parsed : defaultContent)
        }
      }
      if (mounted) setLoading(false)
    }
    load()
    return () => { mounted = false }
  }, [])

  // Subscribe to real-time changes
  useEffect(() => {
    let channel
    async function subscribe() {
      try {
        const { subscribeToContent, supabase } = await import('../supabase')
        channel = subscribeToContent((data) => {
          if (data) {
            const { parsed } = migrateContent(data)
            setContent(parsed)
            localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
          }
        })
      } catch (e) {}
    }
    subscribe()
    return () => {
      if (channel) {
        import('../supabase').then(({ supabase }) => supabase.removeChannel(channel))
      }
    }
  }, [])

  const updateContent = async (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
    try {
      await saveToSupabase(newContent)
    } catch (e) {
      console.warn('Supabase save failed:', e)
    }
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, loading }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return useContext(ContentContext)
}