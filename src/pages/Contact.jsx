import { useState } from 'react'
import { Phone, Mail, MapPin, Globe, Search, Hospital } from 'lucide-react'
import { Input } from '@/components/ui/input'

const Contact = () => {
  const hospitals = [
    {
      id: 1,
      name: 'Institut Curie',
      city: 'Paris',
      address: '26 rue d\'Ulm, 75005 Paris',
      phone: '+33 1 44 32 40 00',
      email: 'contact@curie.fr',
      website: 'https://curie.fr',
      specialties: 'Centre de référence en oncologie, spécialisé dans le cancer du sein'
    },
    {
      id: 2,
      name: 'Gustave Roussy',
      city: 'Villejuif',
      address: '114 rue Édouard Vaillant, 94805 Villejuif',
      phone: '+33 1 42 11 42 11',
      email: 'info@gustaveroussy.fr',
      website: 'https://gustaveroussy.fr',
      specialties: 'Premier centre de lutte contre le cancer en Europe'
    },
    {
      id: 3,
      name: 'Centre Léon Bérard',
      city: 'Lyon',
      address: '28 rue Laënnec, 69008 Lyon',
      phone: '+33 4 78 78 26 26',
      email: 'contact@lyon.unicancer.fr',
      website: 'https://centreleonberard.fr',
      specialties: 'Centre régional de lutte contre le cancer'
    },
    {
      id: 4,
      name: 'Institut Paoli-Calmettes',
      city: 'Marseille',
      address: '232 boulevard de Sainte-Marguerite, 13009 Marseille',
      phone: '+33 4 91 22 33 33',
      email: 'contact@ipc.unicancer.fr',
      website: 'https://institutpaolicalmettes.fr',
      specialties: 'Centre régional de lutte contre le cancer PACA'
    },
    {
      id: 5,
      name: 'Institut Bergonié',
      city: 'Bordeaux',
      address: '229 cours de l\'Argonne, 33000 Bordeaux',
      phone: '+33 5 56 33 33 33',
      email: 'contact@bordeaux.unicancer.fr',
      website: 'https://bergonie.org',
      specialties: 'Centre de lutte contre le cancer Nouvelle-Aquitaine'
    },
    {
      id: 6,
      name: 'Centre Oscar Lambret',
      city: 'Lille',
      address: '3 rue Frédéric Combemale, 59000 Lille',
      phone: '+33 3 20 29 59 59',
      email: 'contact@o-lambret.fr',
      website: 'https://centreoscarlambret.fr',
      specialties: 'Centre de lutte contre le cancer Hauts-de-France'
    },
    {
      id: 7,
      name: 'Institut de Cancérologie de Lorraine',
      city: 'Nancy',
      address: '6 avenue de Bourgogne, 54519 Vandœuvre-lès-Nancy',
      phone: '+33 3 83 59 83 59',
      email: 'contact@nancy.unicancer.fr',
      website: 'https://icl-lorraine.fr',
      specialties: 'Centre de lutte contre le cancer Grand Est'
    },
    {
      id: 8,
      name: 'Centre Paul Strauss',
      city: 'Strasbourg',
      address: '3 rue de la Porte de l\'Hôpital, 67065 Strasbourg',
      phone: '+33 3 88 25 24 24',
      email: 'contact@strasbourg.unicancer.fr',
      website: 'https://centrepaulstrauss.fr',
      specialties: 'Centre régional de lutte contre le cancer Alsace'
    }
  ]

  const [searchTerm, setSearchTerm] = useState('')
  const [filteredHospitals, setFilteredHospitals] = useState(hospitals)

  const handleSearch = (value) => {
    setSearchTerm(value)
    const filtered = hospitals.filter(hospital => 
      hospital.name.toLowerCase().includes(value.toLowerCase()) ||
      hospital.city.toLowerCase().includes(value.toLowerCase()) ||
      hospital.address.toLowerCase().includes(value.toLowerCase())
    )
    setFilteredHospitals(filtered)
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top duration-500">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-accent rounded-full mb-4">
            <Hospital className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hôpitaux Spécialisés</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Trouvez un centre de santé spécialisé dans le dépistage et le traitement du cancer du sein près de chez vous.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 animate-in fade-in slide-in-from-bottom duration-500">
          <div className="timbo-card p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher par nom, ville ou adresse..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 timbo-input text-lg py-6"
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              {filteredHospitals.length} {filteredHospitals.length > 1 ? 'établissements trouvés' : 'établissement trouvé'}
            </p>
          </div>
        </div>

        {/* Hospital List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredHospitals.map((hospital, index) => (
            <div 
              key={hospital.id} 
              className="timbo-card p-6 hover:scale-105 transition-all duration-300 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-full">
                    <Hospital className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1">{hospital.name}</h3>
                  <p className="text-sm text-primary font-medium">{hospital.city}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">{hospital.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a href={`tel:${hospital.phone}`} className="text-sm text-primary hover:underline">
                    {hospital.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a href={`mailto:${hospital.email}`} className="text-sm text-primary hover:underline">
                    {hospital.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <a 
                    href={hospital.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-sm text-primary hover:underline"
                  >
                    Visiter le site web
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground italic">{hospital.specialties}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredHospitals.length === 0 && (
          <div className="text-center py-12 timbo-card">
            <Hospital className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Aucun établissement trouvé</h3>
            <p className="text-muted-foreground">
              Essayez de modifier votre recherche ou de réinitialiser les filtres.
            </p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-12 timbo-card p-8 timbo-gradient animate-in fade-in slide-in-from-bottom duration-500">
          <h3 className="text-xl font-bold mb-4 text-center">Besoin d'aide pour choisir ?</h3>
          <p className="text-muted-foreground text-center mb-6">
            Si vous ne savez pas quel établissement contacter, n'hésitez pas à consulter votre médecin traitant 
            qui pourra vous orienter vers le centre le plus adapté à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/community" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:opacity-90 transition-opacity">
              Poser une question à la communauté
            </a>
            <a href="/prevention" className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-primary text-primary font-medium hover:bg-primary/10 transition-colors">
              En savoir plus sur la prévention
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

