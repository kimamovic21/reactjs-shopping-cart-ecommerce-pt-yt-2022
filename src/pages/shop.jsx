import React from 'react';
import './shop.css';
import { PRODUCTS } from '../data/products';
import Product from './product';

const Shop = () => {
  return (
    <div className='shop'>

        <div className='shopTitle'>
            <h1>React Shop</h1>
        </div>

        <div className='products'>
            {PRODUCTS.map((product) => (
                <Product key={product.id} data={product}/>
            ))}
        </div>

    </div>
  );
};

export default Shop;
