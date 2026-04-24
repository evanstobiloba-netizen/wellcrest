import { createContext, useContext, useState, useEffect } from 'react'
import { supabase, defaultContent, fetchContent, saveContent, subscribeToContent } from '../supabase'

const ContentContext = createContext()

export function ContentProvider({ children }) {
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)

  // Fetch initial content from Supabase
  useEffect(() => {
    async function load() {
      try {
        const data = await fetchContent()
        setContent(data)
        localStorage.setItem('wellcrest-content', JSON.stringify(data))
      } catch (e) {
        console.error('Load error:', e)
        // Fall back to localStorage
        const saved = localStorage.getItem('wellcrest-content')
        if (saved) {
          setContent(JSON.parse(saved))
        } else {
          setContent(defaultContent)
        }
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

  // Don't render until content is loaded
  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-slate-500">Loading...</div>
      </div>
    )
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