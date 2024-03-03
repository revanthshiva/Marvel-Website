import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import Checkout from './Checkout';

const Product = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    const info = "1";

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                return response.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: '100vh', background: "black" }} >
            <div className='loader'>

            </div>
        </div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: '100vh', background: "black" }} >
            <div className='text-danger'>
                No Product Found
            </div>
        </div>;
    }

    return (
        <Container>
            <div className='row mt-5' style={{ width: "100%", height: "100vh" }}>
                <div className="col-6" style={{ height: '100%' }}>
                    <img style={{ width: "100%", height: "100%", objectFit: "contain" }} src={product.image} alt='no-image' />
                </div>
                <div className="col-6 mt-5 ">
                    <h1>{product.title}</h1>
                    <p>{product.category}</p>
                    <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: 1 < 2 ? '#ffc107' : '#888', cursor: 'pointer' }}
                    />
                    <p className='mt-5'>{product.description}</p>
                    <h3 className='mt-5'>Price RS. {product.price} /</h3>
                    <Link to={`/checkout?id=${product.id}`} className='btn btn-primary mt-5'>Buy Now</Link>
                </div>
            </div>
        </Container>
    );
}

export default Product;
