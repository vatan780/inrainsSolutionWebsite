import React from 'react'
import taabVideo from '../../video/taab_video.mp4'
import "./videoSection.css"

import slideImage1 from '../../newImages/pokerslider1.webp'
import slideImage2 from '../../newImages/polerSlide2.jpeg'
import slideImage3 from '../../newImages/pokerImage3.webp'
import slideImage4 from '../../newImages/pokerSlide4.jpeg'
import slideImage5 from '../../newImages/pokerslide5.jpeg'
import poker1 from '../../newImages/poker1.avif'

import { Autoplay, FreeMode } from "swiper/modules";

import { Swiper, SwiperSlide } from 'swiper/react'
import { Stack } from '@mui/material'

const VideoSection = () => {

    let imgeArray = [
        slideImage1,
        //  slideImage2, 
         slideImage3,
        //   slideImage4, 
        //   slideImage5 
          ,poker1
    ]

    return (
        <>




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
                    breakpoints={{
                        575: {
                            slidesPerView: 1, // Show only 1 card when screen width is <= 575px
                        },
                    }}
                >
                    {imgeArray.map((img, index) => (
                        <SwiperSlide
                            key={index}
                            className="flex items-center justify-center bg-blue-500 text-white p-10 rounded-lg"
                        >

                            <>
                                <Stack sx={{
                                    width: "100%",
                                    minHeight: "400px",
                                    padding: "50px",
                                    backgroundColor: "black",
                                    color: "white",
                                    gap: "50px",
                                    transition: "background-color 0.3s ease-in-out",
                                    // "&:hover": {
                                    //     backgroundColor: "blue", // Change to blue on hover
                                    // },
                                }}>
                                    <img style={{maxHeight:"750px"}} src={img} alt="" srcset="" />

                                </Stack>
                            </>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>







            <div className="background-image-section">
                <div className="text-animation-section">
                    <div className="animation-heading">
                        <h1>We Deliver</h1>
                    </div>
                    <div className="animation-scroll-section">
                        <div className="scrolling-text">
                            <h1>Next-Gen App Development</h1>
                            <h1>Real Money Gaming Platforms</h1>
                            <h1>Thumb-Stopping Social Media Content</h1>
                        </div>

                    </div>
                </div>

                {/* <div className="video-container-section">
                    <div className="video"> 
                        <video controls >
                            <source src={taabVideo} type="video/mp4" />
                        </video>
                    </div>
                </div> */}
            </div>


        </>
    )
}

export default VideoSection
