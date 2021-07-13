import { ItemList } from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db} from '../../firebase';
import './ItemListContainer.css'

const ItemCategoryContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 
    
    console.log("category", id);

    const getProdsCateg = () => {
      const docs = [];
      db.collection('productos').onSnapshot((querySnapshot) => {
        querySnapshot.forEach ((doc) => {
          console.log("DOC", querySnapshot);
            if (doc.category === "flores"){
                docs.push ({ ...doc.data(), id: doc.id})
            };
        });
        setProducts(docs);
        
      });
    };

    useEffect(() => {
      getProdsCateg();
      console.log("Loading", loading);
      setLoading(false);
      console.log("productos",products);                 
    },[]);
  
    return ( 
        <div className = 'item-container'>
          {loading? <p>Loading .....</p> : <ItemList products={products}/>}
        </div>
    )
};

export default ItemCategoryContainer

