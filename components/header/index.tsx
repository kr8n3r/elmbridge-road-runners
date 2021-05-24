function header() {
  return (
    <header>
      <div className="content">
        <picture>
          <source type="image/avif" srcSet="/images/logo.avif" />
          <img src="/images/logo.jpg" alt="Elmbridge Road Runners logo" />
        </picture>
        <nav aria-label="Main navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/info">Info</a></li>
            <li><a href="/10k">Our 10K</a></li>
            <li><a href="/couch-to-5k">Couch to 5k</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/directions">Directions</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default header