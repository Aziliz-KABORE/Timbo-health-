import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Heart, User, LogOut, Home, BookOpen, Info, Phone, Video, Image, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Navigation = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Accueil', icon: Home },
    { path: '/prevention', label: 'Prévention', icon: BookOpen },
    { path: '/about', label: 'À propos', icon: Info },
    { path: '/contact', label: 'Contact', icon: Phone },
    { path: '/videos', label: 'Vidéos', icon: Video },
    { path: '/gallery', label: 'Galerie', icon: Image },
    { path: '/community', label: 'Communauté', icon: Users },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-primary to-accent p-2 rounded-full group-hover:scale-110 transition-transform duration-300">
              <Heart className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              TIMBO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-foreground hover:bg-secondary hover:text-secondary-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" className="rounded-full">
                    <User className="h-4 w-4 mr-2" />
                    {user.name}
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={onLogout}
                  title="Se déconnecter"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" className="rounded-full">
                    Se connecter
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    S'inscrire
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-full"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-in slide-in-from-top duration-300">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-secondary'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
              <div className="border-t border-border my-2 pt-2">
                {user ? (
                  <>
                    <Link
                      to="/profile"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      <User className="h-4 w-4" />
                      <span>{user.name}</span>
                    </Link>
                    <button
                      onClick={() => {
                        onLogout()
                        setIsOpen(false)
                      }}
                      className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Se déconnecter</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-secondary"
                    >
                      Se connecter
                    </Link>
                    <Link
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="block px-3 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-accent text-white mt-1"
                    >
                      S'inscrire
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

