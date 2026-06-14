function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">

        <p className="welcome">
          Welcome to ♡
        </p>

        <h1>
          <span className="pink">SRUBEE</span>
          <br />
          <span className="dark">CAKES</span>
        </h1>

        <div className="line"></div>

        <p className="tagline">
          Baking memories into every celebration ✨
        </p>

        <button
          className="order-btn"
          onClick={() =>
            window.open(
              "https://www.instagram.com/srubeecakes/",
              "_blank"
            )
          }
        >
          ORDER VIA INSTAGRAM
        </button>

        <p className="order-note">
          DM us your cake idea, date & details 💖
        </p>

      </div>

      <div className="hero-right">
        <img
          src="/homepage.png"
          alt="cake"
        />
      </div>
    </section>
  );
}

export default Hero;