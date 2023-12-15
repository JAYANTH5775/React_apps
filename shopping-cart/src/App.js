import React, { useState } from 'react';

import './App.css';

import SearchComponent from './Components/SearchComponents';
import ShowProductComponent from './Components/ShowProductComponent';
import UserCartProduct from './Components/UserCartComponent';




function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: 'Pearl Choker',
      price: 500,
      image: ""
    },

    {
      id: 2,
      name: 'Men T-Shirt',
      price: 500,
      image: ""
    },

    {
      id: 2,
      name: 'Men T-Shirt',
      price: 500,
      image: ""

    }

  ]);



  const [cartProduct, setCartProduct] = useState([]);
  const [searchProduct, setSearchProduct] = useState('');

  const addProductToCartFunction = (Men_adorn) => {
    const alreadyProduct = cartProduct.find(item => item.product.id === Men_adorn.id);
    if (alreadyProduct) {

      const latestCartUpdate = cartProduct.map(item => item.product.id === Men_adorn.id ? { ...item, quantity: item.quantity + 1 }
        : item);
      setCartProduct(latestCartUpdate);


    }

    else {
      setCartProduct([...cartProduct, { product: Men_adorn, quantity: 1 }]);

    }
  };

  const deleteProductFromCartFunction = (Men_adorn) => {
    const updatedCart = cartProduct.filter(item => item.product.id !== Men_adorn);
    setCartProduct(updatedCart);

  };

  const totalAmountCalFunction = () => {
    return cartProduct.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const productSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
  }

  const filterProductFunction = product.filter((product) => product.name.toLowerCase().includes(searchProduct.toLowerCase()));

  return (
    <div className='App'>

      <SearchComponent searchProduct={searchProduct}
        productSearchUserFunction={productSearchUserFunction} />
      <main className='App-main'>
        <ShowProductComponent
          product={product}
          filterProductFunction={filterProductFunction}
          addProductToCartFunction={addProductToCartFunction}
        />

        <UserCartProduct
          cartProduct={cartProduct}

          deleteProductFromCartFunction={deleteProductFromCartFunction}
          totalAmountCalFunction={totalAmountCalFunction}
          setCartProduct={setCartProduct}

        />
      </main>
    </div>
  );


}



export default App; 