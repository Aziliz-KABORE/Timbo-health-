import { useState, useEffect } from 'react'
import { User, Award, Calendar, Heart, TrendingUp, CheckCircle, Star, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Profile = ({ user }) => {
  const [userData, setUserData] = useState(user)
  const [streakCount, setStreakCount] = useState(0)

  useEffect(() => {
    // Load user data from localStorage
    const users = JSON.parse(localStorage.getItem('timboUsers') || '[]')
    const currentUser = users.find(u => u.id === user.id)
    if (currentUser) {
      setUserData(currentUser)
      setStreakCount(currentUser.streaks || 0)
    }
  }, [user.id])

  const allBadges = [
    {
      id: 'welcome',
      name: 'Bienvenue',
      description: 'Compte créé avec succès',
      icon: Heart,
      color: 'from-pink-400 to-rose-400',
      earned: true
    },
    {
      id: 'first_exam',
      name: 'Premier Auto-examen',
      description: 'Premier auto-examen enregistré',
      icon: CheckCircle,
      color: 'from-purple-400 to-pink-400',
      earned: userData.badges?.includes('first_exam') || false
    },
    {
      id: 'week_streak',
      name: 'Semaine Active',
      description: '7 jours consécutifs d\'activité',
      icon: TrendingUp,
      color: 'from-blue-400 to-purple-400',
      earned: userData.badges?.includes('week_streak') || false
    },
    {
      id: 'community_helper',
      name: 'Entraide',
      description: '5 messages postés dans la communauté',
      icon: Star,
      color: 'from-amber-400 to-orange-400',
      earned: userData.badges?.includes('community_helper') || false
    },
    {
      id: 'month_streak',
      name: 'Mois Complet',
      description: '30 jours consécutifs d\'activité',
      icon: Target,
      color: 'from-green-400 to-emerald-400',
      earned: userData.badges?.includes('month_streak') || false
    },
    {
      id: 'educator',
      name: 'Éducatrice',
      description: 'Toutes les vidéos éducatives visionnées',
      icon: Award,
      color: 'from-indigo-400 to-blue-400',
      earned: userData.badges?.includes('educator') || false
    }
  ]

  const handleLogExam = () => {
    const users = JSON.parse(localStorage.getItem('timboUsers') || '[]')
    const userIndex = users.findIndex(u => u.id === user.id)
    
    if (userIndex !== -1) {
      // Add first_exam badge if not already earned
      if (!users[userIndex].badges?.includes('first_exam')) {
        users[userIndex].badges = [...(users[userIndex].badges || []), 'first_exam']
      }
      
      // Increment streak
      users[userIndex].streaks = (users[userIndex].streaks || 0) + 1
      setStreakCount(users[userIndex].streaks)
      
      // Check for streak badges
      if (users[userIndex].streaks >= 7 && !users[userIndex].badges?.includes('week_streak')) {
        users[userIndex].badges.push('week_streak')
      }
      if (users[userIndex].streaks >= 30 && !users[userIndex].badges?.includes('month_streak')) {
        users[userIndex].badges.push('month_streak')
      }
      
      localStorage.setItem('timboUsers', JSON.stringify(users))
      setUserData(users[userIndex])
      
      alert('Auto-examen enregistré ! Continuez comme ça ! 🎉')
    }
  }

  const earnedBadges = allBadges.filter(b => b.earned)
  const lockedBadges = allBadges.filter(b => !b.earned)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <User className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-2">{userData.name}</h1>
          <p className="text-muted-foreground">{userData.email}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="timbo-card p-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-3">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{streakCount}</div>
            <div className="text-sm text-muted-foreground">Jours de suivi</div>
          </div>
          
          <div className="timbo-card p-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mb-3">
              <Award className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">{earnedBadges.length}</div>
            <div className="text-sm text-muted-foreground">Badges obtenus</div>
          </div>
          
          <div className="timbo-card p-6 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full mb-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-primary mb-1">
              {userData.age || 'N/A'}
            </div>
            <div className="text-sm text-muted-foreground">Âge</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12 timbo-card p-8 animate-in fade-in slide-in-from-bottom duration-500 delay-100">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Actions Rapides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={handleLogExam}
              className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 py-6 text-lg"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              Enregistrer un auto-examen
            </Button>
            <a href="/prevention">
              <Button
                variant="outline"
                className="w-full rounded-full py-6 text-lg border-2"
              >
                <Heart className="mr-2 h-5 w-5" />
                Guide de prévention
              </Button>
            </a>
          </div>
          {userData.familyHistory && (
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Vous avez indiqué avoir des antécédents familiaux. Pensez à en parler à votre médecin pour un suivi adapté.
              </p>
            </div>
          )}
        </div>

        {/* Earned Badges */}
        <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Badges Obtenus ({earnedBadges.length})
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {earnedBadges.map((badge, index) => {
              const Icon = badge.icon
              return (
                <div
                  key={badge.id}
                  className="timbo-card p-6 animate-in fade-in zoom-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className={`inline-flex items-center justify-center p-3 bg-gradient-to-br ${badge.color} rounded-full mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">{badge.name}</h3>
                  <p className="text-sm text-muted-foreground">{badge.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Locked Badges */}
        {lockedBadges.length > 0 && (
          <div className="mb-12 animate-in fade-in slide-in-from-bottom duration-500 delay-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-muted-foreground" />
              Badges à Débloquer ({lockedBadges.length})
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lockedBadges.map((badge, index) => {
                const Icon = badge.icon
                return (
                  <div
                    key={badge.id}
                    className="timbo-card p-6 opacity-60 animate-in fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="inline-flex items-center justify-center p-3 bg-secondary rounded-full mb-3">
                      <Icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <h3 className="font-semibold mb-1 flex items-center gap-2">
                      {badge.name}
                      <span className="text-xs px-2 py-0.5 bg-secondary rounded-full">Verrouillé</span>
                    </h3>
                    <p className="text-sm text-muted-foreground">{badge.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Motivational Section */}
        <div className="timbo-card p-8 timbo-gradient text-center animate-in fade-in slide-in-from-bottom duration-500 delay-400">
          <h3 className="text-2xl font-bold mb-4">Continuez sur cette lancée ! 🎉</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Chaque geste compte dans votre parcours de prévention. Vous faites déjà beaucoup pour votre santé, 
            et nous sommes fiers de vous accompagner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/community">
              <Button className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                Rejoindre la communauté
              </Button>
            </a>
            <a href="/videos">
              <Button variant="outline" className="rounded-full border-2">
                Voir les vidéos éducatives
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

