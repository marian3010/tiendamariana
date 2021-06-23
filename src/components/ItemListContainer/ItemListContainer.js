import { ItemList } from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { catalogoProds } from "../Item/catalogoProds";
import './ItemListContainer.css'
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
     
    const getProducts = new Promise((res, rej) => {
      setTimeout(function () {
        res(catalogoProds);
      }, 2000);
    });
  
    useEffect(() => {
      getProducts.then((res) => setProducts(res));
      getProducts.catch((err) => alert(err))
    });
  
    return ( 
        <div className = 'item-container'>
            <ItemList products={products}/>
            <ItemDetailContainer />
        </div>
    )
};

export default ItemListContainer

