import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Product from './Product';

const Products = ({ cat, filters, sort }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await axios.get(
                    cat
                        ? `http://localhost:5000/api/products?category=${cat}`
                        : "http://localhost:5000/api/products"
                );
                setProducts(res.data);
            } catch (err) {

            };

        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter(item =>
                Object.entries(filters).every(([key, value]) =>

                    item[key].includes(value)
                )
            )
        )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.createdAt - b.createdAt)
            );
        } else if (sort === "asc") {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => a.price - b.price)
            );
        } else {
            setFilteredProducts((prev) => 
                [...prev].sort((a, b) => b.price - a.price)
            );
        }
    }, [sort]);
    

    return (
        <div>
            <div className="row mt-4">
                {cat 
                ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
                : products.slice(0, 8).map((item) => <Product item={item} key={item.id} />
                )}
            </div>
        </div>
    )
}

export default Products