import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        SRUBEE CAKES
      </h2>

      <div className="menu">

        <NavLink to="/">
          Home
        </NavLink>

        <NavLink to="/about">
          About
        </NavLink>

        <NavLink to="/gallery">
          Gallery
        </NavLink>

        <NavLink to="/order">
          Order
        </NavLink>

        <NavLink to="/reviews">
          Reviews
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;