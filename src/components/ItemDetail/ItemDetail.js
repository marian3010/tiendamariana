export const ItemDetail = ({ product }) => {

    return ( 
        <div>
            <img src = { product.img } alt = "product" />
            <p>{product.title}</p>
            <p>${product.price}</p>
        </div>
    );
};