import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const items = [
    ['/home', 'fa-passport', 'My Passport'],
    ['/countries', 'fa-globe', 'Countries'],
    ['/about', 'fa-circle-info', 'About'],
    ['/profile', 'fa-user', 'Profile'],
  ]

  return (
    <header className="topbar">
      <button className="brand-mark" onClick={() => navigate('/home')} aria-label="PassTounsi home">
        <i className="fa-solid fa-plane" aria-hidden="true" /><span>PassTounsi</span>
      </button>
      <nav aria-label="Main navigation">
        {items.map(([path, icon, label]) => (
          <button key={path} className={location.pathname === path ? 'active' : ''} onClick={() => navigate(path)}>
            <i className={`fa-solid ${icon}`} aria-hidden="true" /><span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="profile-menu">
        <span className="avatar">HB</span><span className="profile-name">Hajer Beji</span>
        <button className="icon-btn logout-btn" onClick={() => navigate('/login')} title="Sign out" aria-label="Sign out"><i className="fa-solid fa-right-from-bracket" aria-hidden="true" /></button>
      </div>
    </header>
  )
}
