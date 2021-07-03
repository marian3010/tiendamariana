import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import './Cart.css';



function Cart () {
    const { cart, eliminoProduct, clear} = useContext(CartContext);
  
    const calcularPrecio = (price, cantCart) => {
      return price * cantCart;
    };
    
    return (
      <div className="carrito">
          <i class="fas fa-trash color-verde" onClick={() => {clear();}}>  Vacío el carrito </i>
        {cart.length ? (
          cart.map((product) => (
            <div className="cartProductsWrapper">
                <div key={product.id} className="cartProduct">
                    <p className="nombre">{product.title}</p>
                    <p>Precio total ${calcularPrecio(product.price, product.cantCart)}</p>
                    <p>Cantidad: {product.cantCart}</p>
                    <i class="fas fa-trash color-verde" onClick={() => {eliminoProduct(product);}} /> 
                   
                </div>
            </div>
              
          ))
          
        ) : (
          <h1>El carrito no tiene productos!</h1>
        )}
      </div>
    );
  };

  export default Cart;


