import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = ({ addToCart }) => {
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate(); 

  // Cargar la lista de pizzas desde la API
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((error) => console.error("Error al cargar pizzas:", error));
  }, []);

  return (
    <div>
      <Header />
      <div className="card-container">
        {pizzas?.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id} 
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={pizza.ingredients}
            addToCart={() => addToCart(pizza)}
            onViewMore={() => navigate(`/pizza/${pizza.id}`)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
