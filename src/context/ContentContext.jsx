import { createContext, useContext, useState, useEffect } from 'react'
import { defaultContent, fetchContent, subscribeToContent, saveContent as saveToSupabase } from '../supabase'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : null
  } catch (e) {
    return null
  }
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => loadFromStorage() || defaultContent)
  const [loading, setLoading] = useState(false)

  // Background sync from Supabase (silent)
  useEffect(() => {
    let mounted = true
    fetchContent().then(data => {
      if (mounted && data) {
        setContent(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      }
    }).catch(() => {})
    return () => { mounted = false }
  }, [])

  // Subscribe to real-time changes from Supabase
  useEffect(() => {
    const channel = subscribeToContent((data) => {
      if (data) {
        setContent(data)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      }
    })
    return () => {
      if (channel) channel.unsubscribe()
    }
  }, [])

  const updateContent = async (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
    try {
      await saveToSupabase(newContent)
    } catch (e) {
      console.warn('Supabase save failed:', e.message)
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