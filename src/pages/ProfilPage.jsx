export default function Profil({ destinations }) {
  const visited = destinations.filter((destination) => destination.status === 'visited').length
  const planned = destinations.length - visited

  return (
    <section className="content-page profile-page-content page-no-scroll">
      <span className="step-pill">YOUR TRAVEL PROFILE</span><h1>Meet the<br /><em>traveller.</em></h1><p className="content-lead">Your passport profile brings your journeys together in one place.</p>
      <article className="profile-card"><div className="profile-card-avatar" role="img" aria-label="Hajer Beji">HB</div><div><h2>Hajer Beji</h2><p className="profile-card-email">hajer.beji@isimg.tn</p><div className="profile-info-grid"><div><span><i className="fa-solid fa-flag" /> Nationality</span><strong>Tunisian</strong></div><div><span><i className="fa-solid fa-passport" /> Passport number</span><strong>TRAVEL-001</strong></div><div><span><i className="fa-solid fa-calendar" /> Member since</span><strong>2026</strong></div><div><span><i className="fa-solid fa-location-dot" /> Based in</span><strong>Gabes, Tunisia</strong></div></div><div className="profile-stats"><span>{visited} countries visited</span><span>{planned} destinations to visit</span></div></div></article>
    </section>
  )
}
