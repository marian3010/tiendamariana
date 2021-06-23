
export const Item = ({ product }) => {

    return (
      <div className="productWrapper">
        <img src={product.img} alt="product" />
        <p>{product.title}</p>
        <p>${product.price}</p>
        
      </div>
       
    )
}    
