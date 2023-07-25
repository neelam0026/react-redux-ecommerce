import React from 'react'
import {  useSelector } from 'react-redux';


const  ProductComponent = () => {
    const products = useSelector((state) => state);
    // console.log(`products: ${products}`)
    // const {id, title} = products;
  return (
    <div className="four column wide">
        <div className="ui link card">
            <div className="image"></div>
            <div className="content">
                <div className="header">ProductComponent</div>
            </div>
        </div>
</div>
  )
}

export default ProductComponent