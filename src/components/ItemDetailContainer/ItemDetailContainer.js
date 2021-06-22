import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
    const prodDetalle = {
        id: 2,
        name: "Marte",
        img: "https://gdurl.com/1ePk",
        stock: 5,
        price: 1200,
    };

    const [product, setProduct] = useState({});

    const getProducts = new Promise((res, rej) => {
        setTimeout(function() {
            res(prodDetalle);
        }, 2000);
    });

    useEffect(() => {
        getProducts
            .then((res) => setProduct(res))
            .catch((err) => alert(err))

    });

    return ( 
        <div className = "itemDetailCont">
            <ItemDetail product = { product } />
        </div>
    );
};