'use client'

export default function Header() {

  const logoPath = "/images/challa_brothers.png";

  return (
    <header>
      <nav>
        <div className="logo-container">
          <img src={logoPath} alt="logo"
            style={{
              width: '8rem',
              height: '3rem'
            }}
          />
        </div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
        </ul>
      </nav>
    </header>
  );
}
