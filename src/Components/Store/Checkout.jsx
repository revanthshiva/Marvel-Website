import React, { useEffect, useState } from 'react';
import { Card, CardFooter, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import {Link} from 'react-router-dom';
const Checkout = () => {

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const checkoutId = searchParams.get('id');

    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (checkoutId) {
            fetch(`https://fakestoreapi.com/products/${checkoutId}`)
                .then(response => response.json())
                .then(data => setProduct(data))
                .catch(error => console.error('Error fetching product:', error));
        }
    }, [checkoutId]);




    return (
        <>
            <Container style={{ height: "100vh" }}>
                <div className="row mt-5">
                    <div className="col-12">
                        <h1>CheckOut</h1>
                        <hr style={{ width: "500px", border: "10px solid red", borderRadius: "10px" }} />
                    </div>
                    <div className="col-12 mt-4">
                        {product ? (
                            <Card>
                                <Card.Body className='d-flex gap-5'>
                                    <img src={product.image} alt="no-image" style={{objectFit:"contain",width:"5%"}} />
                                    <div className='d-flex flex-column justify-content-center'>
                                        <h5>{product.title}</h5>
                                        <h4> RS.{product.price}</h4>
                                        <p>Quantity <b>(1)</b></p>

                                    </div>
                                </Card.Body>
                                <CardFooter className='d-flex  justify-content-end'>
                                    <h3>Total = Rs.{product.price}</h3>
                                </CardFooter>
                            </Card>
                        ) : (
                            <p>Loading...</p>
                        )}

                    </div>

                    <div className='mt-5 d-flex  justify-content-end '>
                        <Link to={'/payment'} className='btn btn-primary'>Checkout</Link>

                    </div>
                </div>
            </Container>
        </>
    );

}

export default Checkout;
