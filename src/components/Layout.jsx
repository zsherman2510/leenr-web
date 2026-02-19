import { Link } from 'react-router-dom';

export function Layout({ children }) {
  return (
    <>
      <div className="bg-glow" />
      <header className="topbar">
        <Link className="brand" to="/">
          <img src="/assets/lightmode_logo.png" alt="Leenr" className="logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <div className="footer-brand">
          <img src="/assets/lightmode_logo.png" alt="Leenr" className="footer-logo" />
          <p>© {new Date().getFullYear()} Leenr. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </footer>
    </>
  );
}
