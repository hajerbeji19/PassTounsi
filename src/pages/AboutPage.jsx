export default function AboutPage() {
  return (
    <section className="content-page about-page">
      <span className="step-pill">ABOUT PASSTOUNSI</span>
      <h1>Every page,<br /><em>a new adventure.</em></h1>
      <p className="content-lead">PassTounsi is your digital travel passport: a personal place to collect the countries you visit, remember the people you travel with and keep the stories behind every journey.</p>
      <div className="about-purpose-grid">
        <article><span className="about-icon"><i className="fa-solid fa-passport" /></span><h2>A passport for your stories</h2><p>Give every trip its own page, with the details and memories that make it yours.</p></article>
        <article><span className="about-icon"><i className="fa-solid fa-images" /></span><h2>Memories worth keeping</h2><p>Build a gallery, add captions and write your story while every little detail is still fresh.</p></article>
        <article><span className="about-icon"><i className="fa-solid fa-map-location-dot" /></span><h2>More journeys ahead</h2><p>Keep visited destinations and future travel plans together in one growing passport.</p></article>
      </div>
      <p className="about-slogan">Every Page, A New Adventure. Every Stamp, A Memory.</p>
    </section>
  )
}
