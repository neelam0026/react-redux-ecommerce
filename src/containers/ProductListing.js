import React, { useEffect, useState }from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent';

function ProductListing() {
  const [myProducts, setProducts] = useState({}) //local state

    const products = useSelector((state) => state); //this hook is used to accces the state //global state
    // console.log(products, "p:");
    const dispatch = useDispatch() // this is used for updating the state

    const fetchProducts = async () =>{
      const response = await axios.get('https://fakestoreapi.com/products').catch((err) =>
          alert(`Something went wrong! ${err}`) 
      )
      console.log(`res`, response.data)

      setProducts(response.data)
    }

   
    //fetch data on page load using useEffect() hook and api call to get product listings
useEffect(()=>{
  fetchProducts();
  dispatch({type:"SET_PRODUCT", payload: myProducts}) //it will search for its reducer to check what action to perform or how the state object needs to be updated
}, [])

console.log(products, 'from updated state')
  return (
    <div className="ui grid container">
        <h1>ProductListing</h1>
        <ProductComponent />
    </div>
  )
}

export default ProductListing;


// rfce for create function based component