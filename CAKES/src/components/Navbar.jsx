import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      <h2 className="logo">SRUBEE CAKES</h2>

      {/* hamburger button */}
      <div className="toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={open ? "menu active" : "menu"}>

        <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <NavLink to="/gallery" onClick={() => setOpen(false)}>Gallery</NavLink>
        <NavLink to="/order" onClick={() => setOpen(false)}>Order</NavLink>
        <NavLink to="/reviews" onClick={() => setOpen(false)}>Reviews</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;