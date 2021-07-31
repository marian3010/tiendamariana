import { ItemList } from "../ItemList/ItemList";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFirestore } from '../../firebase';
import './ItemListContainer.css'

const ItemCategoryContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams(); 
    
    const getProdsCateg = () => {
      const docs = [];
      const db = getFirestore();
      db.collection('productos')
			.get()
			.then(function (querySnapshot) {
				querySnapshot.forEach(function (doc) {
				  docs.push({ ...doc.data(), id: doc.id });
					const catItem = docs.filter(
						(prod) => prod.category === id
					);
					setProducts(catItem);
          
				});
        setLoading(false);
			});
          
    };

    useEffect(() => {
      getProdsCateg();
            
    },[id]);
  
    return ( 
        <div className = 'item-container'>
          {loading? (<p>Loading .....</p>) : (<ItemList products={products}/>)}
        </div>
    )
};

export default ItemCategoryContainer;

