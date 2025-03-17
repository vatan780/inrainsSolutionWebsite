import React from 'react'
import snackImg1 from '../../../snackLadderImage/1.png'
import snackImg2 from '../../../snackLadderImage/2.png'
import snackImg3 from '../../../snackLadderImage/3.png'
import snackImg4 from '../../../snackLadderImage/4.png'
import snackImg5 from '../../../snackLadderImage/snack1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Button, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { Autoplay, FreeMode } from "swiper/modules";
import Footer from '../../footer/Footer'
import Navbar from '../../navbar/Navbar'

import pokerParaImg from "../../../images/poker-para.png"
import mobilePokerImage from "../../../newImages/newPokerimage.webp"



import nodeimg from "../../../images/nodejs.png"
import angularimg from "../../../images/angularjs.png"
import reactimg from "../../../images/reactjs.png"
import expressimg from "../../../images/expressjs.png"

import nestimg from "../../../images/nestjs.png"
import mongodbimg from "../../../images/mongodb.png"
import cocos1img from "../../../images/cocos_1.png"
import pameloimg from "../../../images/pamelo.png"
import socketioimg from "../../../images/socketio.png"

import { useNavigate} from 'react-router-dom'





const SnackLadder = () => {
    let Images = [
        snackImg1,
        snackImg2,
        snackImg3,
        snackImg4
    ]

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
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
                    {Images.map((img, index) => (
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
                                    alignContent: "center"

                                    // "&:hover": {
                                    //     backgroundColor: "blue", // Change to blue on hover
                                    // },
                                }}>
                                    <img style={{ maxHeight: "750px", maxWidth: "600px", alignSelf: "center" }} src={img} alt="" srcset="" />

                                </Stack>
                            </>


                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>




            <Stack
                sx={{
                    width: "100%",
                    minHeight: { xs: 'fit-content', md: "100vh" },
                    backgroundImage: `url(${pokerParaImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: { xs: "50px", md: "100px" }, // Smaller gap on mobile
                    px: { xs: 2, sm: 4, md: 6 }, // Padding for responsiveness
                    py: { xs: 4, sm: 6, md: 8 }, // Vertical padding
                }}
            >
                {/* Welcome Section */}
                <Stack
                    sx={{
                        width: { xs: "100%", sm: "80%", },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" }, color: "white" }}
                    >
                        Welcome To Snack Ladder  Solutions
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, color: "white" }}
                    >
                        Explore the key features and benefits that make our platform the top
                        choice for poker players at all levels.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, color: "white" }}
                    >
                        Our services include game licensing, development, and web and app creation.
                    </Typography>
                </Stack>

                {/* Features Section */}
                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    sx={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: { xs: 4, sm: 6, md: 8 },
                        flexWrap: "wrap", // Allows wrapping on smaller screens
                    }}
                >
                    {/* Branding Card */}
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            border: "2px solid #726eba",
                            padding: { xs: "1.5rem", sm: "3rem" }, // Smaller padding on mobile
                            borderRadius: "20px",
                            width: { xs: "100%", sm: "45%", md: "30%" }, // Full width on mobile, 45% on tablets, 30% on desktops
                        }}
                    >
                        <CardContent
                            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                        >
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                                Branding
                            </Typography>
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1rem", md: "1.2rem" } }}>
                                Tailor every aspect of the user interface and experience with your own branding,
                                creating a unique and visually appealing online poker platform.
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Turnkey Platform Card */}
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            border: "2px solid #726eba",
                            padding: { xs: "1.5rem", sm: "3rem" },
                            borderRadius: "20px",
                            width: { xs: "100%", sm: "45%", md: "30%" },
                        }}
                    >
                        <CardContent
                            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                        >
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                                Turnkey Platform
                            </Typography>
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1rem", md: "1.2rem" } }}>
                                Get a complete and ready-to-launch platform that includes integrated payment systems,
                                user management, game logic, and back-office tools.
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Scalability and Support Card */}
                    <Card
                        sx={{
                            backgroundColor: "transparent",
                            border: "2px solid #726eba",
                            padding: { xs: "1.5rem", sm: "3rem" },
                            borderRadius: "20px",
                            width: { xs: "100%", sm: "45%", md: "30%" },
                        }}
                    >
                        <CardContent
                            sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
                        >
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1.5rem", md: "2rem" } }}>
                                Scalability & Support
                            </Typography>
                            <Typography gutterBottom sx={{ color: "white", fontSize: { xs: "1rem", md: "1.2rem" } }}>
                                Benefit from scalable solutions that grow with your business and ongoing support that
                                includes updates and advanced security measures.
                            </Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>


            <Stack
                sx={{
                    width: "100%",
                    minHeight: "100vh",
                    color: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "50px", md: "100px" }, // Smaller padding on mobile
                    flexDirection: { xs: "column", md: "row" }, // Stacked on mobile, row on larger screens
                    gap: { xs: 4, md: 8 }, // Spacing between text and image
                    textAlign: "center", // Centers text on mobile
                }}
            >
                {/* Text Section */}
                <Stack
                    sx={{
                        width: { xs: "90%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}
                    >
                        Anywhere Snak Ladder
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                    >
                        Explore the exceptional features and advantages that set our poker game apart,
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                    >
                        making it the top choice for avid poker players seeking thrilling gameplay.
                    </Typography>
                </Stack>

                {/* Image Section */}
                <Stack
                    sx={{
                        width: { xs: "90%", md: "50%" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <img
                        src={snackImg5}
                        alt="Mobile Poker Game"
                        style={{
                            maxWidth: "100%", // Ensures responsiveness
                            height: "auto", // Maintains aspect ratio
                            minHeight: "300px", // Minimum size for large screens
                        }}
                    />
                </Stack>
            </Stack>



            <Stack
                sx={{
                    width: "100%",
                    // minHeight: "633px",
                    minHeight: { xs: "fit-content", md: "633px" },

                    backgroundColor: "#f6f5ff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "50px 20px", md: "70px 0px" },
                    gap: "50px",
                    textAlign: "center",
                }}
            >
                {/* Title & Description */}
                <Stack
                    sx={{
                        width: "90%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                        color: "black",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                            fontWeight: "bold",
                        }}
                    >
                        Our Current Technology Stack
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: "1rem", sm: "1.2rem" },
                            width: { xs: "100%", md: "70%" },
                        }}
                    >
                        Elevate user experience across diverse devices with our Cocos & Socket.IO-powered applications.
                    </Typography>
                </Stack>

                {/* Tech Stack Images */}
                <Grid
                    container
                    spacing={3}
                    sx={{
                        width: "90%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {[nodeimg, angularimg, reactimg, expressimg, nestimg, mongodbimg, cocos1img, pameloimg, socketioimg].map(
                        (tech, index) => (
                            <Grid item xs={6} sm={4} md={2} key={index}>
                                <img
                                    src={tech}
                                    alt={`Tech ${index + 1}`}
                                    style={{
                                        width: "100%",
                                        maxWidth: "120px",
                                        height: "auto",
                                        objectFit: "contain",
                                    }}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </Stack>



            <Stack
                sx={{ width: "100%", marginTop: "100px", background: "" }}
            >
                <Stack sx={{
                    width: "80%",
                    margin: "auto",
                    backgroundColor: "#03befc",
                    minHeight: "350px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    gap: "50px",
                    marginBottom:"20px",
                    padding:"20px"
                }}>
                    <Typography variant='h3'>
                        Ready to Dominate the Digital Space?
                    </Typography>
                    <Typography variant='h6'>
                        We're all about results, not just clicks. Elevate your brand's digital presence with our expert-led digital marketing
                    </Typography>
                    <Typography variant='h6'>
                        services.
                    </Typography>

                    <Button 
                    onClick={()=>navigate('/contact')}
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        width: "fit-content",
                        padding:"20px 30px",
                        // fontSize:"20px"

                    }}>
                        Contact Us
                    </Button>
                </Stack>



            </Stack>




            <Stack>
                <Footer />
            </Stack>
        </>
    )
}

export default SnackLadder
