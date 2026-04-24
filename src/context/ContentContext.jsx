import { createContext, useContext, useState } from 'react'
import { defaultContent } from '../supabase'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        return parsed
      } catch (e) {
        console.warn('localStorage parse failed:', e)
      }
    }
    return defaultContent
  })

  const updateContent = (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
  }

  return (
    <ContentContext.Provider value={{ content, updateContent, loading: false }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContent() {
  return useContext(ContentContext)
}