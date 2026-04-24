import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

const getInitialContent = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const parsed = JSON.parse(saved)
      if (parsed && parsed.hero) return parsed
    }
  } catch (e) {
    console.warn('localStorage parse failed:', e)
  }
  return null
}

export function ContentProvider({ children }) {
  const [content, setContent] = useState(getInitialContent)
  const [loading, setLoading] = useState(!content)

  const updateContent = (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
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