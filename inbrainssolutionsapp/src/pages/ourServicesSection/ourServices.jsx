import React, { useRef, useEffect } from 'react'
import './ourService.css'
import feedbackimg from '../../images/feedback.png'
import bookfellImg from '../../images/book-fell.png'
import laptopIconImg from '../../images/laptop-icon.png'
import img1 from '../../images/game-badlo-scroll.png'
import img2 from '../../images/dhartii-scroll.png'
import img3 from '../../images/josh-scroll.png'
import img4 from '../../images/rupee-scroll.png'
import img5 from '../../images/justjane-scroll.png'
import img6 from '../../images/sanddoller-scroll.png'
import img7 from '../../images/dating-scroll.png'
import vidioicon from '../../images/video-icon.png'
import mean from '../../images/mean.png'
import mern from '../../images/mern.png'
import wordpress from '../../images/wordpress.png'
import shopify from '../../images/shopify.png'
import cocos from '../../images/cocos.png'
import react from '../../images/react.png'

import sanddollor from '../../images/sanddollor.png'
import justjane from '../../images/justjane.png'
import gameebadlo from '../../images/gamebadlo.png'
import dharti from '../../images/dhartii.png'
// import dharti from '../../images/dhartii.png'
import rupee from '../../images/rupee.png'
import josh from '../../images/josh.png'
import test_qut from '../../images/test_qut.png'
import khiladiadda from '../../images/khiladiadda.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import { Autoplay, FreeMode } from 'swiper/modules'
import { Stack, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom';





const clients = [
    { img: img1, title: "Game Badlo", desc: "Welcome to GameBadlo! It's more than just a game—it's your ultimate poker playground!" },
    { img: img2, title: "Dhartii", desc: "India’s largest sustainable fashion portal with an attractive UI." },
    { img: img3, title: "Josh Bevertech Ltd.", desc: "Showcasing the latest fizzy drinks in style." },
    { img: img4, title: "RupeeQuicker", desc: "A clutter-free UI and minimalist design to drive conversions." },
    { img: img5, title: "JustJane420", desc: "Custom app for a Cannabis dispensary, boosting organic traffic." },
    { img: img6, title: "Sand Dollar Dubai", desc: "Enhanced UI for better user engagement in fashion eCommerce." },
    { img: img7, title: "FlirtFleet", desc: "A dating app with robust security for the Indian audience." },
];

// Add cloned first and last slides for smooth looping
const extendedClients = [clients[clients.length - 1], ...clients, clients[0]];

const OurServices = () => {
    const navigate = useNavigate();

    const sliderRef = useRef(null);
    const slideWidth = useRef(0);

    useEffect(() => {
        if (sliderRef.current) {
            // Get exact width of a slide (including margin)
            slideWidth.current = sliderRef.current.children[0].offsetWidth + 20;
            // Move to the first real slide (not the cloned one)
            sliderRef.current.scrollTo({ left: slideWidth.current, behavior: "instant" });
        }
    }, []);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -slideWidth.current, behavior: "smooth" });

            setTimeout(() => {
                if (sliderRef.current.scrollLeft <= 0) {
                    // Reset to the last real slide
                    sliderRef.current.scrollTo({ left: slideWidth.current * (clients.length), behavior: "instant" });
                }
            }, 500);
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: slideWidth.current, behavior: "smooth" });

            setTimeout(() => {
                if (sliderRef.current.scrollLeft >= slideWidth.current * (clients.length + 1)) {
                    // Reset to the first real slide
                    sliderRef.current.scrollTo({ left: slideWidth.current, behavior: "instant" });
                }
            }, 500);
        }
    };


    let data = [
        {
            "color": "yellow",
            "image": test_qut,
            "para": "Invincible Brains  Solutions' exceptional digital resources and specialist network have fueled our growth and success over the past year. I highly recommend their services.",
            "span": "Smoke Break Agency",
            "textColor": "black"
        },
        {
            "color": "green",
            "image": test_qut,
            "para": " Invincible Brains  Solutions enhanced our online visibility and customeacquisition, leading to more loan applications. Their deepunderstanding of financial services makes them invaluable.",
            "span": "Salary Day",
            "textColor":"black"


        }
    ]


    return (
        <>
            <div className="digital-dream-section">
                <h3>Craft Your Digital Dream</h3>
                <p>
                    Invincible Brains Solutions builds success with stunning design, cutting-edge tech & powerful marketing. Empower your vision with a superb range of digital products & white-label gaming solutions.
                </p>
                <button className='whoweare' onClick={()=>navigate('/contact')  }>Who We Are</button>
            </div>
            <div className="ourServices">
                <div className="serviceheading">
                    <h3>OUR SERVICES</h3>
                    <div className="line"></div>

                </div>
                <div className="service-item-section">
                    <div className="service-item">
                        <img src={feedbackimg} alt="" height="75px" width="75px" />
                        <h3>Real Money Game Development</h3>
                        <p>We develop captivating real-money games with innovative features. Our cutting-edge technology helps you build a thriving user base and achieve sustainable success.</p>
                    </div>
                    <div className="service-item">
                        <img src={bookfellImg} alt="" height="75px" width="75px" />
                        <h3>Hand Crafted Apps</h3>
                        <p>We craft beautiful, powerful custom apps. Meticulous design meets cutting-edge tech for an exceptional user experience and engagement.</p>
                    </div>
                    <div className="service-item">
                        <img src={laptopIconImg} alt="" height="75px" width="75px" />
                        <h3>Website Development</h3>
                        <p>Websites tell your brand's story. We craft immersive experiences with stunning visuals for a captivating online journey. Let's build your website for success.
                        </p>
                    </div>


                    <div className="service-item">
                        <img src={feedbackimg} alt="" height="75px" width="75px" />

                        <h3>Social Media Marketing</h3>
                        <p>Stop the Scroll! We craft captivating content that cuts through the noise and grabs attention on social media. Get noticed, get likes, get fans.</p>
                    </div>
                    <div className="service-item">
                        <img src={bookfellImg} alt="" height="75px" width="75px" />
                        <h3>Performance Marketing</h3>
                        <p>Make every click count. We go beyond likes and shares, driving real action through targeted performance marketing campaigns.</p>
                    </div>
                    <div className="service-item">
                        <img src={laptopIconImg} alt="" height="75px" width="75px" />
                        <h3>
                            UI/UX Design
                        </h3>
                        <p>
                            Our UI/UX design services go beyond the surface, building an experience. Create intuitive and delightful interactions for your users.
                        </p>
                    </div>
                </div>

                <button onClick={()=>navigate('/contact')}>Let's talk</button>
            </div>



            {/* <div className="our-client-container">
                <h3 className='our-clent-img'>OUR CLIENTS</h3>

                <div className="slider-container">
                    <button className="arrow left" onClick={scrollLeft}>◀</button>

                    <div className="slider" ref={sliderRef}>
                        {extendedClients.map((client, index) => (
                            <div className="slide" key={index}>
                                <img src={client.img} alt={client.title} className="slide-img" />
                                <h3 className="slide-title">{client.title}</h3>
                                <p className="slide-desc">{client.desc}</p>
                            </div>
                        ))}
                    </div>

                    <button className="arrow right" onClick={scrollRight}>▶</button>
                </div>

                <div className="product-details-wrapper">
                    <div className="product-about">
                        <p>
                            Crafting Cutting-
                        </p>
                        <p>
                            Edge <span className='blue-text'>Digital Solutions</span>
                        </p>
                        <p>
                            With Creative Minds
                        </p>
                    </div>

                    <div className="product-detail-inner">
                        <div className="marketing-info">
                            <p className='blue-text innumber'>35+</p>
                            <p>Tech & Marketing Experts</p>
                        </div>
                        <div className="marketing-info">
                            <p className='innumber'>50+</p>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="marketing-info">
                            <p className='innumber'>13+</p>
                            <p>Years of Expertise</p>
                        </div>
                        <div className="marketing-info watch-video">
                            <img src={vidioicon} alt="video-icon" height="100px" />

                        </div>
                    </div>
                </div>

            </div> */}


            <div className="tech-stack-container">
                <div className="tech-stack-info">
                    <div className="tech-heading">
                        <p> TECH STACK</p>
                    </div>
                    <div className="tech-para">
                        <p>At Invincible Brains  Solutions, our tech stack services are meticulously crafted to empower your digital journey, featuring Front End Development, MEAN Stack, and MERN Stack expertise. We're committed to providing an end-to-end partnership that not only builds but also scales and transforms your web presence. Leveraging the latest in technology, our dedicated team ensures your projects are not just completed but excel in today's competitive digital landscape. Whether starting from scratch or refining an existing platform, Invincible Brains  Solutions is your ally in harnessing the power of web technology to achieve tangible growth.</p>
                    </div>

                    <div className="tech-images">
                        <img src={mean} alt="" width="100px" height="100px" />
                        <img src={mern} alt="" width="100px" height="100px" />
                        <img src={wordpress} alt="" width="100px" height="100px" />
                        <img src={shopify} alt="" width="100px" height="100px" />
                        <img src={cocos} alt="" width="100px" height="100px" />
                        <img src={react} alt="" width="100px" height="100px" />
                    </div>
                </div>


                <div className="client-decription-section">
                    <div className="desc-heading">
                        <p>OUR CLIENTS</p>
                        <span className='desc-heading-line'></span>
                    </div>

                    <div className="client-desc-img">
                        <div className="client-name-img">
                            <img src={khiladiadda} alt="" className='client-img' />
                        </div>
                        {/* <div className="client-name-img">
                            <img src={sanddollor} alt="" className='client-img' />
                        </div> */}
                        {/* <div className="client-name-img">
                            <img src={justjane} alt="" className='client-img' />
                        </div>
                        <div className="client-name-img">
                            <img src={gameebadlo} alt="" className='client-img' />
                        </div>
                        <div className="client-name-img">
                            <img src={dharti} alt="" className='client-img' />
                        </div>
                        <div className="client-name-img">
                            <img src={rupee} alt="" className='client-img' />
                        </div>
                        <div className="client-name-img">
                            <img src={josh} alt="" className='client-img' />
                        </div> */}
                    </div>

                </div>
            </div>

            <div className="testimonial-container">
                <div className="testi-heading">
                    <p>TESTIMONIALS</p>
                </div>
                <div className="testimonial-scroll-section">


                    {/* 
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        ...
                    </Swiper> */}



                    <div className="w-full">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            spaceBetween={20}
                            slidesPerView={1}
                            loop={true}
                            freeMode={true}
                            autoplay={{ delay: 0, disableOnInteraction: false }}
                            speed={4000} // Adjust speed for smooth infinite scrolling
                            className="h-40"
                        >
                            {data.map((card, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="flex items-center justify-center bg-blue-500 text-white p-10 rounded-lg"
                                >

                                    <>
                                        <Stack sx={{
                                            width: "100%",
                                            minHeight: "400px",
                                            padding: "50px",
                                            backgroundColor: `${card.color}`,
                                            color: "white",
                                            gap: "50px",
                                            transition: "background-color 0.3s ease-in-out",
                                            "&:hover": {
                                                backgroundColor: "blue", // Change to blue on hover
                                            },
                                        }}>
                                            <Typography variant="h3">
                                                <img src={card.image} alt="" />

                                                {/* {card.image} */}
                                            </Typography>
                                            <Typography variant="h6" sx={{ color:`${card.textColor}` }}>
                                                {card.para}
                                            </Typography>

                                            <Typography variant="h6" sx={{ color:`${card.textColor}` }}>
                                                {card.span}
                                            </Typography>



                                        </Stack>
                                    </>


                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>




                    {/* <div className="testimonial-scroll-item yellowColor">
                        <img src={test_qut} alt="" />
                        <p>
                            Invincible Brains  Solutions' exceptional digital resources and specialist network have fueled our growth and success over the past year. I highly recommend their services.
                        </p>
                        <span>Smoke Break Agency</span>
                    </div>

                    <div className="testimonial-scroll-item greenColor">
                        <img src={test_qut} alt="" />
                        <p>

                            Invincible Brains  Solutions enhanced our online visibility and customer
                            acquisition, leading to more loan applications. Their deep
                            understanding of financial services makes them invaluable.

                        </p>
                        <span>Salary Day</span>
                    </div> */}
                </div>
            </div>

            <div className="about-business">
                <p>LETS TALK BUSINESS</p>
                <button onClick={()=>navigate('/contact')}>Contact Us</button>
            </div>



        </>
    )
}

export default OurServices
