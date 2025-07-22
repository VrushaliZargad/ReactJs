import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDispaly from '../Components/ProductDisplay/ProductDispaly';

const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find(item => item.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDispaly product={product}/>
    </div>
  )
}

export default Product