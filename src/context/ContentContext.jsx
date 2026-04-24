import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, defaultContent, fetchContent, saveContent, subscribeToContent } from '../supabase'

const ContentContext = createContext()

// Load from localStorage immediately for fast initial render
const getInitialContent = () => {
  try {
    const saved = localStorage.getItem('wellcrest-content')
    if (saved) return JSON.parse(saved)
  } catch (e) {
    console.warn('localStorage parse failed:', e)
  }
  return defaultContent
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(getInitialContent)
  const [loading, setLoading] = useState(true)

  // Fetch fresh content from Supabase in background
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchContent()
        setContent(data)
        localStorage.setItem('wellcrest-content', JSON.stringify(data))
      } catch (e) {
        console.warn('Load error, using cached:', e)
      }
      setLoading(false)
    }
    load()
  }, [])

  // Subscribe to real-time changes
  useEffect(() => {
    const channel = subscribeToContent((data) => {
      if (data) {
        setContent(data)
        localStorage.setItem('wellcrest-content', JSON.stringify(data))
      }
    })
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const updateContent = async (section, data) => {
    if (!content) return
    
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem('wellcrest-content', JSON.stringify(newContent))
    
    // Save to Supabase
    try {
      await saveContent(newContent)
    } catch (e) {
      console.error('Save error:', e)
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