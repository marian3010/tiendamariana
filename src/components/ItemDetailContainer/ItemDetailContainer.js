import React, { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router";
import { db} from '../../firebase';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);
    
    const getProduct = () => {
     
      db.collection('productos').doc(id).get()
          .then(snapshot => setProduct({...snapshot.data(), id: snapshot.id})
          )
    }; 

    useEffect(() => {
      getProduct();
      setLoading(false);
    }, []);
  
    return ( 
        <div className = "itemDetailCont">
           {loading ? <p>Loading....</p> : <ItemDetail product = {product} />}
        </div>
    );
}

export default ItemDetailContainer;