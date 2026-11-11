import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserPlus, Mail, Lock, User, Calendar, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

const Register = ({ onRegister }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
    familyHistory: false,
    consent: false
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide'
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères'
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas'
    }

    if (!formData.age) {
      newErrors.age = 'L\'âge est requis'
    } else if (formData.age < 18 || formData.age > 120) {
      newErrors.age = 'L\'âge doit être entre 18 et 120 ans'
    }

    if (!formData.consent) {
      newErrors.consent = 'Vous devez accepter les conditions d\'utilisation'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('timboUsers') || '[]')
      
      // Check if email already exists
      if (existingUsers.some(u => u.email === formData.email)) {
        setErrors({ email: 'Cet email est déjà utilisé' })
        setIsSubmitting(false)
        return
      }

      // Create new user
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        age: formData.age,
        familyHistory: formData.familyHistory,
        createdAt: new Date().toISOString(),
        badges: ['welcome'],
        streaks: 0
      }

      // Save to localStorage
      existingUsers.push({ ...newUser, password: formData.password })
      localStorage.setItem('timboUsers', JSON.stringify(existingUsers))

      // Call onRegister callback
      onRegister(newUser)
      
      setIsSubmitting(false)
      navigate('/profile')
    }, 1000)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Créer un compte</h1>
          <p className="text-muted-foreground">
            Rejoignez TIMBO et commencez votre parcours de prévention
          </p>
        </div>

        <div className="timbo-card p-8 animate-in fade-in slide-in-from-bottom duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nom complet
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className={`timbo-input ${errors.name ? 'border-destructive' : ''}`}
                placeholder="Votre nom"
              />
              {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
            </div>

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

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Confirmer le mot de passe
              </Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`timbo-input ${errors.confirmPassword ? 'border-destructive' : ''}`}
                placeholder="••••••••"
              />
              {errors.confirmPassword && <p className="text-sm text-destructive">{errors.confirmPassword}</p>}
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Âge
              </Label>
              <Input
                id="age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                className={`timbo-input ${errors.age ? 'border-destructive' : ''}`}
                placeholder="Votre âge"
                min="18"
                max="120"
              />
              {errors.age && <p className="text-sm text-destructive">{errors.age}</p>}
            </div>

            {/* Family History */}
            <div className="flex items-center space-x-2">
              <Checkbox
                id="familyHistory"
                name="familyHistory"
                checked={formData.familyHistory}
                onCheckedChange={(checked) => 
                  setFormData(prev => ({ ...prev, familyHistory: checked }))
                }
              />
              <Label htmlFor="familyHistory" className="text-sm font-normal cursor-pointer">
                J'ai des antécédents familiaux de cancer du sein
              </Label>
            </div>

            {/* Consent */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, consent: checked }))
                  }
                  className={errors.consent ? 'border-destructive' : ''}
                />
                <Label htmlFor="consent" className="text-sm font-normal cursor-pointer leading-relaxed">
                  J'accepte les conditions d'utilisation et la politique de confidentialité (RGPD). 
                  Mes données seront traitées de manière sécurisée et confidentielle.
                </Label>
              </div>
              {errors.consent && <p className="text-sm text-destructive">{errors.consent}</p>}
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
                  Création en cours...
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-5 w-5" />
                  Créer mon compte
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Vous avez déjà un compte ?{' '}
            <a href="/login" className="text-primary hover:underline font-medium">
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

