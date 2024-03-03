import React, { useState } from 'react';
import { Modal, Container } from 'react-bootstrap';
import Login from './Login';

const Signup = () => {

    const [formData, setData] = useState({
        fullName: '',
        email: '',
        tel: '',
        password: '',

    })

    const [message, setSuccessMsg] = useState('');
    const [errormsg, setErrorMsg] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        setData(presetData => ({
            ...presetData,
            [name]: value
        }))

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const checkData = Object.values(formData).every(value => value !== '');

        if (checkData) {
            setSuccessMsg("New User Registered Successfully");
            setSuccessMsg('Redirecting ...');


        

        } else {
            setErrorMsg("Please Fill All Fields");

            // Clear the error message after 1 second
            setTimeout(() => {
                setErrorMsg('');
            }, 1000);
        }
    }





    return (
        <Container fluid className="container-fluid bg-black w-100 d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <Container  className='w-25 '>
                {message && <p className='text-bg-success text-white p-2'>{message}</p>}
                {errormsg && <p className='text-bg-danger text-white p-2'>{errormsg}</p>}

                <Modal.Dialog>
                    <Modal.Header>
                        <h1 className='text-primary '>SignUp</h1>
                    </Modal.Header>
                    <Modal.Body className='mt-5'>

                        <form onSubmit={handleSubmit} >
                            <label htmlFor="username" className="form-label text-white">Full Name</label>
                            <input type="text" id="fullName" name="fullName" className="form-control" placeholder="Username" value={formData.fullName} onChange={handleChange} />
                            <label htmlFor="email" className="mt-3 form-label text-white">Email</label>
                            <input type="email" id="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
                            <label htmlFor="email" className="mt-3 form-label text-white">Mobile Number</label>
                            <input type="tel" id="tel" name="tel" className="form-control" placeholder="Email" value={formData.tel} onChange={handleChange} />
                            <label htmlFor="password" className="mt-3 form-label text-white">Password</label>
                            <input type="password" id="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} />
                            <label htmlFor="password" className="mt-3 form-label text-white">Password</label>
                            <input type="password" id="repeatPassword" name="repeatPassword" className="form-control" placeholder="Password" value={formData.repeatPassword} onChange={handleChange} />
                            <button type='submit' className='mt-5 btn btn-primary'>SignUp</button>
                        </form>

                    </Modal.Body>
                </Modal.Dialog>
            </Container>
         
        </Container>

    );
};

export default Signup;
