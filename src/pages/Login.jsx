import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogIn, Mail, Lock, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const Login = ({ onLogin }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = {}
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    }
    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const existingUsers = JSON.parse(localStorage.getItem('timboUsers') || '[]')
      const user = existingUsers.find(
        u => u.email === formData.email && u.password === formData.password
      )

      if (user) {
        const { password, ...userWithoutPassword } = user
        onLogin(userWithoutPassword)
        setIsSubmitting(false)
        navigate('/profile')
      } else {
        setErrors({ general: 'Email ou mot de passe incorrect' })
        setIsSubmitting(false)
      }
    }, 1000)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <LogIn className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Se connecter</h1>
          <p className="text-muted-foreground">
            Accédez à votre espace personnel TIMBO
          </p>
        </div>

        <div className="timbo-card p-8 animate-in fade-in slide-in-from-bottom duration-500">
          {errors.general && (
            <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
              {errors.general}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={`timbo-input ${errors.email ? 'border-destructive' : ''}`}
                placeholder="votre@email.com"
              />
              {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Mot de passe
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`timbo-input ${errors.password ? 'border-destructive' : ''}`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-sm text-destructive">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Connexion en cours...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-5 w-5" />
                  Se connecter
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Pas encore de compte ?{' '}
            <a href="/register" className="text-primary hover:underline font-medium">
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

