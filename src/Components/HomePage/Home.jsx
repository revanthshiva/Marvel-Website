import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import './home.css';
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player';
import trailer1 from '../../assets/trailer1.jpg';
import Trailer2 from '../../assets/Trailer2.jpg';
import Trailer3 from '../../assets/Trailer3.jpg';
import Trailer4 from '../../assets/Trailer4.jpg';


export const Home = () => {


    const [trailerUrl, setTrailerUrl] = useState('https://www.youtube.com/watch?v=RUcWv9mbEo8');





    return (
        <>

            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img src="https://www.redwolf.in/image/cache/catalog/sliders/Drop-cut-new-slider-1920-1920x450.jpg?m=1702356582" alt="no-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img src="https://www.redwolf.in/image/cache/catalog/sliders/x-men-dp-wolverine-slider-1920-1920x450.jpg?m=1708604336" alt="no-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img src="https://www.redwolf.in/image/cache/catalog/sliders/hoodies-slider-1920-1920x450.jpg?m=1699335455" alt="no-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Carousel.Item>
                    <Carousel.Item interval={700}>
                        <img src="https://www.redwolf.in/image/cache/catalog/sliders/fullsleeves-slider-1920-1920x450.jpg?m=1699946779" alt="no-image" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    </Carousel.Item>
                </Carousel>
            </div>

            <Container fluid>
                <div className="row  text-white" style={{ background: "#151515" }}>
                    <div className='col-6  mt-5 ps-5  '>
                        <img src="https://cdn.marvel.com/content/1x/mulogo_lob_log_eye_01_1.png" width={50} alt="" srcset="" />
                        <h4 className='mt-3'>AVAILABLE NOW</h4>
                        <h1 className='mt-3'>NEW ON MARVEL UNLIMITED</h1>
                        <h3 className='mt-3'>Read these plus 30,000+ digital comics for $9.99 a month!</h3>
                        <Link className='btn btn-danger mt-2' >Get Marvel Unlimited</Link>
                    </div>
                    <div className='col-6 hero2div2 hero2'>

                    </div>
                </div>

            </Container >

            <Container  >
                <div className='container_merg' style={{ width: '100%', height: '100vh' }}>

                    <Carousel>
                        <Carousel.Item >
                            <img className='me-3' src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/40/654bb027d35e6/portrait_uncanny.jpg" alt="" srcset="" />
                            <img className='me-3' src="https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/6553ccb903fa8/portrait_uncanny.jpg" alt="" srcset="" />
                            <img className='me-3' src="https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/6553ccd72438e/portrait_uncanny.jpg" alt="" srcset="" />
                            <img className='me-3' src="https://cdn.marvel.com/u/prod/marvel/i/mg/8/60/6553cca0c0c41/portrait_uncanny.jpg" alt="" srcset="" />
                        </Carousel.Item>

                    </Carousel>
                </div>
            </Container>

            <Container fluid className='bg-black'>
                <div className='container_merg2 bg-black text-white' style={{ width: '100%', height: '100vh' }}>

                    <div className='d-flex justify-content-center align-items-center pt-5'>
                        <h3> Marvel Trailer</h3>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5 d-flex justify-content-center align-items-center align-content-center w-100" >
                            <ReactPlayer
                                url={trailerUrl}
                                controls={false}
                                width={1080}
                            />
                        </div>
                        <div className="col-12 mt-5 trailerImg">
                            <Carousel>
                                <Carousel.Item className="d-flex justify-content-around">
                                    <img src={trailer1} onClick={() => setTrailerUrl("https://www.youtube.com/watch?v=RUcWv9mbEo8")} alt="" srcset="" />

                                    <img src={Trailer2} onClick={() => setTrailerUrl("https://www.youtube.com/watch?v=ijpy5ljnC_Q")} alt="" srcset="" />

                                    <img src={Trailer3} onClick={() => setTrailerUrl("https://www.youtube.com/watch?v=uJMCNJP2ipI")} alt="" srcset="" />
                                    <img src={Trailer4} onClick={() => setTrailerUrl("https://www.youtube.com/watch?v=wS_qbDztgVY")} alt="" srcset="" />

                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>




            <div className='d-flex justify-content-center align-items-center mt-5 pt-5'>

            </div>


            <Container>

                <div className=' mt-5 mb-5'>
                    <h3>COOL T-SHIRTS & DESIGNER MERCH ONLINE</h3>

                    <p className='mt-2'>
                        Redwolf is an indie clothing label that brings you the most amazing t-shirts and accessories online inspired by everything pop culture! Redwolf offers a wide range of products from cool t shirts and sweatshirts to accessories like badges, posters, laptop skins and fridge magnets. A t-shirt is a perfect canvas to showcase your creativity, passion and personality. At Redwolf, we work with some of the best designers and illustrators from all around the globe to offer you a fresh and unique selection of designer t-shirts.

                        If you’re looking for a t-shirt to help you express yourself and the things you love, we have you covered. Check out our collection of cool t shirts online in India. From funny t-shirts with epic parodies and hilarious one liners to intricate graphic designs inspired by your favourite movie and TV show characters. We have something for everyone! Our collection of online t shirts are screen printed to perfection on 100% cotton Redwolf tshirts. We provide cash on delivery and free shipping all over India with a hassle free return policy to make sure you have a pleasant online shopping experience.

                        All artwork posted on this website is intended as fan art and is not purported to be official merchandise unless indicated otherwise. If you have any issues regarding the artwork, do write in to us at contact@redwolf.in</p>

                </div>
            </Container>

        </>

    )

}
