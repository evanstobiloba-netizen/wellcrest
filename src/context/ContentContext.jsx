import { createContext, useContext, useState, useEffect } from 'react'
import { defaultContent } from '../supabase'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

// Load from localStorage immediately for fast initial render
const getInitialContent = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) return JSON.parse(saved)
  } catch (e) {
    console.warn('localStorage parse failed:', e)
  }
  return defaultContent
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(getInitialContent)
  const [loading, setLoading] = useState(false)

  const updateContent = (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
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