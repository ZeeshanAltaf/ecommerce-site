import React, {createContext, useState} from "react";

import dslr from "../images/dslr.jpg";
import headphones from "../images/headphones.jpg";
import iphone from "../images/iphone.jpg";
import microphone from "../images/microphone.jpg";
import perfume from "../images/perfume.jpg";
import rings from "../images/rings.jpg";
import shoes from "../images/shoes.jpg";
import watch from "../images/watch.jpg";

export const ProductsContext = createContext();
    



const ProductsContextProvider = (props) => {
    const [products] = useState([
        {id: 1, name: 'Dslr', price: 300, image: dslr, status: 'hot'},
        {id: 2, name: 'Headphones', price: 200, image: headphones, status: 'new'},
        {id: 3, name: 'Iphone', price: 900, image: iphone, status: 'hot'},
        {id: 4, name: 'Microphone', price: 150, image: microphone, status: 'hot'},
        {id: 5, name: 'Perfume', price: 90, image: perfume, status: 'new'},
        {id: 6, name: 'Rings', price: 50, image: rings, status: 'hot'},
        {id: 7, name: 'Shoes', price: 100, image: shoes, status: 'hot'},
        {id: 8, name: 'Watch', price: 130, image: watch, status: 'new'}
    ]);

    return (
      <ProductsContext.Provider value={{ products: [...products] }}>
        {props.children}
      </ProductsContext.Provider>
    );
}

export default ProductsContextProvider;

