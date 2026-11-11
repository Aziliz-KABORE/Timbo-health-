import { Link } from 'react-router-dom'
import { Heart, BookOpen, Users, Video, Award, Shield, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Home = ({ user }) => {
  const features = [
    {
      icon: BookOpen,
      title: 'Prévention & Éducation',
      description: 'Apprenez les gestes d\'auto-examen et les bonnes pratiques de prévention validées par des experts.',
      link: '/prevention',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Users,
      title: 'Communauté Solidaire',
      description: 'Échangez avec d\'autres femmes, posez vos questions et partagez vos expériences en toute confidentialité.',
      link: '/community',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Video,
      title: 'Vidéos Pédagogiques',
      description: 'Accédez à une bibliothèque de vidéos éducatives pour mieux comprendre et prévenir le cancer du sein.',
      link: '/videos',
      color: 'from-blue-400 to-purple-400'
    },
    {
      icon: Award,
      title: 'Gamification',
      description: 'Gagnez des badges et suivez vos progrès pour rester motivée dans votre routine de prévention.',
      link: '/profile',
      color: 'from-amber-400 to-orange-400'
    }
  ]

  const stats = [
    { value: '1 sur 8', label: 'Femmes touchées' },
    { value: '90%', label: 'Taux de guérison si détecté tôt' },
    { value: '100%', label: 'Gratuit et confidentiel' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="timbo-gradient py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-full mb-6 shadow-lg">
            <Heart className="h-12 w-12 text-primary fill-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in slide-in-from-bottom duration-700">
            Bienvenue sur TIMBO
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto animate-in slide-in-from-bottom duration-700 delay-100">
            Votre compagnon de prévention du cancer du sein. Ensemble, prenons soin de notre santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in slide-in-from-bottom duration-700 delay-200">
            {user ? (
              <Link to="/prevention">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Commencer la prévention
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/register">
                  <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    Créer un compte
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/prevention">
                  <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 border-2 hover:bg-white/50">
                    En savoir plus
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-in fade-in duration-700" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos fonctionnalités</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              TIMBO vous accompagne à chaque étape de votre parcours de prévention avec des outils adaptés et une communauté bienveillante.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  to={feature.link}
                  className="timbo-card p-6 group hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex p-3 rounded-full bg-gradient-to-br ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    Découvrir
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 timbo-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/80 backdrop-blur-sm rounded-full mb-6">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Votre santé, notre priorité</h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            TIMBO respecte votre vie privée et sécurise vos données conformément au RGPD. 
            Toutes les informations sont confidentielles et vous gardez le contrôle total.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-lg">
              Trouver un hôpital spécialisé
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

