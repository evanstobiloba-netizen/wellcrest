import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ContentProvider } from './context/ContentContext'
import { CalendlyProvider } from './components/CalendlyModal'
import './styles/tailwind.css'
import Home from './pages/Home'
import About from './pages/About'
import ServicesPage from './pages/ServicesPage'
import ServiceDetail from './pages/ServiceDetail'
import ServiceDetailPage from './pages/ServiceDetailPage'
import LocationsPage from './pages/LocationsPage'
import LocationDetail from './pages/LocationDetail'
import Articles from './pages/Articles'
import BlogDetail from './pages/BlogDetail'
import Contact from './pages/Contact'
import Admin from './pages/Admin'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendlyProvider>
        <ContentProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/mental-health" element={<ServiceDetail type="mental" />} />
            <Route path="/services/mental-health/:serviceId" element={<ServiceDetailPage />} />
            
            {/* Locations */}
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/locations/:location" element={<LocationDetail />} />
            
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/detail" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Admin */}
            <Route path="/admin" element={<Admin />} />
            
            <Route path="*" element={<Home />} />
          </Routes>
        </ContentProvider>
      </CalendlyProvider>
    </BrowserRouter>
  </React.StrictMode>
)