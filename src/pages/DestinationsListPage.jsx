import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddDestinationPage from './AddDestinationPage.jsx'

export default function DestinationsListPage({ destinations, onAdd }) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [showAdd, setShowAdd] = useState(false)
  const navigate = useNavigate()
  const filtered = destinations.filter((item) => `${item.country} ${item.city}`.toLowerCase().includes(query.toLowerCase()) && (filter === 'all' || item.status === filter))

  return (
    <section className="index-page destinations-list-page">
      <div className="index-heading"><div><span className="step-pill">YOUR TRAVEL JOURNAL</span><h1><i className="fa-solid fa-globe" /> Destinations</h1><p>Explore the countries in your passport</p></div><button className="primary-btn add-destination" onClick={() => setShowAdd(true)}><i className="fa-solid fa-plus" /> Add destination</button></div>
      <div className="index-controls"><label className="search-box"><i className="fa-solid fa-magnifying-glass" /><input aria-label="Search countries or cities" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search destinations..." /></label><div className="filter-pills"><button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')}>All</button><button className={filter === 'visited' ? 'selected' : ''} onClick={() => setFilter('visited')}>Visited</button><button className={filter === 'planned' ? 'selected' : ''} onClick={() => setFilter('planned')}>To visit</button></div></div>
      <div className="destination-grid">{filtered.map((item) => <button className="destination-card" key={item.id} onClick={() => navigate(`/destinations/${item.id}`)}><div className="card-image"><img src={item.image} alt={`${item.city}, ${item.country}`} onError={(event) => { event.currentTarget.src = item.fallback }} />{item.status === 'visited' && <div className="airport-stamp card-airport-stamp" aria-label="Visited and stamped at the airport"><span>AIRPORT</span><strong>VISITED</strong><i className="fa-solid fa-plane" /><small>PASSTOUNSI · 2026</small></div>}<span className={`status-badge ${item.status}`}>{item.status === 'visited' ? '✓ Visited' : 'To visit'}</span></div><div className="card-body"><div className="card-title"><h2>{item.country}</h2><span className="rating-number">{item.rating} <i className="fa-solid fa-star" /></span></div><p className="card-city">{item.city}</p><div className="card-footer"><span className="stars">{[1, 2, 3, 4, 5].map((star) => <i key={star} className={`fa-${star <= item.rating ? 'solid' : 'regular'} fa-star`} />)}</span><span>{item.status === 'visited' ? 'Stamped' : 'On my list'}</span></div></div></button>)}</div>
      {filtered.length === 0 && <div className="empty-state"><i className="fa-solid fa-magnifying-glass" /><h2>No destinations found</h2><p>Try a different search.</p></div>}
      {showAdd && <AddDestinationPage onClose={() => setShowAdd(false)} onAdd={(item) => { onAdd(item); setShowAdd(false); navigate(`/destinations/${item.id}`) }} />}
    </section>
  )
}
