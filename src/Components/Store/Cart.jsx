import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/carts/1')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch API'); // 'error' should be 'Error'
                }
                return response.json();
            })
            .then(cart => {
                setCart(cart);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching API:', error);
                setLoading(false); // Ensure loading state is set to false even in case of failure
            });
    }, []);

    if (loading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }


    return (
        <Container>
            <div className="row d-flex justify-content-center">
                <div className="col-12 d-flex  justify-content-center">
                    <h1>CART</h1>
                </div>
                    <div className="col-12 mt-5" style={{ width: '100%' }} >
                        <Card>
                            <Card.Body>
                                <div className="row">
                                    <div className="col-4">
                                        <img src='' alt="product" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                    </div>
                                    <div className="col-4">
                                        <h6></h6>
                                        <h6>Rs. /-</h6>
                                    </div>
                                    <div className="col-4">
                                        <button className='btn btn-danger'> Remove</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
            </div>
        </Container>
    );
};



export default Cart;
