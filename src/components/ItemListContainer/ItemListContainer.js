import { ItemList } from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import {getFirestore} from '../../firebase';
import './ItemListContainer.css'

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const getProducts = () => {
      const docs = [];
      const db = getFirestore();
      db.collection('productos')
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
				  docs.push({ ...doc.data(), id: doc.id });
					setProducts(docs);
          
				});
        setLoading(false);
			});
          
    };
   
    useEffect(() => {
      getProducts();
      
    },[]);
  
    return ( 
        <div className = 'item-container'>
          {loading? (<p>Loading .....</p>) : (<ItemList products={products}/>)}
        </div>
    )
};

export default ItemListContainer;

