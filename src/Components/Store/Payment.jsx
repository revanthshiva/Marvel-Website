import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import './loader.css'

function Payment() {

    const [payment, setPayment] = useState("Payment Processing");

    const paymentSuccess = () => {
        setPayment("Payment Successful");
    }

    const redirect = () => {
        setPayment("Redirecting");
        setTimeout(() => {
            window.location.href = "/";
        }, 1000);
    }


    useEffect(() => {
        setTimeout(() => {
            paymentSuccess()
        }, 3000);

        setTimeout(() => {
            redirect()

        }, 5000)

    }, [])


    return (
        <div className='bg-black '>
            <Container className='d-flex justify-content-center align-items-center text-danger' style={{ height: "90vh" }}>

                <div>
                    { (payment === "Payment Successful")  ?
                    <div  className="text-success">
                        <h1 >{payment}</h1>
                    </div>
                        : (payment === "Payment Processing" ) ? 
                            <div className='d-flex flex-column justify-content-center align-items-center' >
                                <div className='loader'></div>
                                <h5 className=' mt-3' >{payment}</h5>
                            </div>
                            : (payment === "Redirecting") ?
                                <div className='d-flex flex-column justify-content-center align-items-center' >
                                    <div className='loader'></div>
                                    <h5 className=' mt-3' >{payment}</h5>
                                </div>
                                : null }
                </div>

            </Container>
        </div>
    )



}


export default Payment;