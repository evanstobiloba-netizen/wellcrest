import { createContext, useContext, useState } from 'react'

const STORAGE_KEY = 'wellcrest-content'

const ContentContext = createContext()

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        return null
      }
    }
    return null
  })

  const updateContent = (section, data) => {
    const newContent = { ...content, [section]: data }
    setContent(newContent)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newContent))
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">WellCrest</h1>
          <p className="text-slate-500 mb-4">No content found.</p>
          <p className="text-sm text-slate-400">Please use the admin panel to add content.</p>
        </div>
      </div>
    )
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