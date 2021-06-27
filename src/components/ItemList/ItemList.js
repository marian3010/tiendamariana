import './ItemList.css'
import Item from "../Item/Item";

export const ItemList = ({ products }) => {
  return (
    <div className = "grilla" id = "ZoomOut">
          {products.map((product) => (
          <Item product={product} />))}
    </div>
  );
};