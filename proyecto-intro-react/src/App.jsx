import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizza";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound"; 
import "./assets/App.css";

function App() {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Función para agregar una pizza al carrito
  const addToCart = (pizza) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.name === pizza.name);
      if (existingItem) {
        return prevCart.map((item) =>
          item.name === pizza.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...pizza, quantity: 1 }];
      }
    });
  };

  // Calcular total del carrito
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <div>
        <Navbar total={total} />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/pizza/:pizzaId" element={<Pizza addToCart={addToCart} />} />
          <Route path="/profile" element={<Profile />} /> {/* Nueva ruta para el perfil */}
          <Route path="*" element={<NotFound />} /> {/* Manejo del 404 */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
