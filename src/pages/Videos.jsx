import { Video, Play, Clock, BookOpen } from 'lucide-react'

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: 'L\'auto-examen des seins : Guide complet',
      description: 'Apprenez les gestes essentiels de l\'auto-examen mammaire avec ce tutoriel détaillé.',
      duration: '8:45',
      category: 'Prévention',
      embedId: 'dQw4w9WgXcQ', // Placeholder - replace with real video IDs
      thumbnail: 'https://share.google/uaqJBiH8erFGtRR7G'
    },
    {
      id: 2,
      title: 'Comprendre le cancer du sein',
      description: 'Une explication claire et accessible sur le cancer du sein, ses causes et ses traitements.',
      duration: '12:30',
      category: 'Éducation',
      embedId: 'dQw4w9WgXcQ',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg'
    },
    {
      id: 3,
      title: 'Témoignage : Mon parcours de guérison',
      description: 'Une patiente partage son expérience et son parcours de guérison pour inspirer et rassurer.',
      duration: '15:20',
      category: 'Témoignage',
      embedId: 'dQw4w9WgXcQ',
      thumbnail: 'https://share.google/hZN0wjvGwPphsWswW'
    },
    {
      id: 4,
      title: 'La mammographie : Tout ce qu\'il faut savoir',
      description: 'Découvrez comment se déroule une mammographie et pourquoi elle est importante.',
      duration: '6:15',
      category: 'Dépistage',
      embedId: 'dQw4w9WgXcQ',
      thumbnail: 'https://share.google/ZQSmQ4I3ASm16qRZm'
    },
    {
      id: 5,
      title: 'Alimentation et prévention du cancer',
      description: 'Les bonnes habitudes alimentaires pour réduire les risques de cancer du sein.',
      duration: '10:00',
      category: 'Mode de vie',
      embedId: 'dQw4w9WgXcQ',
      thumbnail: 'https://share.google/E8aSz76HgLDtumKx7'
    },
    {
      id: 6,
      title: 'Questions fréquentes sur le cancer du sein',
      description: 'Un médecin oncologue répond aux questions les plus courantes sur le cancer du sein.',
      duration: '18:45',
      category: 'Q&A',
      embedId: 'dQw4w9WgXcQ',
      thumbnail: 'https://youtu.be/El7Fr3Y2y2k?si=aj4LboHCW6wLB8X6'
    }
  ]

  const categories = ['Tous', 'Prévention', 'Éducation', 'Témoignage', 'Dépistage', 'Mode de vie', 'Q&A']
  const [selectedCategory, setSelectedCategory] = React.useState('Tous')
  const [selectedVideo, setSelectedVideo] = React.useState(null)

  const filteredVideos = selectedCategory === 'Tous' 
    ? videos 
    : videos.filter(v => v.category === selectedCategory)

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Video className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Vidéos Éducatives</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre bibliothèque de vidéos pédagogiques pour mieux comprendre et prévenir le cancer du sein.
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

        {/* Video Modal */}
        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedVideo(null)}
          >
            <div 
              className="bg-card rounded-xl max-w-4xl w-full overflow-hidden shadow-2xl animate-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.embedId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="timbo-badge text-xs">{selectedVideo.category}</span>
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {selectedVideo.duration}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{selectedVideo.title}</h3>
                <p className="text-muted-foreground">{selectedVideo.description}</p>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="mt-4 px-6 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="timbo-card overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedVideo(video)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all duration-300">
                  <div className="p-4 bg-white/90 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Play className="h-8 w-8 text-primary fill-primary" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/80 rounded text-white text-xs font-medium flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {video.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="timbo-badge text-xs">{video.category}</span>
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-12 timbo-card">
            <Video className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucune vidéo trouvée</h3>
            <p className="text-muted-foreground">
              Essayez de sélectionner une autre catégorie.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 timbo-card p-8 timbo-gradient animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-white rounded-full">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Contenu validé par des experts</h3>
              <p className="text-muted-foreground">
                Toutes nos vidéos sont vérifiées et approuvées par des professionnels de santé spécialisés 
                en oncologie mammaire pour vous garantir des informations fiables et à jour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Add React import for useState
import React from 'react'

export default Videos

