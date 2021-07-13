import { ItemList } from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db} from '../../firebase';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams(); 
    
    const getProducts = () => {
      const docs = [];
      db.collection('productos').onSnapshot((querySnapshot) => {
        querySnapshot.forEach ((doc) => {
          docs.push ({ ...doc.data(), id: doc.id})
        });
      });

     // if (categoryId) {
      //  const prodsCategoria = docs.filter(producto => producto.category === categoryId); 
       // setProducts(prodsCategoria);
     // } else {  
       setProducts(docs);
       console.log("Productos",docs);
      //}
    };

    useEffect(() => {
      getProducts();
      setLoading(false);
      

    },[]);
  
    return ( 
        <div className = 'item-container'>
          {loading? <p>Loading .....</p> : <ItemList products={products}/>}
        </div>
    )
};

export default ItemListContainer

