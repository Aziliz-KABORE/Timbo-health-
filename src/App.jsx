import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

// Import pages
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Prevention from './pages/Prevention'
import About from './pages/About'
import Contact from './pages/Contact'
import Videos from './pages/Videos'
import Gallery from './pages/Gallery'
import Community from './pages/Community'
import Profile from './pages/Profile'

// Import layout components
import Navigation from './components/Navigation'

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const storedUser = localStorage.getItem('timboUser')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const handleLogin = (userData) => {
    setUser(userData)
    localStorage.setItem('timboUser', JSON.stringify(userData))
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.removeItem('timboUser')
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/profile" /> : <Register onRegister={handleLogin} />} 
          />
          <Route 
            path="/login" 
            element={user ? <Navigate to="/profile" /> : <Login onLogin={handleLogin} />} 
          />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/community" element={<Community user={user} />} />
          <Route 
            path="/profile" 
            element={user ? <Profile user={user} /> : <Navigate to="/login" />} 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App

