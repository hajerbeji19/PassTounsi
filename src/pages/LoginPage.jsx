import { useNavigate } from 'react-router-dom'
export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="login-shell">
      <section className="login-scenery">
        <div className="login-brand"><i className="fa-solid fa-plane" /> PassTounsi</div>
        <div className="login-tagline">
          <span>Your Digital Travel Passport</span>
          <strong>Every Page, A New Adventure.<br />Every Stamp, A Memory.</strong>
        </div>
        <div className="login-flight-path" aria-hidden="true">〰 ✈</div>
      </section>
      <section className="login-panel">
        <form className="login-card" onSubmit={(event) => { event.preventDefault(); navigate('/') }}>
          <img className="login-flag" src="/images/Tunisie.jpg" alt="Tunisian flag" />
          <p className="login-kicker">YOUR DIGITAL TRAVEL PASSPORT</p>
          <h1>Welcome to PassTounsi! <span aria-hidden="true">✈️</span></h1>
          <p className="muted">Your journeys, your memories, your passport.</p>
          <label className="input-with-icon">
            <i className="fa-solid fa-envelope" />
            <input aria-label="Email address" type="email" autoComplete="username" defaultValue="hajer.beji@isimg.tn" placeholder="Email address" />
          </label>
          <label className="input-with-icon">
            <i className="fa-solid fa-lock" />
            <input aria-label="Password" type="password" autoComplete="current-password" placeholder="Password" />
          </label>
          <button className="primary-btn login-submit" type="submit">Sign in</button>
          <p className="signup">Welcome aboard, Hajer Beji</p>
        </form>
      </section>
    </main>
  )
}
