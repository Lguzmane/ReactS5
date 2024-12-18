import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../assets/App.css';

function Navbar({ total }) {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Pizzería Mamma Mía!</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/profile">Perfil</Link> {/* Se mantiene el enlace al perfil */}
        {/* Total redirige al carrito */}
        <span 
          className="cart-total" 
          style={{ cursor: "pointer" }} 
          onClick={() => navigate("/cart")}
        >
          🛒 Total: ${total}
        </span>
      </nav>
    </header>
  );
}

export default Navbar;
