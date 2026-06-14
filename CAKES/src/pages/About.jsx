import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="about">
        <div className="about-left">
          <h2>About Us</h2>
          <br />
          <p>
            SRUBEE CAKES started with a passion for baking and a dream to make
            every celebration sweeter. From small home baking to custom
            celebration cakes, we focus on taste and love.
            <br />
            <br />
            At SRUBEE CAKES, every cake is crafted with love, creativity, and
            attention to detail.
            <br />
            From birthdays to weddings and custom celebrations, we create cakes
            that turn moments into memories.
          </p>
        </div>

        <div className="about-right">
          <div className="about-card">✨ Made Fresh Daily – Egg & Eggless</div>
          <div className="about-card">🎂 Premium Quality Ingredients</div>
          <div className="about-card">💖 Custom Designs for Every Occasion</div>
        </div>
      </section>
    </>
  );
}

export default About;
