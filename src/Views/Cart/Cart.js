import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import './Cart.css';



function Cart () {
  const { cart, eliminoProduct, clear, totalizarPrecio} = useContext(CartContext);

  const calcularPrecio = (price, cantCart) => {
    return price * cantCart;
  };
  return (
    <div className="carrito">
      {cart.length ? (
        <>
        <div>
          {cart.map((product) => (
            <div key={product.id} className="cartProductsWrapper">
              <div className="datos-producto">
                <p className="nombre">{product.title}</p>
                <p>Precio total: ${calcularPrecio(product.price, product.cantCart)}</p>
                <p>Cantidad: {product.cantCart}</p>
              </div>  
              <div className="btn-eliminar">
                <i class="fas fa-trash color-negro" onClick={() => {eliminoProduct(product);}}></i>
              </div>
           </div>
          ))}
        </div>
        <div>
          <i className="fas fa-trash vaciar-carro" onClick={() => {clear();}}>  Vaciar el carrito </i>
          <p className="vaciar-carro">Total Compra ${totalizarPrecio()}</p>
          <Link to="/order" className="boton-comprar" onClick={() => {}}>Terminar mi compra</Link>
        </div>  
        </>
      ) : (
        <div className="carrito-vacio">
          <h1>El carrito no tiene productos!</h1>
          <Link to="/" className="boton-lista" onClick={() => {}}>Ir al catálogo</Link>
        </div>  
      )}
       
    </div>
  );
};

export default Cart;


