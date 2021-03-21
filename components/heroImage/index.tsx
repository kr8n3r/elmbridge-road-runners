function heroImage() {
  return (
    <div className="hero">
      <picture>
        <source type="image/avif" srcSet="/images/cover.avif" />  
        <img src="/images/cover.jpg" alt="Elmbridge Road Runners logo" />
      </picture>
    </div>
  )
}

export default heroImage