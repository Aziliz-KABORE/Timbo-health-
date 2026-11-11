import { BookOpen, CheckCircle, Calendar, AlertCircle, Heart, Hand } from 'lucide-react'

const Prevention = () => {
  const autoExamSteps = [
    {
      title: 'Devant le miroir',
      description: 'Examinez vos seins devant un miroir, bras le long du corps, puis levés au-dessus de la tête. Recherchez toute modification de forme, de taille ou de contour.'
    },
    {
      title: 'Palpation debout',
      description: 'Levez votre bras droit et utilisez votre main gauche pour palper votre sein droit avec des mouvements circulaires. Répétez de l\'autre côté.'
    },
    {
      title: 'Palpation allongée',
      description: 'Allongez-vous et placez un oreiller sous votre épaule droite. Palpez votre sein droit avec votre main gauche en mouvements circulaires. Répétez de l\'autre côté.'
    },
    {
      title: 'Vérification du mamelon',
      description: 'Pressez doucement chaque mamelon pour vérifier qu\'il n\'y a pas d\'écoulement. Vérifiez également les aisselles.'
    }
  ]

  const warningSignsData = [
    'Une bosse ou un épaississement dans le sein ou l\'aisselle',
    'Un changement de taille ou de forme du sein',
    'Une modification de la peau (rougeur, capitonnage, peau d\'orange)',
    'Un écoulement du mamelon (surtout si sanglant)',
    'Une rétraction ou inversion du mamelon',
    'Une douleur persistante dans une zone du sein'
  ]

  const riskFactors = [
    { factor: 'Âge', description: 'Le risque augmente avec l\'âge, surtout après 50 ans' },
    { factor: 'Antécédents familiaux', description: 'Risque accru si des proches ont eu un cancer du sein' },
    { factor: 'Mutations génétiques', description: 'Gènes BRCA1 et BRCA2 augmentent le risque' },
    { factor: 'Hormones', description: 'Exposition prolongée aux œstrogènes' },
    { factor: 'Mode de vie', description: 'Alcool, tabac, surpoids, manque d\'exercice' }
  ]

  const preventionTips = [
    { icon: Heart, title: 'Auto-examen mensuel', description: 'Pratiquez l\'auto-examen une fois par mois, de préférence une semaine après vos règles.' },
    { icon: Calendar, title: 'Dépistage régulier', description: 'Mammographie tous les 2 ans à partir de 50 ans, ou selon les recommandations de votre médecin.' },
    { icon: Hand, title: 'Consultez rapidement', description: 'En cas de doute ou de changement, consultez immédiatement un professionnel de santé.' },
    { icon: CheckCircle, title: 'Mode de vie sain', description: 'Alimentation équilibrée, exercice régulier, limitation de l\'alcool et du tabac.' }
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <BookOpen className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Prévention du Cancer du Sein</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            La détection précoce sauve des vies. Apprenez à connaître votre corps et à identifier les signes d'alerte.
          </p>
        </div>

        {/* Auto-Examen Section */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Hand className="h-6 w-6 text-primary" />
              L'Auto-Examen des Seins
            </h2>
            <p className="text-muted-foreground mb-6">
              L'auto-examen des seins est un geste simple qui peut sauver votre vie. Pratiquez-le une fois par mois, 
              de préférence une semaine après le début de vos règles, lorsque vos seins sont moins sensibles.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {autoExamSteps.map((step, index) => (
                <div key={index} className="bg-secondary/30 rounded-lg p-6 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-100">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-primary" />
              Signes d'Alerte
            </h2>
            <p className="text-muted-foreground mb-6">
              Consultez immédiatement un médecin si vous remarquez l'un de ces signes :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {warningSignsData.map((sign, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-destructive/5 rounded-lg border border-destructive/20">
                  <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                  <p className="text-sm">{sign}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-medium">
                <strong>Important :</strong> La présence d'un de ces signes ne signifie pas nécessairement un cancer. 
                Seul un examen médical peut établir un diagnostic.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-200">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-6">Facteurs de Risque</h2>
            <p className="text-muted-foreground mb-6">
              Certains facteurs peuvent augmenter le risque de développer un cancer du sein. 
              Connaître ces facteurs vous aide à mieux surveiller votre santé.
            </p>
            <div className="space-y-4">
              {riskFactors.map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border border-border">
                  <div className="flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.factor}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prevention Tips */}
        <section className="mb-16 animate-in fade-in slide-in-from-bottom duration-500 delay-300">
          <div className="timbo-card p-8">
            <h2 className="text-2xl font-bold mb-6">Conseils de Prévention</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preventionTips.map((tip, index) => {
                const Icon = tip.icon
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center timbo-card p-8 animate-in fade-in slide-in-from-bottom duration-500 delay-400">
          <h3 className="text-xl font-bold mb-4">Besoin d'aide ou de conseils ?</h3>
          <p className="text-muted-foreground mb-6">
            N'hésitez pas à consulter notre liste d'hôpitaux spécialisés ou à poser vos questions dans la communauté.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity">
              Trouver un hôpital
            </a>
            <a href="/community" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
              Rejoindre la communauté
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prevention

