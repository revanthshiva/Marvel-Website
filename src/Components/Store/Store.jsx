import React, { useState, useEffect } from 'react';
import { Container, Card, CardHeader, CardBody, CardFooter } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './loader.css';
const Store = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); // Log the response data for debugging
                setData(data);
                setLoading(false);
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <div className='d-flex justify-content-center align-items-center' style={{width:"100%", height:'100vh', background:"black" }} >
            <div className='loader'>

            </div>
        </div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (

        <div className= 'bg-black '>

            <div>
                <img src="https://www.redwolf.in/image/cache/catalog/banners/official-merch/marvel-new-category-banner-1920-1920x350.jpg?m=1687857130" alt="no-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>

            <Container className='mt-5   bg-white'>

                
                    <div className='row gap-2 d-flex justify-content-center'>
                        {data.map(item => (

                            <Card key={item.id} className='col-3 mt-3'>
                                <CardHeader className='d-flex justify-content-center' style={{ height: "40vh" }}>
                                    <img src={item.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                </CardHeader>

                                <CardBody>
                                    <h5>{item.title}</h5>
                                    <h4>RS {item.price}/</h4>
                                    <p>{item.description}</p>
                                </CardBody>
                                <CardFooter className='float-right'>
                                    <p>{item.category}</p>
                                    <Link className='btn btn-primary' to={`/product?id=${item.id}`}>
                                        Buy Now
                                    </Link>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
            </Container>

        </div>
    );
}

export default Store;
