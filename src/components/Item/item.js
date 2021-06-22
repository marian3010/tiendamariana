import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ product }) => {

    const onAdd = (cantCart) => {
        alert(`Se agregaron al carrito ${cantCart} items`);
    };

    return (
      <div className="productWrapper">
        <img src={product.img} alt="product" />
        <p>{product.title}</p>
        <p>${product.price}</p>
        <ItemCount stock = { product.stock } valorInicial = { 1 } onAdd = { onAdd } />
      </div>
    );
  };
