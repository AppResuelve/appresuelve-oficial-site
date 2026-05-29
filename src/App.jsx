import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import Productos from './pages/Productos'
import ProductoDetalle from './pages/ProductoDetalle'
import Contacto from './pages/Contacto'
import Servicios from './pages/Servicios'
import './index.css'

function ScrollHandler() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const offset = 120
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        } else {
          window.scrollTo(0, 0)
        }
      }, 200)
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname, location.hash, location.search])

  return null
}

function App() {
  return (
    <Router>
      <ScrollHandler />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/productos/:id" element={<ProductoDetalle />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  )
}

export default App
