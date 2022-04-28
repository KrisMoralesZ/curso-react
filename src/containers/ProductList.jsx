import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '../styles/ProductList.scss';
import axios from 'axios';

const API ='http://localhost:3000/';

const ProductList = () => {
    const products = useGetProducts(API);
    return (
        <section className="main-container">
            <div className="ProductList">
                {products.map(product => (
                    <ProductItem product={product} key={product.id} />
                ))}
            </div>
        </section>
    );
}

export default ProductList;