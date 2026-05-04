function Hero() {
  return (
    <section className="hero-section">
      <p className="hero-eyebrow">Portfolio</p>
      <h2>Hi, I&apos;m Shayan. I build practical, thoughtful software.</h2>
      <p>
        I care about useful products, clean systems, and the small details that
        make software easier to understand and use.
      </p>
      <div className="hero-actions" aria-label="Portfolio actions">
        <a className="button button-primary" href="/#projects">
          View Projects
        </a>
        <a className="button button-secondary" href="mailto:hello@example.com">
          Contact Me
        </a>
      </div>
    </section>
  );
}

export default Hero;
