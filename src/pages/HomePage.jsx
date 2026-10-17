import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomePage({ destinations }) {
  const [showProfile, setShowProfile] = useState(false)
  const [showDestinations, setShowDestinations] = useState(false)
  const navigate = useNavigate()

  function openCountryPages() {
    navigate('/countries')
  }

  if (showProfile && !showDestinations) {
    const visited = destinations.filter((destination) => destination.status === 'visited').length
    const planned = destinations.length - visited
    return <section className="book-page profile-page page-no-scroll"><div className="id-card"><div className="id-card-top"><img className="flag-box" src="/images/Tunisie.jpg" alt="Tunisian flag" /><div><span>REPUBLIC OF TUNISIA</span><small>PASSTOUNSI TRAVEL PASSPORT</small></div><i className="fa-solid fa-globe" /></div><div className="id-card-content"><div className="profile-photo">HB</div><div className="profile-details"><div><span>Surname</span><strong>Beji</strong></div><div><span>Given name</span><strong>Hajer</strong></div><div><span>Nationality</span><strong>Tunisian</strong></div><div><span>Email address</span><strong>hajer.beji@isimg.tn</strong></div><div><span>Passport number</span><strong>TRAVEL-001</strong></div><div><span>Member since</span><strong>2026</strong></div></div></div><div className="id-card-bottom"><span className="signature">Hajer Beji</span><div className="passport-stat"><i className="fa-solid fa-globe" /><span>Countries visited<strong>{visited}</strong></span></div><div className="passport-stat"><i className="fa-solid fa-heart" /><span>On your list<strong>{planned}</strong></span></div></div></div><button className="primary-btn profile-cta" onClick={openCountryPages}>Explore destinations <i className="fa-solid fa-arrow-right" /></button></section>
  }

  if (showProfile && showDestinations) {
    return (
      <section className="passport-destinations page-no-scroll">
        <div className="passport-destinations-heading"><div><span className="step-pill">YOUR TRAVEL PASSPORT</span><h1><i className="fa-solid fa-passport" /> My destinations</h1><p>Turn the pages of your passport and explore every country.</p></div><button className="back-to-index" onClick={() => setShowDestinations(false)}><i className="fa-solid fa-arrow-left" /> Profile card</button></div>
        <div className="destination-grid passport-destination-grid">
          {destinations.map((destination) => (
            <article className="destination-card passport-destination-card" key={destination.id} onClick={() => navigate(`/destinations/${destination.id}`)} role="button" tabIndex="0" onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') navigate(`/destinations/${destination.id}`) }}>
              <div className="card-image"><img src={destination.image} alt={`${destination.city}, ${destination.country}`} onError={(event) => { event.currentTarget.src = destination.fallback }} /><span className={`status-badge ${destination.status}`}>{destination.status === 'visited' ? '✓ Visited' : 'To visit'}</span></div>
              <div className="card-body"><div className="card-title"><h2>{destination.country}</h2><span className="rating-number">{destination.rating} <i className="fa-solid fa-star" /></span></div><p className="card-city">{destination.city}</p><div className="card-footer"><span className="stars">{[1, 2, 3, 4, 5].map((star) => <i key={star} className={`fa-${star <= destination.rating ? 'solid' : 'regular'} fa-star`} />)}</span>{destination.status === 'visited' ? <button className="memory-btn" type="button" onClick={(event) => { event.stopPropagation(); navigate(`/destinations/${destination.id}`) }}><i className="fa-solid fa-images" /> Memories</button> : <span>On my list</span>}</div></div>
            </article>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="cover-layout page-no-scroll">
      <div className="section-heading">
        <span className="step-pill">YOUR TRAVEL PASSPORT</span>
        <h1>Every page,<br /><em>a new adventure.</em></h1>
        <p>Keep your journeys and memories together in one personal travel passport.</p>
      </div>
      <button className="passport-cover" onClick={() => setShowProfile(true)} aria-label="Open your PassTounsi passport">
        <img src="/images/passport_tunisie.jpg" alt="Green Tunisian passport with gold details" />
        <span className="passport-name">PASSTOUNSI<small>My Travel Passport</small></span>
        <span className="cover-open"><i className="fa-solid fa-hand-pointer" /> Open your passport</span>
      </button>
    </section>
  )
}
