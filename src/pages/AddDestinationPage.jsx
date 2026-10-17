import { useState } from 'react'

export default function AddDestinationPage({ onClose, onAdd }) {
  const [rating, setRating] = useState(0)

  function submit(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const country = data.get('country').trim()
    const slug = country.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    onAdd({
      id: Math.random(), country, city: data.get('city').trim(), status: data.get('status'), rating,
      days: Number(data.get('days')) || 1, date: data.get('date') || 'Not planned', budget: Number(data.get('budget')) || 0,
      description: data.get('description') || 'A new place to discover and remember.', image: data.get('image').trim() || `/destinations/${slug}.jpg`,
      fallback: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=85',
      travelType: data.get('travelType').trim(), companions: data.get('companions').trim(), season: data.get('season'), gallery: [], story: '', favoriteMoment: '',
      favoriteFood: '', favoritePlace: '', soundtrack: '', souvenirBought: '', oneWord: '', travelMood: '', bestExperience: '', wouldVisitAgain: '', travelTip: '',
    })
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="add-modal" role="dialog" aria-modal="true" aria-labelledby="add-title" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose} aria-label="Close"><i className="fa-solid fa-xmark" /></button>
        <span className="step-pill">NEW DESTINATION</span><h2 id="add-title">Add a destination</h2>
        <form onSubmit={submit}>
          <div className="form-grid">
            <label>Country<input className="form-control" name="country" required placeholder="e.g. Japan" /></label>
            <label>City<input className="form-control" name="city" required placeholder="e.g. Kyoto" /></label>
            <label>Travel date<input className="form-control" name="date" placeholder="e.g. July 15, 2026" /></label>
            <label>Budget (TND)<input className="form-control" name="budget" type="number" min="0" /></label>
            <label>Duration (days)<input className="form-control" name="days" type="number" min="1" defaultValue="1" /></label>
            <label>Status<select className="form-control" name="status"><option value="visited">Visited</option><option value="planned">To visit</option></select></label>
            <label>Travel type<input className="form-control" name="travelType" /></label><label>Travel companions<input className="form-control" name="companions" /></label>
            <label>Season<select className="form-control" name="season"><option>Summer</option><option>Spring</option><option>Autumn</option><option>Winter</option></select></label>
          </div>
          <label>Rating<div className="interactive-rating" role="group" aria-label="Rate this destination">
            {[1, 2, 3, 4, 5].map((star) => <button key={star} type="button" className={star <= rating ? 'selected' : ''} aria-label={`${star} star`} onClick={() => setRating(star)}><i className="fa-solid fa-star" /></button>)}
          </div></label>
          <label>Description<textarea className="form-control" name="description" rows="2" /></label>
          <label>Image URL (optional)<input className="form-control" name="image" type="url" /></label>
          <div className="modal-actions"><button className="cancel-btn" type="button" onClick={onClose}>Cancel</button><button className="primary-btn modal-submit" type="submit"><i className="fa-solid fa-plus" /> Add destination</button></div>
        </form>
      </div>
    </div>
  )
}
