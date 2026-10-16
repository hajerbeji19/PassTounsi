import { useMemo, useState } from 'react'
import './App.css'

const fallbackPhoto = 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85'

const initialDestinations = [
  {
    id: 1,
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
  },
  {
    id: 2,
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
  },
  {
    id: 3,
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
  },
  {
    id: 4,
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
  },
  {
    id: 5,
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
  },
  {
    id: 6,
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
  },
]

function Icon({ name }) {
  return <i className={`fa-solid fa-${name}`} aria-hidden="true" />
}

function Stars({ value }) {
  return (
    <span className="stars" aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i key={star} className={`fa-${star <= value ? 'solid' : 'regular'} fa-star`} aria-hidden="true" />
      ))}
    </span>
  )
}

function InteractiveRating({ value, onChange }) {
  return (
    <div className="interactive-rating" role="group" aria-label="Rate this destination">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className={star <= value ? 'selected' : ''}
          type="button"
          aria-label={`${star} ${star === 1 ? 'star' : 'stars'}`}
          aria-pressed={value === star}
          onClick={() => onChange(star)}
        >
          <i className="fa-solid fa-star" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}

function DestinationImage({ destination, alt = '' }) {
  const [failedImage, setFailedImage] = useState(null)
  const fallback = destination.fallback || fallbackPhoto
  const source = failedImage?.image === destination.image ? failedImage.source : destination.image

  return (
    <img
      src={source}
      alt={alt}
      onError={() => {
        if (source !== fallback) setFailedImage({ image: destination.image, source: fallback })
      }}
    />
  )
}

function Login({ onLogin }) {
  return (
    <main className="login-shell">
      <section className="login-scenery">
        <div className="login-brand"><Icon name="plane" /> PassTounsi</div>
        <div className="login-tagline">
          <span>Your Digital Travel Passport</span>
          <strong>Every Page, A New Adventure.<br />Every Stamp, A Memory.</strong>
        </div>
        <div className="login-flight-path" aria-hidden="true">〰 ✈</div>
      </section>
      <section className="login-panel">
        <form className="login-card" onSubmit={(event) => { event.preventDefault(); onLogin() }}>
          <img className="login-flag" src="/images/Tunisie.jpg" alt="Tunisian flag" />
          <p className="login-kicker">YOUR DIGITAL TRAVEL PASSPORT</p>
          <h1>Welcome to PassTounsi! <span aria-hidden="true">✈️</span></h1>
          <p className="muted">Your journeys, your memories, your passport.</p>
          <label className="input-with-icon">
            <Icon name="envelope" />
            <input aria-label="Email address" type="email" autoComplete="username" defaultValue="hajer.beji@isimg.tn" placeholder="Email address" />
          </label>
          <label className="input-with-icon">
            <Icon name="lock" />
            <input aria-label="Password" type="password" autoComplete="current-password" placeholder="Password" />
          </label>
          <button className="primary-btn login-submit" type="submit">Sign in</button>
          <p className="signup">Welcome aboard, Hajer Beji</p>
        </form>
      </section>
    </main>
  )
}

function AppHeader({ active, onNavigate, onLogout }) {
  const tabs = [
    ['cover', 'passport', 'My Passport'],
    ['countries', 'globe', 'Countries'],
  ]

  return (
    <header className="topbar">
      <button className="brand-mark" onClick={() => onNavigate('cover')} aria-label="PassTounsi home">
        <Icon name="plane" /><span>PassTounsi</span>
      </button>
      <nav aria-label="Main navigation">
        {tabs.map(([page, icon, label]) => (
          <button key={page} className={active === page ? 'active' : ''} onClick={() => onNavigate(page)}>
            <Icon name={icon} /><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="profile-menu">
        <span className="avatar">HB</span>
        <span className="profile-name">Hajer Beji</span>
        <button className="icon-btn logout-btn" onClick={onLogout} title="Sign out" aria-label="Sign out"><Icon name="right-from-bracket" /></button>
      </div>
    </header>
  )
}

function PageLabel({ children }) {
  return <div className="page-label">{children}</div>
}

function Cover({ onOpen }) {
  return (
    <section className="cover-layout">
      <div className="section-heading">
        <span className="step-pill">YOUR TRAVEL PASSPORT</span>
        <h1>Every page,<br /><em>a new adventure.</em></h1>
        <p>Keep your journeys and memories together in one personal travel passport.</p>
      </div>
      <button className="passport-cover" onClick={onOpen} aria-label="Open your PassTounsi passport">
        <img src="/images/passport_tunisie.jpg" alt="Green Tunisian passport with gold details" />
        <span className="passport-name">PASSTOUNSI<small>My Travel Passport</small></span>
        <span className="cover-open"><Icon name="hand-pointer" /> Open your passport</span>
      </button>
    </section>
  )
}

function ProfilePage({ destinations, onNext }) {
  const visited = destinations.filter((destination) => destination.status === 'visited').length
  const planned = destinations.length - visited
  return (
    <section className="book-page profile-page">
      <PageLabel>PERSONAL INFORMATION</PageLabel>
      <div className="id-card">
        <div className="id-card-top">
          <img className="flag-box" src="/images/Tunisie.jpg" alt="Tunisian flag" />
          <div><span>REPUBLIC OF TUNISIA</span><small>PASSTOUNSI TRAVEL PASSPORT</small></div>
          <Icon name="globe" />
        </div>
        <div className="id-card-content">
          <div className="profile-photo" role="img" aria-label="Portrait placeholder for Hajer Beji">HB</div>
          <div className="profile-details">
            <div><span>Surname</span><strong>Beji</strong></div>
            <div><span>Given name</span><strong>Hajer</strong></div>
            <div><span>Nationality</span><strong>Tunisian</strong></div>
            <div><span>Email address</span><strong>hajer.beji@isimg.tn</strong></div>
            <div><span>Passport number</span><strong>TRAVEL-001</strong></div>
            <div><span>Member since</span><strong>2026</strong></div>
          </div>
        </div>
        <div className="id-card-bottom">
          <span className="signature">Hajer Beji</span>
          <div className="passport-stat"><Icon name="globe" /><span>Countries visited<strong>{visited}</strong></span></div>
          <div className="passport-stat"><Icon name="heart" /><span>On your list<strong>{planned}</strong></span></div>
        </div>
      </div>
      <button className="primary-btn profile-cta" onClick={onNext}>Explore countries <Icon name="arrow-right" /></button>
    </section>
  )
}

function CountriesPage({ destinations, query, onQueryChange, filter, onFilterChange, onSelect, onAdd }) {
  const filtered = destinations.filter((destination) => {
    const matchesQuery = `${destination.country} ${destination.city}`.toLowerCase().includes(query.toLowerCase())
    const matchesFilter = filter === 'all' || destination.status === filter
    return matchesQuery && matchesFilter
  })
  const filters = [['all', 'All countries'], ['visited', 'Visited'], ['planned', 'To visit']]

  return (
    <section className="index-page">
      <div className="index-heading">
        <div><span className="step-pill">YOUR TRAVEL JOURNAL</span><h1><Icon name="globe" /> Countries</h1><p>Explore the countries in your passport</p></div>
        <button className="primary-btn add-destination" onClick={onAdd}><Icon name="plus" /> Add destination</button>
      </div>
      <div className="index-controls">
        <label className="search-box"><Icon name="magnifying-glass" /><input aria-label="Search countries or cities" value={query} onChange={(event) => onQueryChange(event.target.value)} placeholder="Search countries..." /></label>
        <div className="filter-pills" aria-label="Filter countries">
          {filters.map(([value, label]) => <button key={value} className={filter === value ? 'selected' : ''} onClick={() => onFilterChange(value)}>{label}</button>)}
        </div>
      </div>
      {filtered.length > 0 ? (
        <div className="destination-grid">
          {filtered.map((destination) => (
            <button className="destination-card" key={destination.id} onClick={() => onSelect(destination)}>
              <div className="card-image">
                <DestinationImage destination={destination} />
                <span className={`status-badge ${destination.status}`}>{destination.status === 'visited' ? '✓ Visited' : 'To visit'}</span>
              </div>
              <div className="card-body">
                <div className="card-title"><h2>{destination.country}</h2><span className="rating-number">{destination.rating} <Icon name="star" /></span></div>
                <p className="card-city">{destination.city}</p>
                <div className="card-footer"><Stars value={destination.rating} /><span>{destination.status === 'visited' ? 'Stamped' : 'On my list'}</span></div>
              </div>
            </button>
          ))}
        </div>
      ) : <div className="empty-state"><Icon name="magnifying-glass" /><h2>No countries found</h2><p>Try a different country or city.</p></div>}
    </section>
  )
}

function DestinationPage({ destination, index, total, onPrev, onNext, onBack }) {
  return (
    <section className="book-page destination-page">
      <PageLabel>COUNTRY {index + 1} / {total}</PageLabel>
      <div className="destination-spread">
        <div className="destination-photo">
          <DestinationImage destination={destination} alt={`${destination.city}, ${destination.country}`} />
          {destination.status === 'visited' && (
            <div className="airport-stamp" aria-label="Visited and stamped at the airport">
              <span>AIRPORT</span><strong>VISITED</strong><Icon name="plane" /><small>PASSTOUNSI · 2026</small>
            </div>
          )}
          {destination.status === 'planned' && <span className="stamp planned">TO VISIT <Icon name="heart" /></span>}
        </div>
        <div className="destination-copy">
          <span className="country-code">{destination.country.toUpperCase()} · {destination.date}</span>
          <h1>{destination.city}<br /><em>{destination.country}</em></h1>
          <div className="destination-rating"><Stars value={destination.rating} /><span>{destination.rating} / 5</span></div>
          <p>{destination.description}</p>
          <div className="travel-facts">
            <div><Icon name="calendar-days" /><span>Travel date<strong>{destination.date}</strong></span></div>
            <div><Icon name="route" /><span>Duration<strong>{destination.days} days</strong></span></div>
            <div><Icon name="wallet" /><span>Budget<strong>{destination.budget} TND</strong></span></div>
          </div>
          {destination.status === 'visited' && (
            <button className="memory-btn" type="button"><Icon name="images" /> My memories</button>
          )}
        </div>
      </div>
      <div className="book-navigation">
        <button className="page-turn previous" onClick={onPrev} disabled={index === 0}><Icon name="arrow-left" /> Previous country</button>
        <button className="back-to-index" onClick={onBack}>All countries</button>
        <span>{index + 1} / {total}</span>
        <button className="page-turn next" onClick={onNext} disabled={index === total - 1}>Next country <Icon name="arrow-right" /></button>
      </div>
    </section>
  )
}

function AddDestination({ onClose, onAdd }) {
  const [rating, setRating] = useState(0)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="add-modal" role="dialog" aria-modal="true" aria-labelledby="add-title" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close"><Icon name="xmark" /></button>
        <span className="step-pill">NEW DESTINATION</span>
        <h2 id="add-title">Add a destination</h2>
        <form onSubmit={(event) => {
          event.preventDefault()
          const data = new FormData(event.currentTarget)
          const country = data.get('country').trim()
          const image = data.get('image').trim()
          const slug = country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
          onAdd({
            id: Date.now(),
            country,
            city: data.get('city').trim(),
            status: data.get('status'),
            rating,
            days: Number(data.get('days')) || 1,
            date: data.get('date') || 'Not planned',
            budget: Number(data.get('budget')) || 0,
            description: data.get('description') || 'A new place to discover and remember.',
            image: image || `/destinations/${slug}.jpg`,
            fallback: fallbackPhoto,
          })
        }}>
          <div className="form-grid">
            <label>Country<input className="form-control" name="country" required placeholder="e.g. Japan" /></label>
            <label>City<input className="form-control" name="city" required placeholder="e.g. Kyoto" /></label>
            <label>Travel date<input className="form-control" name="date" placeholder="e.g. July 15, 2026" /></label>
            <label>Budget (TND)<input className="form-control" name="budget" type="number" min="0" placeholder="e.g. 1200" /></label>
            <label>Duration (days)<input className="form-control" name="days" type="number" min="1" defaultValue="1" /></label>
            <label>Status<select className="form-control" name="status"><option value="visited">Visited</option><option value="planned">To visit</option></select></label>
          </div>
          <label>Rating<InteractiveRating value={rating} onChange={setRating} /></label>
          <label>Description<textarea className="form-control" name="description" rows="2" placeholder="What makes this destination special?" /></label>
          <label>Image URL (optional)<input className="form-control" name="image" type="url" placeholder="Uses an image from public/destinations by default" /></label>
          <div className="modal-actions">
            <button className="cancel-btn" type="button" onClick={onClose}>Cancel</button>
            <button className="primary-btn modal-submit" type="submit"><Icon name="plus" /> Add destination</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Journal({ destinations, onAdd, onLogout }) {
  const [page, setPage] = useState('cover')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [selected, setSelected] = useState(null)
  const [showAdd, setShowAdd] = useState(false)

  const countries = useMemo(() => destinations.filter((destination) => (
    filter === 'all' || destination.status === filter
  )).filter((destination) => `${destination.country} ${destination.city}`.toLowerCase().includes(query.toLowerCase())), [destinations, filter, query])
  const selectedIndex = Math.max(0, countries.findIndex((destination) => destination.id === selected?.id))

  function navigate(nextPage) {
    setSelected(null)
    setPage(nextPage)
  }

  function selectDestination(destination) {
    setSelected(destination)
    setPage('destination')
  }

  function addDestination(destination) {
    onAdd(destination)
    setShowAdd(false)
    setQuery('')
    setFilter('all')
    if (destination.status === 'visited') selectDestination(destination)
    else navigate('countries')
  }

  return (
    <div className="app-shell">
      <AppHeader active={page === 'destination' ? 'countries' : page} onNavigate={navigate} onLogout={onLogout} />
      <main className="journal-wrap">
        {page === 'cover' && <Cover onOpen={() => navigate('profile')} />}
        {page === 'profile' && <ProfilePage destinations={destinations} onNext={() => navigate('countries')} />}
        {page === 'countries' && <CountriesPage destinations={destinations} query={query} onQueryChange={setQuery} filter={filter} onFilterChange={setFilter} onSelect={selectDestination} onAdd={() => setShowAdd(true)} />}
        {page === 'destination' && selected && (
          <DestinationPage
            destination={selected}
            index={selectedIndex}
            total={countries.length}
            onPrev={() => setSelected(countries[Math.max(0, selectedIndex - 1)])}
            onNext={() => setSelected(countries[Math.min(countries.length - 1, selectedIndex + 1)])}
            onBack={() => navigate('countries')}
          />
        )}
      </main>
      {page !== 'cover' && page !== 'profile' && <button className="floating-add" onClick={() => setShowAdd(true)}><Icon name="plus" /><span>Add destination</span></button>}
      <footer><span>© 2026 PassTounsi</span><span>Your Digital Travel Passport</span><span>Tunis · The world</span></footer>
      {showAdd && <AddDestination onClose={() => setShowAdd(false)} onAdd={addDestination} />}
    </div>
  )
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [destinations, setDestinations] = useState(initialDestinations)
  const addDestination = (item) => setDestinations((current) => [...current, item])

  return loggedIn
    ? <Journal destinations={destinations} onAdd={addDestination} onLogout={() => setLoggedIn(false)} />
    : <Login onLogin={() => setLoggedIn(true)} />
}

export default App
