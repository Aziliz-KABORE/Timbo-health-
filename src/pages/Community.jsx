import { useState, useEffect } from 'react'
import { Users, MessageCircle, Send, Heart, Clock, User, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const Community = ({ user }) => {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: '', content: '', isAnonymous: false })
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    // Load posts from localStorage
    const storedPosts = JSON.parse(localStorage.getItem('timboPosts') || '[]')
    setPosts(storedPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)))
  }, [])

  const handleSubmitPost = (e) => {
    e.preventDefault()
    
    if (!user) {
      alert('Vous devez être connecté pour poster un message')
      return
    }

    if (!newPost.title.trim() || !newPost.content.trim()) {
      alert('Veuillez remplir tous les champs')
      return
    }

    setIsSubmitting(true)

    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      author: newPost.isAnonymous ? 'Anonyme' : user.name,
      userId: user.id,
      isAnonymous: newPost.isAnonymous,
      createdAt: new Date().toISOString(),
      likes: 0
    }

    const updatedPosts = [post, ...posts]
    setPosts(updatedPosts)
    localStorage.setItem('timboPosts', JSON.stringify(updatedPosts))

    setNewPost({ title: '', content: '', isAnonymous: false })
    setIsSubmitting(false)
  }

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 }
      }
      return post
    })
    setPosts(updatedPosts)
    localStorage.setItem('timboPosts', JSON.stringify(updatedPosts))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Il y a moins d\'une heure'
    if (diffInHours < 24) return `Il y a ${diffInHours} heure${diffInHours > 1 ? 's' : ''}`
    
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `Il y a ${diffInDays} jour${diffInDays > 1 ? 's' : ''}`
    
    return date.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Users className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Communauté TIMBO</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Un espace bienveillant pour échanger, poser vos questions et partager vos expériences en toute confidentialité.
          </p>
        </div>

        {/* Community Guidelines */}
        <div className="mb-8 timbo-card p-6 bg-primary/5 border-primary/20 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Règles de la communauté</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Respectez la confidentialité et l'anonymat de chacune</li>
                <li>• Soyez bienveillante et soutenante dans vos échanges</li>
                <li>• Ne partagez pas d'informations médicales personnelles sensibles</li>
                <li>• Consultez toujours un professionnel de santé pour un avis médical</li>
              </ul>
            </div>
          </div>
        </div>

        {/* New Post Form */}
        {user ? (
          <div className="mb-8 timbo-card p-6 animate-in fade-in slide-in-from-bottom duration-500 delay-100">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
              Poster un message
            </h2>
            <form onSubmit={handleSubmitPost} className="space-y-4">
              <div>
                <Label htmlFor="title">Titre</Label>
                <Input
                  id="title"
                  value={newPost.title}
                  onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                  placeholder="Titre de votre message"
                  className="timbo-input"
                  maxLength={100}
                />
              </div>
              <div>
                <Label htmlFor="content">Message</Label>
                <Textarea
                  id="content"
                  value={newPost.content}
                  onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                  placeholder="Partagez votre question ou votre expérience..."
                  className="timbo-input min-h-[120px]"
                  maxLength={1000}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {newPost.content.length}/1000 caractères
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={newPost.isAnonymous}
                  onCheckedChange={(checked) => setNewPost({ ...newPost, isAnonymous: checked })}
                />
                <Label htmlFor="anonymous" className="text-sm font-normal cursor-pointer">
                  Poster de manière anonyme
                </Label>
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Publication en cours...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Publier
                  </>
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="mb-8 timbo-card p-8 text-center animate-in fade-in slide-in-from-bottom duration-500 delay-100">
            <User className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connectez-vous pour participer</h3>
            <p className="text-muted-foreground mb-6">
              Vous devez être connectée pour poster des messages et interagir avec la communauté.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login">
                <Button variant="outline" className="rounded-full">
                  Se connecter
                </Button>
              </a>
              <a href="/register">
                <Button className="rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                  Créer un compte
                </Button>
              </a>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-primary" />
            Messages de la communauté
          </h2>
          
          {posts.length === 0 ? (
            <div className="timbo-card p-12 text-center">
              <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Aucun message pour le moment</h3>
              <p className="text-muted-foreground">
                Soyez la première à partager votre expérience ou à poser une question !
              </p>
            </div>
          ) : (
            posts.map((post, index) => (
              <div
                key={post.id}
                className="timbo-card p-6 animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-semibold">
                      {post.isAnonymous ? '?' : post.author[0].toUpperCase()}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{post.author}</span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {formatDate(post.createdAt)}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap mb-4">{post.content}</p>
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Heart className="h-4 w-4" />
                        <span>{post.likes} {post.likes > 1 ? 'J\'aime' : 'J\'aime'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Support Section */}
        <div className="mt-12 timbo-card p-8 timbo-gradient animate-in fade-in slide-in-from-bottom duration-500">
          <h3 className="text-xl font-bold mb-4 text-center">Besoin d'aide professionnelle ?</h3>
          <p className="text-muted-foreground text-center mb-6">
            La communauté est là pour le soutien, mais seul un professionnel de santé peut vous donner 
            un avis médical. N'hésitez pas à consulter.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity">
              Trouver un hôpital spécialisé
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community

