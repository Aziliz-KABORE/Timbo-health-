import { useState } from 'react'
import { Image as ImageIcon, X, ZoomIn, Download } from 'lucide-react'

const Gallery = () => {
  const images = [
    {
      id: 1,
      title: 'Auto-examen des seins',
      description: 'Guide visuel des étapes de l\'auto-examen mammaire',
      category: 'Prévention',
      url: 'https://youtube.com/shorts/as18BRr8QxI?si=_Q-kflZegbo9hxN2'
    },
    {
      id: 2,
      title: 'Anatomie du sein',
      description: 'Comprendre la structure anatomique du sein',
      category: 'Éducation',
      url: 'https://youtu.be/El7Fr3Y2y2k?si=aj4LboHCW6wLB8X6'
    },
    {
      id: 3,
      title: 'Signes d\'alerte',
      description: 'Les signes qui doivent vous alerter',
      category: 'Prévention',
      url: 'https://youtu.be/riGPR8mIb-Y?si=QSXqIcQfbkUlsCar'
    },
    {
      id: 4,
      title: 'Facteurs de risque',
      description: 'Infographie sur les facteurs de risque du cancer du sein',
      category: 'Éducation',
      url: 'https://youtu.be/UqvSxg_zx1I?si=1FBMSF4ZMYch9e3s'
    },
    {
      id: 5,
      title: 'Dépistage par âge',
      description: 'Recommandations de dépistage selon l\'âge',
      category: 'Dépistage',
      url: 'https://via.placeholder.com/600x400/FFF0F5/333333?text=D%C3%A9pistage+par+%C3%A2ge'
    },
    {
      id: 6,
      title: 'Mode de vie sain',
      description: 'Conseils pour un mode de vie préventif',
      category: 'Mode de vie',
      url: 'https://share.google/v7BUUXOV7uyc3klHv'
    },
    {
      id: 7,
      title: 'Types de cancer du sein',
      description: 'Les différents types de cancer du sein expliqués',
      category: 'Éducation',
      url: 'https://share.google/5QHYsG9ti7lLmCdgd'
    },
    {
      id: 8,
      title: 'Parcours de soins',
      description: 'Le parcours de soins en cas de diagnostic',
      category: 'Traitement',
      url: 'https://share.google/oqoxvQRJAEhqeznZd'
    },
    {
      id: 9,
      title: 'Alimentation préventive',
      description: 'Les aliments qui aident à prévenir le cancer',
      category: 'Mode de vie',
      url: 'https://share.google/ZQSmQ4I3ASm16qRZm'
    }
  ]

  const categories = ['Tous', 'Prévention', 'Éducation', 'Dépistage', 'Mode de vie', 'Traitement']
  const [selectedCategory, setSelectedCategory] = useState('Tous')
  const [selectedImage, setSelectedImage] = useState(null)

  const filteredImages = selectedCategory === 'Tous' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <ImageIcon className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Galerie de Prévention</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explorez notre collection d'infographies et d'images éducatives sur la prévention du cancer du sein.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-md'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="h-6 w-6 text-white" />
            </button>
            <div 
              className="max-w-5xl w-full animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="mt-4 bg-card/95 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="timbo-badge text-xs mb-2 inline-block">{selectedImage.category}</span>
                    <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-muted-foreground">{selectedImage.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      // In a real app, this would trigger a download
                      alert('Fonctionnalité de téléchargement à venir')
                    }}
                    className="flex-shrink-0 p-3 bg-gradient-to-r from-primary to-accent text-white rounded-full hover:opacity-90 transition-opacity"
                    title="Télécharger"
                  >
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="timbo-card overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 bg-white/90 rounded-full">
                      <ZoomIn className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="absolute top-2 left-2">
                  <span className="timbo-badge text-xs">{image.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-12 timbo-card">
            <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune image trouvée</h3>
            <p className="text-muted-foreground">
              Essayez de sélectionner une autre catégorie.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 timbo-card p-8 timbo-gradient animate-in fade-in slide-in-from-bottom duration-500">
          <h3 className="text-xl font-bold mb-4 text-center">Partagez ces ressources</h3>
          <p className="text-muted-foreground text-center mb-6">
            Ces infographies sont conçues pour être partagées. Aidez-nous à sensibiliser en les diffusant 
            autour de vous sur les réseaux sociaux ou en les imprimant pour votre entourage.
          </p>
          <div className="flex justify-center">
            <button className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity">
              Télécharger toutes les images
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery

