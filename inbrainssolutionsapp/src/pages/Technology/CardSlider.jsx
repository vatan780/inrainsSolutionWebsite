import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";
import { Stack, Typography } from "@mui/material";

const CardSlider = () => {
    const cards = [
        {
            "title": "React",
            "description": "A JavaScript library developed by Facebook for building user interfaces, particularly single-page applications, by creating reusable UI components"

        },

        {
            "title": "WordPress",
            "description": "An open-source content management system (CMS) based on PHP and MySQL, widely used for creating websites and blogs due to its flexibility and extensive plugin ecosystem."

        },
        {
            "title": "Angular",
            "description": " A TypeScript-based open-source web application framework developed by Google, designed to build dynamic single-page applications with a structured and modular approach"

        },
        {
            "title": "Node.js",
            "description": "An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, enabling the development of scalable server-side applications"

        },
        {
            "title": "MongoDB",
            "description": "A NoSQL database program that uses JSON-like documents with optional schemas, allowing for flexible and scalable data storage, commonly used in modern web applications."

        },
        {
            "title": "Express.js",
            "description": "A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications, facilitating the creation of APIs and handling HTTP requests."

        }
    ];

    return (
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
                        slidesPerView: 3, // Show only 1 card when screen width is <= 575px
                    },
                }}
            >
                {cards.map((card, index) => (
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
                                "&:hover": {
                                    backgroundColor: "blue", // Change to blue on hover
                                },
                            }}>
                                <Typography variant="h3">
                                    {card.title}
                                </Typography>
                                <Typography variant="h6">
                                    {card.description}
                                </Typography>

                            </Stack>
                        </>


                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;
