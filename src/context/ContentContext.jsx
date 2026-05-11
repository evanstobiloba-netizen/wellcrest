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
        let updated = false
        // Migrate version if needed
        if (!parsed._version || parsed._version < 4) {
          parsed._version = 4
          updated = true
        }
        // Ensure blog posts have images and readTime
        const articleImages = [
          'https://images.unsplash.com/photo-1493982305306-a5a2df364595?w=1200&h=600&fit=crop',
          'https://images.unsplash.com/photo-1559757148-5c350d0d1b37?w=1200&h=600&fit=crop',
          'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop'
        ]
        if (parsed.blogPosts && parsed.blogPosts.length > 0) {
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
        if (updated) {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed))
        }
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