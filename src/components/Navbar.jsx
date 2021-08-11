import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        Navbar
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink style={{textDecoration:"none"}} className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/menu">
              Menu
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/carts">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>

      <Link to="/carts">
        <span className="badge bg-primary">
          <i style={{ color: "white" }} className="fas fa-cart-plus m-2"></i>
          {props.productsCount}
        </span>
      </Link>
    </nav>
  );
};

export default NavBar;
