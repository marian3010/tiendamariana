import ItemCount from '../ItemCount/ItemCount';

export const ItemDetail = ({ product }) => {
    
    const onAdd = (cantCart) => {
        alert(`Se agregaron al carrito ${cantCart} items`);
    };

    return ( 
        <div className="detalleItem">
            <img src = { product.img } alt = "product" />
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p>Stock: {product.stock}</p>
            <ItemCount stock = { product.stock } valorInicial = { 1 } onAdd = { onAdd } />
        </div>
    );
};