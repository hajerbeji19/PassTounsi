import { useState } from 'react'
import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import LoginPage from './pages/LoginPage.jsx'
import HomePage from './pages/HomePage.jsx'
import DestinationsListPage from './pages/DestinationsListPage.jsx'
import DetailsPage from './pages/DetailsPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ProfilPage from './pages/ProfilPage.jsx'


const initialDestinations = [
  {
    id: Math.random(),
    country: 'Italy',
    city: 'Rome',
    status: 'visited',
    rating: 5,
    days: 7,
    date: 'July 15, 2026',
    budget: 1200,
    description: 'A city of history, art and unforgettable moments. Discover ancient landmarks and delicious Italian cuisine.',
    image: '/destinations/italy.jpg',
    fallback: '/destinations/Italy.jpg',
    travelType: 'Vacation',
    companions: 'Friends',
    season: 'Summer',
    gallery: [
      {
        image: '/memories/colosseum_rome.jpg',
        caption: 'Colosseum — My first day in Rome.',
      },
      {
        image: '/memories/sunset_venice.jpg',
        caption: 'Venice — A beautiful sunset by the canals.',
      },
      {
        image: '/memories/Italian_pizza.jpg',
        caption: 'Italian pizza — The best meal of the trip!',
      },
    ],
    story: 'My trip to Italy was unforgettable! I discovered beautiful places, tasted delicious food and created amazing memories.',
    favoriteMoment: 'Watching the sunset in Venice with my friends.',
    favoriteFood: 'Italian pizza',
    favoritePlace: 'Colosseum',
    soundtrack: 'Volare — Domenico Modugno',
    souvenirBought: 'A Venetian mask',
    oneWord: 'Magical',
    travelMood: 'Happy and adventurous',
    bestExperience: 'A gondola ride through Venice',
    wouldVisitAgain: 'Yes',
    travelTip: 'Visit Rome in spring and book Colosseum tickets early.',
  },
  {
    id: Math.random(),
    country: 'France',
    city: 'Paris',
    status: 'visited',
    rating: 4,
    days: 4,
    date: 'May 10, 2025',
    budget: 850,
    description: 'Stroll along the Seine, visit neighbourhood cafés and enjoy the magic of the City of Light.',
    image: '/destinations/france.jpg',
    fallback: '/destinations/France.jpg',
    travelType: 'City break',
    companions: 'Family',
    season: 'Spring',
    gallery: [
      {
        image: '/memories/eiffel_tower_paris.jpg',
        caption: 'Eiffel Tower — Paris at golden hour.',
      },
      {
        image: '/memories/montmartre_paris.jpg',
        caption: 'Montmartre — A lovely afternoon walk.',
      },
    ],
    story: 'Paris welcomed us with beautiful streets, little cafés and a wonderful evening by the Seine.',
    favoriteMoment: 'Watching the Eiffel Tower sparkle at night.',
    favoriteFood: 'Fresh croissants',
    favoritePlace: 'Montmartre',
    soundtrack: 'La Vie en Rose — Édith Piaf',
    souvenirBought: 'A small art print',
    oneWord: 'Romantic',
    travelMood: 'Relaxed',
    bestExperience: 'An evening cruise on the Seine',
    wouldVisitAgain: 'Yes',
    travelTip: 'Take comfortable shoes for exploring the city on foot.',
  },
  {
    id: Math.random(),
    country: 'Japan',
    city: 'Kyoto',
    status: 'planned',
    rating: 5,
    days: 8,
    date: 'Not planned',
    budget: 1800,
    description: 'Peaceful temples, seasonal gardens and lantern-lit streets.',
    image: '/destinations/japan.jpg',
    fallback: '/destinations/Japan.jpg',
    travelType: '',
    companions: '',
    season: '',
    gallery: [],
    story: '',
    favoriteMoment: '',
    favoriteFood: '',
    favoritePlace: '',
    soundtrack: '',
    souvenirBought: '',
    oneWord: '',
    travelMood: '',
    bestExperience: '',
    wouldVisitAgain: '',
    travelTip: '',
  },
  {
    id: Math.random(),
    country: 'Tunisia',
    city: 'Sidi Bou Said',
    status: 'visited',
    rating: 5,
    days: 3,
    date: 'April 21, 2025',
    budget: 400,
    description: 'Mediterranean blue, carved doors and the gentle pace of Tunisian afternoons.',
    image: '/destinations/tunisia.jpg',
    fallback: '/destinations/Tunisia.jpg',
    travelType: 'Weekend getaway',
    companions: 'Family',
    season: 'Spring',
    gallery: [
      {
        image: '/memories/sidi_bou_said.jpg',
        caption: 'Sidi Bou Said — Blue and white above the Mediterranean.',
      },
      {
        image: '/memories/tunisia_landscape.jpg',
        caption: 'Tunisia — A place that always feels like home.',
      },
    ],
    story: 'A relaxing few days by the sea, with beautiful blue doors, warm sunshine and mint tea.',
    favoriteMoment: 'Watching the sun set over the Mediterranean.',
    favoriteFood: 'Bambalouni',
    favoritePlace: 'The old village streets',
    soundtrack: 'Sidi Mansour — Saber Rebai',
    souvenirBought: 'A hand-painted ceramic plate',
    oneWord: 'Peaceful',
    travelMood: 'Relaxed and happy',
    bestExperience: 'Mint tea with a sea view',
    wouldVisitAgain: 'Yes',
    travelTip: 'Visit in the late afternoon for cooler weather and sunset views.',
  },
  {
    id: Math.random(),
    country: 'Canada',
    city: 'Banff',
    status: 'planned',
    rating: 5,
    days: 6,
    date: 'Not planned',
    budget: 2200,
    description: 'Turquoise lakes and majestic peaks make this the perfect mountain escape.',
    image: '/destinations/canada.jpg',
    fallback: '/destinations/Canada.jpg',
    travelType: '',
    companions: '',
    season: '',
    gallery: [],
    story: '',
    favoriteMoment: '',
    favoriteFood: '',
    favoritePlace: '',
    soundtrack: '',
    souvenirBought: '',
    oneWord: '',
    travelMood: '',
    bestExperience: '',
    wouldVisitAgain: '',
    travelTip: '',
  },
  {
    id: Math.random(),
    country: 'Morocco',
    city: 'Marrakech',
    status: 'planned',
    rating: 4,
    days: 5,
    date: 'Not planned',
    budget: 700,
    description: 'A sensory journey through vibrant souks, hidden gardens and fragrant cuisine.',
    image: '/destinations/morocco.jpg',
    fallback: '/destinations/Morocco.jpg',
    travelType: '',
    companions: '',
    season: '',
    gallery: [],
    story: '',
    favoriteMoment: '',
    favoriteFood: '',
    favoritePlace: '',
    soundtrack: '',
    souvenirBought: '',
    oneWord: '',
    travelMood: '',
    bestExperience: '',
    wouldVisitAgain: '',
    travelTip: '',
  },
]

function App() {
  const [destinations, setDestinations] = useState(initialDestinations)

  function addDestination(destination) {
    setDestinations((current) => [...current, destination])
  }

  function updateDestination(id, updates) {
    setDestinations((current) => current.map((destination) => (
      destination.id === id ? { ...destination, ...updates } : destination
    )))
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route element={<><Navbar /><main className="journal-wrap"><Outlet /></main></>}>
        <Route index element={<HomePage destinations={destinations} />} />
        <Route path="countries" element={<DestinationsListPage destinations={destinations} onAdd={addDestination} />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilPage destinations={destinations} />} />
        <Route path="destinations/:id" element={<DetailsPage destinations={destinations} onAdd={addDestination} onUpdate={updateDestination} />} />
        <Route path="destinations/:id/memories" element={<DetailsPage destinations={destinations} onAdd={addDestination} onUpdate={updateDestination} />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
