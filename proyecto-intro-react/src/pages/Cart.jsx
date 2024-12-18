const Cart = ({ cart, setCart }) => {
    // Función para aumentar la cantidad
    const increaseQuantity = (name) => {
      setCart(
        cart.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    };
  
    const decreaseQuantity = (name) => {
        setCart((prevCart) =>
          prevCart
            .map((item) =>
              item.name === name ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0) 
        );
      };
      
  
    // Calcular total general
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
    return (
      <div className="cart-container"> {/* Contenedor centrado */}
        <h2>Carrito de Compras</h2>
        {cart.map((item) => (
          <div key={item.name} className="cart-item">
            <img src={item.img} alt={item.name} width="60" />
            <h3>{item.name}</h3>
            <p>Precio: ${item.price * item.quantity}</p>
            <div className="quantity-controls">
              <button onClick={() => decreaseQuantity(item.name)}>-</button>
              <span className="quantity">{item.quantity}</span>
              <button onClick={() => increaseQuantity(item.name)}>+</button>
            </div>
          </div>
        ))}
        {/* Contenedor de total ajustado con clase cart-total */}
        <div className="cart-total-container">
          <h3 className="cart-total">Total: ${total}</h3>
        </div>
        <button className="pagar-button">Pagar</button>
      </div>
    );
  };
  
  export default Cart;
  