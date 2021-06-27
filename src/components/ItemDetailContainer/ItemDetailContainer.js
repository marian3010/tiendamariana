import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.css'
import { useParams } from "react-router";
import { catalogoProds } from "../Item/catalogoProds";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    
    
    const getProducts = new Promise((res, rej) => {
        setTimeout(function() {
            res(catalogoProds);
        }, 2000);
    });

    useEffect(() => {
       
        getProducts
          .then((res) => {
            res.forEach((item) => {
              if (item.id === id) {
                setProduct(item);
              }
            });
          })
          .catch((err) => alert(err))
         
      }, []);

    return ( 
        <div className = "itemDetailCont">
            <ItemDetail product = { product } /> 
        </div>
    );
};

export default ItemDetailContainer;