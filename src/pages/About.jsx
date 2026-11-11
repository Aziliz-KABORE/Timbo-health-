import { Heart, Target, Users, Shield, Award, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Bienveillance',
      description: 'Nous créons un espace sûr et accueillant où chaque femme peut trouver du soutien et des informations fiables.'
    },
    {
      icon: Shield,
      title: 'Confidentialité',
      description: 'Vos données sont protégées conformément au RGPD. Votre vie privée est notre priorité absolue.'
    },
    {
      icon: Lightbulb,
      title: 'Éducation',
      description: 'Nous fournissons des informations validées par des experts pour vous aider à prendre soin de votre santé.'
    },
    {
      icon: Users,
      title: 'Communauté',
      description: 'Ensemble, nous sommes plus fortes. Partagez, échangez et soutenez-vous mutuellement.'
    }
  ]

  const stats = [
    { number: '1/8', label: 'Femmes touchées par le cancer du sein au cours de leur vie' },
    { number: '90%', label: 'Taux de guérison si détecté à un stade précoce' },
    { number: '99%', label: 'Taux de survie à 5 ans pour les cancers détectés tôt' }
  ]

  const mission = [
    {
      icon: Target,
      title: 'Notre Mission',
      content: 'TIMBO a pour mission de réduire les retards de dépistage du cancer du sein en fournissant des outils éducatifs accessibles, en encourageant l\'auto-examen régulier et en créant une communauté solidaire. Nous croyons que l\'information et la prévention sont les meilleures armes contre le cancer du sein.'
    },
    {
      icon: Award,
      title: 'Notre Vision',
      content: 'Nous imaginons un monde où chaque femme a accès aux connaissances et aux ressources nécessaires pour prendre soin de sa santé mammaire. Un monde où le cancer du sein est détecté tôt, traité efficacement et où aucune femme ne se sent seule face à cette maladie.'
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Heart className="h-8 w-8 text-white fill-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">À propos de TIMBO</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            TIMBO est votre compagnon de prévention du cancer du sein, créé pour vous accompagner 
            dans votre parcours de santé avec bienveillance et expertise.
          </p>
        </div>

        {/* Stats */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Pourquoi la prévention est essentielle</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-primary mb-3">{stat.number}</div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mission.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="timbo-card p-8">
                  <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-secondary/30 rounded-lg border border-border">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-300">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-6">Ce que nous offrons</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Informations validées par des experts</h3>
                  <p className="text-sm text-muted-foreground">
                    Tout notre contenu éducatif est vérifié et approuvé par des professionnels de santé spécialisés en oncologie mammaire.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Outils de prévention interactifs</h3>
                  <p className="text-sm text-muted-foreground">
                    Guides d'auto-examen, rappels personnalisés et système de gamification pour vous encourager dans votre routine de prévention.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Réseau d'hôpitaux spécialisés</h3>
                  <p className="text-sm text-muted-foreground">
                    Accédez facilement à une liste complète d'établissements de santé spécialisés dans le dépistage et le traitement du cancer du sein.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Communauté bienveillante</h3>
                  <p className="text-sm text-muted-foreground">
                    Échangez avec d'autres femmes, posez vos questions et trouvez du soutien dans un espace modéré et respectueux.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="font-semibold mb-1">Ressources multimédias</h3>
                  <p className="text-sm text-muted-foreground">
                    Vidéos éducatives, infographies et galerie photo pour faciliter la compréhension et l'apprentissage.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center timbo-card p-8 timbo-gradient animate-in fade-in slide-in-from-bottom duration-500 delay-400">
          <h3 className="text-2xl font-bold mb-4">Rejoignez-nous dans cette mission</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ensemble, nous pouvons faire la différence. Créez votre compte dès aujourd'hui et commencez 
            votre parcours de prévention avec TIMBO.
          </p>
          <a href="/register" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity shadow-lg">
            <Heart className="mr-2 h-5 w-5" />
            Créer mon compte
          </a>
        </div>
      </div>
    </div>
  )
}

export default About

