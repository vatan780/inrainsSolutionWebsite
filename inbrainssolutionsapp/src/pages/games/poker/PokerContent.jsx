import { Button, Card, CardActions, CardContent, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import astroImg from "../../../images/astronaut3.webp"
import pokerbackGroundImg from "../../../images/poker-background.png"
import moveMouseImg from "../../../images/move-mouse.png"
import pokerParaImg from "../../../images/poker-para.png"
import mobileAnimg from "../../../images/mobile-animation.png"
import pokerPara2img from "../../../images/poker-para-bg-2.png"
import cloudImg from "../../../images/cloud.png"
import specialGame from "../../../images/special-game-f2.png"
import evimg from "../../../images/ev.png"
import callTimeImg from "../../../images/call-time.png"
import plauerHudImg from "../../../images/player-hud.png"
import rabbit from "../../../images/rabbit.png"
import handhistoryimg from "../../../images/hand-history.png"
import realTimeimg from "../../../images/realtime.png"
import pokerParaimg from "../../../images/poker-para-bg-long2.png"
import videoCard from "../../../images/video-card.gif"
import cta2 from "../../../images/cta2.png"
import certificateSectionImg from "../../../images/certificate-img-section.png"
import cert1 from "../../../images/cert1.png"
import cert2 from "../../../images/cert2.png"
import cert3 from "../../../images/cert3.png"

import nodeimg from "../../../images/nodejs.png"
import angularimg from "../../../images/angularjs.png"
import reactimg from "../../../images/reactjs.png"
import expressimg from "../../../images/expressjs.png"

import nestimg from "../../../images/nestjs.png"
import mongodbimg from "../../../images/mongodb.png"
import cocos1img from "../../../images/cocos_1.png"
import pameloimg from "../../../images/pamelo.png"
import socketioimg from "../../../images/socketio.png"

import securityFeatureSectionImg from "../../../images/security-feature-section.png"
import securityFeature from "../../../images/security-features.png"

// newImages
import pokerBanner from "../../../newImages/banner.png"
import mobilePokerImage from "../../../newImages/newPokerimage.webp"




import Footer from '../../footer/Footer'
import { blue } from '@mui/material/colors'





const PokerContent = () => {


    const securityFeatures = [
        {
            title: "Guaranteed Tournaments",
            description: "Compete for a prize pool that's assured, regardless of participant numbers.",
        },
        {
            title: "Freeze Out Tournaments",
            description: "Once you're out, you're out! No re-buys or add-ons allowed.",
        },
        {
            title: "Sit and Go Tournaments",
            description: "Jump in whenever you're ready; these tournaments start as soon as enough players join.",
        },
        {
            title: "Satellite Tournaments",
            description: "Win your ticket to bigger events by conquering these smaller-scale competitions.",
        },
        {
            title: "Bounty Tournaments",
            description: "Knock out opponents and earn rewards with every successful elimination.",
        },
        {
            title: "Multi-Day Tournaments",
            description: "Test your endurance in events that span across multiple days, adding layers of strategy and excitement.",
        },
    ];


    const testimonials = [
        {
            title: "Excellent Support",
            text: "The team was incredibly responsive and ensured a smooth experience throughout our project."
        },
        {
            title: "Seamless Integration",
            text: "Integrating the platform with our existing system was effortless, thanks to their robust API."
        },
        {
            title: "Outstanding Performance",
            text: "The software runs flawlessly, even under high traffic. Couldn't be happier!"
        }
    ];




    return (
        <>
            <Stack sx={{
                width: "100%",
                minHeight: "85vh",
                backgroundImage: `url(${astroImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                position: "relative"
            }}>

                <Stack sx={{
                    width: "100%", position: "absolute", height: "100%", backgroundColor: "transparent", // Semi-transparent black
                    zIndex: 1,
                }}>

                    {/* <Stack sx={{
                        width: "100%",
                        minHeight: "1000px",

                        // height: "1000px",
                        // backgroundImage: `url(${pokerbackGroundImg})`,
                        backgroundImage: `url(${pokerBanner})`,
                        // position: "relative"
                        backgroundSize: "cover",
                        backgroundPosition: "center",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>

                        <Stack sx={{ width: "30%", marginLeft: "10%", }} gap={2}>

                            <Stack sx={{ width: "100%" ,color:"black"}}>
                                <Typography variant='h2'>
                                    Launch Your Poker Empire
                                </Typography>
                                <Typography variant='h2'>
                                    Build, Brand, & Dominate
                                </Typography>


                            </Stack>

                            <Typography variant='h6' sx={{color:'black'}}>
                                Craft your dream poker platform with our adaptable White-Label Poker Software Solutions.
                            </Typography>

                            <Button sx={{ backgroundColor: "black", textTransform: "none" }}>
                                <a href="/contact" style={{ color: "white", textDecoration: "none", width: "fit-content" }}>Request A Demo</a>
                            </Button>

                        </Stack>

                    </Stack> */}




                    <Stack
                        sx={{
                            width: "100%",
                            minHeight: { xs: "600px", md: "1000px" }, // Smaller height on mobile
                            backgroundImage: `url(${pokerBanner})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            px: { xs: 2, sm: 4, md: "10%" }, // Padding for mobile
                        }}
                    >
                        <Stack sx={{ width: { xs: "90%", sm: "70%", md: "30%" } }} gap={2}>
                            {/* Title */}
                            <Stack sx={{ width: "100%", color: "black" }}>
                                <Typography
                                    variant="h4"
                                    sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}
                                >
                                    Launch Your Poker Empire
                                </Typography>
                                <Typography
                                    variant="h4"
                                    sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }}
                                >
                                    Build, Brand, & Dominate
                                </Typography>
                            </Stack>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, color: "black" }}
                            >
                                Craft your dream poker platform with our adaptable White-Label Poker Software Solutions.
                            </Typography>

                            {/* Button */}
                            <Button
                                sx={{
                                    backgroundColor: "black",
                                    textTransform: "none",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    padding: { xs: "8px 16px", sm: "12px 24px" },
                                    width: "fit-content"
                                }}
                            >
                                <a
                                    href="/contact"
                                    style={{
                                        color: "white",
                                        textDecoration: "none",
                                        width: "fit-content",
                                    }}
                                >
                                    Request A Demo
                                </a>
                            </Button>
                        </Stack>
                    </Stack>





                    <Stack
                        sx={{
                            width: "100%",
                            minHeight:{xs:'fit-content' ,md:"100vh"},
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
                                Welcome To Poker Solutions
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



                    {/* <Stack sx={{ width: "100%", minHeight: "100vh", color: "black", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px" }}>

                        <Stack sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                            <Typography variant='h3'>Anywhere Poker</Typography>
                            <Typography variant='h6'>Explore the exceptional features and advantages that set our poker game apart,</Typography>
                            <Typography variant='h6'>making it the top choice for avid poker players seeking thrilling gameplay.</Typography>
                        </Stack>

                        <Stack sx={{ width: "80%" }}>
                            <img src={mobileAnimg} alt="" />
                           
                        </Stack>

                    </Stack> */}



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
                                Anywhere Poker
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
                                src={mobilePokerImage}
                                alt="Mobile Poker Game"
                                style={{
                                    maxWidth: "100%", // Ensures responsiveness
                                    height: "auto", // Maintains aspect ratio
                                    minHeight: "300px", // Minimum size for large screens
                                }}
                            />
                        </Stack>
                    </Stack>







                    {/* <Stack sx={{
                        width: "100%",
                        minHeight: "100vh",
                        color: "black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "100px",
                        backgroundImage: `url(${pokerPara2img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        color: "white",
                        gap: "50px"
                    }}>
                        <Stack sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "white" }}>

                            <Typography variant='h3'>
                                Explore Various Poker Variants
                            </Typography>
                            <Typography variant='h6'>
                                Choose from a variety of classic and exciting poker
                                games to suit your style, including:
                            </Typography>

                        </Stack>

                        <Stack direction={"row"} sx={{ width: "80%", display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap", gap: "40px" }}>

                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Typography sx={{ padding: '10px' }} >
                                    The world's most popular poker variant, perfect for beginners and veterans alike.
                                </Typography>

                            </Stack>

                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <Typography sx={{ padding: '10px' }}>
                                    A thrilling game with hidden cards, offering strategic depth for skilled players.
                                </Typography>

                            </Stack>
                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Typography sx={{ padding: '10px' }}>
                                    A thrilling game with hidden cards, offering strategic depth for skilled players.
                                </Typography>

                            </Stack>
                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Typography sx={{ padding: '10px' }}>
                                    Join our tournaments to compete against the best and test your skills in structured and escalating prize pool events.
                                </Typography>

                            </Stack>
                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Typography sx={{ padding: '10px' }}>
                                    Quick and convenient, our Sit N Gos are perfect for players looking for fast-paced, on-demand poker games.
                                </Typography>

                            </Stack>
                            <Stack sx={{ width: '23%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Texas Hold'em
                                        </Typography>
                                    </CardContent>
                                </Card>

                                <Typography sx={{ padding: '10px' }}>
                                    Challenge your versatility with Round of Each, where the game type rotates, testing every aspect of your poker strategy.
                                </Typography>

                            </Stack>
                        </Stack>

                    </Stack> */}

                    <Stack
                        sx={{
                            width: "100%",
                            minHeight:{xs:"fit-content" , md:'100vh'},
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: { xs: "50px", md: "100px" }, // Smaller padding on mobile
                            backgroundImage: `url(${pokerPara2img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            color: "white",
                            gap: { xs: "30px", md: "50px" }, // Reduce gap on smaller screens
                            textAlign: "center",
                        }}
                    >
                        {/* Title Section */}
                        <Stack
                            sx={{
                                width: { xs: "90%", md: "80%" },
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
                                Explore Various Poker Variants
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ fontSize: { xs: "1rem", sm: "1.2rem" } }}
                            >
                                Choose from a variety of classic and exciting poker games to suit your style, including:
                            </Typography>
                        </Stack>

                        {/* Cards Section */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: { xs: "90%", md: "80%" },
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {[
                                {
                                    title: "Texas Hold'em",
                                    description:
                                        "The world's most popular poker variant, perfect for beginners and veterans alike.",
                                },
                                {
                                    title: "Omaha Poker",
                                    description:
                                        "A thrilling game with hidden cards, offering strategic depth for skilled players.",
                                },
                                {
                                    title: "Seven-Card Stud",
                                    description:
                                        "A strategic game where players must make the best hand with no community cards.",
                                },
                                {
                                    title: "Tournament Play",
                                    description:
                                        "Join our tournaments to compete against the best and test your skills in structured and escalating prize pool events.",
                                },
                                {
                                    title: "Sit N Go",
                                    description:
                                        "Quick and convenient, our Sit N Gos are perfect for players looking for fast-paced, on-demand poker games.",
                                },
                                {
                                    title: "Round of Each",
                                    description:
                                        "Challenge your versatility with Round of Each, where the game type rotates, testing every aspect of your poker strategy.",
                                },
                            ].map((variant, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "transparent",
                                            border: "2px solid #726eba",
                                            padding: "2rem",
                                            borderRadius: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Typography gutterBottom sx={{ color: "white", fontSize: "24px" }}>
                                                {variant.title}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Typography sx={{ padding: "10px", fontSize: { xs: "0.9rem", sm: "1rem" } }}>
                                        {variant.description}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>


                    {/* <Stack
                        sx={{
                            minHeight: "100vh",
                            backgroundImage: `url(${cloudImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}>

                    </Stack> */}

                    {/* <Stack
                        sx={{
                            width: "100%",
                            minHeight: "1350px",

                            backgroundImage: `url(${specialGame})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "100px"
                        }}>

                        <Stack sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                            <Typography variant='h3'>
                                SPECIAL GAME FEATURES
                            </Typography>
                            <Typography variant='h6'>
                                Our platform elevates your poker experience with special features such as Preset Avatars, Private Tables,
                            </Typography>
                            <Typography variant='h6'>
                                Animated Emojis, Chat Interaction, Theme Selection, Subscription Options, and Sit Out Protection, among others.
                            </Typography>
                        </Stack>


                        <Stack direction={"row"} sx={{ width: "80%", display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap", gap: "40px" }}>

                            <Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack>
                            <Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack><Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack><Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack><Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack><Stack sx={{ width: '23%' }}>
                                <img src={evimg} alt="" />
                            </Stack>

                        </Stack>

                    </Stack> */}

                    <Stack
                        sx={{
                            width: "100%",
                            minHeight: { xs: "auto", md: "1350px" }, // Auto height on mobile
                            backgroundImage: `url(${specialGame})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: { xs: "50px", md: "100px" }, // Reduce gap on smaller screens
                            padding: { xs: "50px 20px", md: "100px" }, // Adjust padding for mobile
                            textAlign: "center",
                        }}
                    >
                        {/* Title & Description */}
                        <Stack
                            sx={{
                                width: { xs: "95%", md: "80%" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Typography
                                variant="h4"
                                sx={{
                                    fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" },
                                }}
                            >
                                SPECIAL GAME FEATURES
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: "1rem", sm: "1.2rem" },
                                    maxWidth: "800px",
                                }}
                            >
                                Our platform elevates your poker experience with special features such as Preset Avatars, Private Tables, Animated Emojis, Chat Interaction, Theme Selection, Subscription Options, and Sit Out Protection, among others.
                            </Typography>
                        </Stack>

                        {/* Images Grid */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: { xs: "90%", md: "80%" },
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {[...Array(6)].map((_, index) => (
                                <Grid item xs={6} sm={4} md={2} key={index}>
                                    <img
                                        src={evimg}
                                        alt="Special Feature"
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            borderRadius: "10px",
                                        }}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>



                    {/* <Stack
                        sx={{
                            width: "100%",
                            minHeight: "1980px",

                            backgroundImage: `url(${pokerParaimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "100px"
                        }}>

                        <Stack sx={{ width: "80%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: 'center', gap: "200px" }}>
                            <Stack sx={{ width: "40%" }}>
                                <Typography variant='h2'
                                    sx={{
                                        // background: linear-gradient(90deg, #5737A1 -10.26%, #5D5FEF 25.65%, #974077 65.83%, #43B2F0 97.89%, #1270A5 136.62%);
                                        backgrund: "linear-gradient(90deg, #5737A1 -10.26%, #5D5FEF 25.65%, #974077 65.83%, #43B2F0 97.89%, #1270A5 136.62%)"
                                    }}
                                >
                                    Core Features of
                                    Our Poker Software
                                </Typography>
                                <Typography variant='h6'>
                                    Explore a suite of essential tools designed to enhance your online poker experience.
                                </Typography>

                            </Stack>

                            <img src={videoCard} alt="" sx={{ width: "50%" }} />

                        </Stack>


                        <Stack direction={"row"} sx={{ width: "90%", display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap", gap: "40px" }}>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Multi-Device Compatibility
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Seamless play across Android, iOS, Web, and Windows, ensuring users can join from any device.
                                        </Typography>

                                    </CardContent>


                                </Card>
                            </Stack>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Independent Dashboards
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Advanced dashboards provide detailed financial tracking and secure wallet integration for safe payments.

                                        </Typography>
                                    </CardContent>

                                </Card>


                            </Stack><Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Comprehensive Admin Panel
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Comprehensive Admin Panel: It gives you complete control over your platform with tools to manage your business effortlessly.

                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack><Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Multi-Tabling Capabilities
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Boost your winning odds and enrich your gameplay with our advanced options for a more dynamic experience.

                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack><Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Extensive Customization
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Various table themes
                                            and extensive personalization options align with
                                            your brand identity.
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack>
                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Customizable Design Options
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Users can choose
                                            between dark or light modes, tailoring the
                                            interface for a more enjoyable experience
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack>

                        </Stack>


                        <img src={cta2} alt="" />

                    </Stack> */}

                    <Stack
                        sx={{
                            width: "100%",
                            minHeight: { xs: "auto", md: "1980px" }, // Auto height on mobile
                            backgroundImage: `url(${pokerParaimg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: { xs: "50px", md: "100px" }, // Reduce gap on mobile
                            padding: { xs: "50px 20px", md: "100px" },
                            textAlign: "center",
                        }}
                    >
                        {/* Heading Section */}
                        <Stack
                            sx={{
                                width: { xs: "95%", md: "80%" },
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on larger screens
                                justifyContent: "center",
                                alignItems: "center",
                                gap: { xs: "50px", md: "200px" },
                            }}
                        >
                            <Stack sx={{ width: { xs: "100%", md: "40%" }, textAlign: "left" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                        background: "linear-gradient(90deg, #5737A1 -10.26%, #5D5FEF 25.65%, #974077 65.83%, #43B2F0 97.89%, #1270A5 136.62%)",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    Core Features of Our Poker Software
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: "1rem", sm: "1.2rem" },
                                    }}
                                >
                                    Explore a suite of essential tools designed to enhance your online poker experience.
                                </Typography>
                            </Stack>

                            <img
                                src={videoCard}
                                alt="Video Card"
                                style={{
                                    width: "100%",
                                    maxWidth: "500px",
                                    borderRadius: "10px",
                                }}
                            />
                        </Stack>

                        {/* Features Grid */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: { xs: "90%", md: "80%" },
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {[
                                {
                                    title: "Multi-Device Compatibility",
                                    desc: "Seamless play across Android, iOS, Web, and Windows, ensuring users can join from any device.",
                                },
                                {
                                    title: "Independent Dashboards",
                                    desc: "Advanced dashboards provide detailed financial tracking and secure wallet integration for safe payments.",
                                },
                                {
                                    title: "Comprehensive Admin Panel",
                                    desc: "Gives you complete control over your platform with tools to manage your business effortlessly.",
                                },
                                {
                                    title: "Multi-Tabling Capabilities",
                                    desc: "Boost your winning odds and enrich your gameplay with our advanced options for a more dynamic experience.",
                                },
                                {
                                    title: "Extensive Customization",
                                    desc: "Various table themes and extensive personalization options align with your brand identity.",
                                },
                                {
                                    title: "Customizable Design Options",
                                    desc: "Users can choose between dark or light modes, tailoring the interface for a more enjoyable experience.",
                                },
                            ].map((feature, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "transparent",
                                            border: "2px solid #726eba",
                                            padding: "2rem",
                                            borderRadius: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                sx={{
                                                    color: "white",
                                                    fontSize: "24px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography sx={{ color: "white", fontSize: "16px" }}>
                                                {feature.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        {/* CTA Image */}
                        <img
                            src={cta2}
                            alt="Call to Action"
                            style={{
                                width: "100%",
                                maxWidth: "700px",
                                borderRadius: "10px",
                            }}
                        />
                    </Stack>



                    {/* <Stack
                        sx={{
                            width: "100%",
                            minHeight: "100vh",

                            backgroundImage: `url(${certificateSectionImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "100px"
                        }}>


                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px"
                            }}
                        >
                            <Typography variant='h3'>
                                Certificates
                            </Typography>
                            <img src={cert1} alt="" />
                            <img src={cert2} alt="" />
                            <img src={cert3} alt="" />

                        </Stack>


                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                // flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "20px"
                            }}
                        >
                            <Typography variant='h3'>
                                Experience It Yourself
                            </Typography>
                            <Typography variant='h6'>
                                Explore our comprehensive poker software solutions and enjoy the game from anywhere.
                            </Typography>

                            <Typography variant='h6'>
                                Start your free trial now!
                            </Typography>
                        </Stack>

                        <Stack
                            sx={{
                                widthL: "90%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "50px"

                            }}
                        >

                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Desktop
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Explore our desktop version available for Windows and MacOS.                                        </Typography>

                                    </CardContent>


                                </Card>
                            </Stack>

                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Web
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            No downloads required! Accessible from any browser or device.                                        </Typography>

                                    </CardContent>


                                </Card>
                            </Stack>

                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Mobile
                                        </Typography>
                                        <Typography sx={{ color: "white", alignSelf: "center" }}>
                                            Download our apps for iOS and Android and discover more.
                                        </Typography>

                                    </CardContent>


                                </Card>
                            </Stack>

                        </Stack>



                    </Stack> */}


                    <Stack
                        sx={{
                            width: "100%",
                            minHeight: {xs:"fit-content" , md:"100vh"},
                            backgroundImage: `url(${certificateSectionImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: { xs: "50px", md: "100px" },
                            padding: { xs: "50px 20px", md: "100px" },
                            textAlign: "center",
                        }}
                    >
                        {/* Certificates Section */}
                        <Stack
                            sx={{
                                width: { xs: "95%", md: "80%" },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px",
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                }}
                            >
                                Certificates
                            </Typography>

                            <Grid
                                container
                                spacing={3}
                                sx={{
                                    width: "100%",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {[cert1, cert2, cert3].map((cert, index) => (
                                    <Grid item xs={12} sm={4} key={index}>
                                        <img
                                            src={cert}
                                            alt={`Certificate ${index + 1}`}
                                            style={{
                                                width: "100%",
                                                maxWidth: "250px",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                        </Stack>

                        {/* Experience Section */}
                        <Stack
                            sx={{
                                width: { xs: "95%", md: "80%" },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                                gap: "20px",
                            }}
                        >
                            <Typography
                                variant="h3"
                                sx={{
                                    fontSize: { xs: "2rem", sm: "2.5rem" },
                                }}
                            >
                                Experience It Yourself
                            </Typography>
                            <Typography variant="h6">
                                Explore our comprehensive poker software solutions and enjoy the game from anywhere.
                            </Typography>
                            <Typography variant="h6">Start your free trial now!</Typography>
                        </Stack>

                        {/* Platforms Section */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: "90%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {[
                                {
                                    title: "Desktop",
                                    desc: "Explore our desktop version available for Windows and MacOS.",
                                },
                                {
                                    title: "Web",
                                    desc: "No downloads required! Accessible from any browser or device.",
                                },
                                {
                                    title: "Mobile",
                                    desc: "Download our apps for iOS and Android and discover more.",
                                },
                            ].map((platform, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "rgba(255, 255, 255, 0.5)",
                                            border: "2px solid #726eba",
                                            padding: "2rem",
                                            borderRadius: "20px",
                                            textAlign: "center",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                gutterBottom
                                                sx={{
                                                    color: "white",
                                                    fontSize: "24px",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                {platform.title}
                                            </Typography>
                                            <Typography sx={{ color: "white", fontSize: "16px" }}>
                                                {platform.desc}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>


                   


                    <Stack
                        sx={{
                            width: "100%",
                            // minHeight: "633px",
                            minHeight: {xs:"fit-content" , md:"633px"},

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




                    {/* <Stack
                        sx={{
                            width: "100%",
                            minHeight: "1690px",
                            backgroundImage: `url(${securityFeatureSectionImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "100px"
                        }}
                    >

                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "row",
                                gap: "100px"
                            }}
                        >

                            <Stack
                                sx={{
                                    width: "40%",
                                    display: "flex",
                                    // flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "10px"
                                }}
                            >

                                <Typography variant='h3'>
                                    Security Features
                                </Typography>
                                <Typography variant='h6'>
                                    Here's how we keep your data safe.
                                </Typography>



                            </Stack>

                            <Stack
                                sx={{
                                    width: "40%",
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >

                                <img src={securityFeature} alt="" />


                            </Stack>

                        </Stack>




                        <Stack direction={"row"} sx={{ width: "90%", display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap", gap: "40px" }}>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Guaranteed
                                            Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Compete for a prize pool that's assured, regardless of participant numbers.

                                        </Typography>

                                    </CardContent>


                                </Card>
                            </Stack>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Freeze out Tournaments

                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Once you're out, you're out! No re-buys or add-ons allowed.
                                        </Typography>
                                    </CardContent>

                                </Card>


                            </Stack><Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Sit and Go Tournaments

                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Jump in whenever you're ready; these tournaments start as soon as enough players join.

                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack><Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>

                                            Satellite Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Win your ticket to bigger events by conquering these smaller-scale competitions.
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Bounty Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Knock out opponents and earn rewards with every successful elimination.
                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Stack>

                            <Stack sx={{ width: '30%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                            Multi-Day Tournaments

                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Test your endurance in events that span across multiple days, adding layers of strategy and excitement.
                                        </Typography>
                                    </CardContent>
                                </Card>


                            </Stack>

                        </Stack>

                    </Stack> */}


                    <Stack
                        sx={{
                            width: "100%",
                            minHeight: "auto",
                            backgroundImage: `url(${securityFeatureSectionImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: { xs: "50px 20px", md: "100px 0" },
                            gap: "50px",
                            textAlign: "center",
                        }}
                    >
                        {/* Title & Image Row */}
                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                flexDirection: { xs: "column", md: "row" },
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "50px",
                            }}
                        >
                            {/* Title & Description */}
                            <Stack sx={{ width: { xs: "100%", md: "40%" }, alignItems: "center" }}>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                                        fontWeight: "bold",
                                    }}
                                >
                                    Security Features
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ fontSize: { xs: "1rem", sm: "1.2rem" }, marginTop: "10px" }}
                                >
                                    Here's how we keep your data safe.
                                </Typography>
                            </Stack>

                            {/* Security Image */}
                            <Stack sx={{ width: { xs: "100%", md: "40%" } }}>
                                <img
                                    src={securityFeature}
                                    alt="Security Feature"
                                    style={{
                                        width: "100%",
                                        maxWidth: "400px",
                                        height: "auto",
                                    }}
                                />
                            </Stack>
                        </Stack>

                        {/* Security Feature Cards */}
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: "90%",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            {securityFeatures.map((feature, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "transparent",
                                            border: "2px solid #726eba",
                                            padding: "2rem",
                                            borderRadius: "20px",
                                            textAlign: "center",
                                            transition: "all 0.3s ease-in-out",
                                            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
                                        }}
                                    >
                                        <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                            <Typography
                                                gutterBottom
                                                sx={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}
                                            >
                                                {feature.title}
                                            </Typography>
                                            <Typography sx={{ color: "white" }}>{feature.description}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>



                    {/* <Stack
                        sx={{
                            width: "100%",
                            minHeight: "800px",
                            backgroundColor: "rgb(0 0 0/var(--tw-bg-opacity,1))",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "100px"
                        }}
                    >
                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}
                        >
                            <Typography variant='h3'>
                                Trusted by Hundreds
                            </Typography>
                            <Typography variant='h3'>
                                of Happy Customers
                            </Typography>
                            <Typography variant='h6'>
                                Our commitment to excellence has empowered businesses of all sizes with innovative solutions that drive success.
                            </Typography>
                            <Typography variant='h6'>
                                Here's what some of our customers have to say about us:
                            </Typography>

                        </Stack>

                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px",
                                flexDirection: 'row'
                            }}
                        >
                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>
                                            Bounty Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Knock out opponents and earn rewards with every successful elimination.


                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Stack>


                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>
                                            Bounty Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Knock out opponents and earn rewards with every successful elimination.


                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Stack>

                            <Stack sx={{ width: '25%' }}>
                                <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px", boxShadow: "rgba(134, 133, 198, 0.1) 0px 0px 0px 200px inset" }}>
                                    <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                        <Typography sx={{ color: 'white', fontSize: '30px' }}>
                                            Bounty Tournaments
                                        </Typography>
                                        <Typography sx={{ color: "white" }}>
                                            Knock out opponents and earn rewards with every successful elimination.


                                        </Typography>
                                    </CardContent>
                                </Card>

                            </Stack>

                        </Stack>

                    </Stack> */}

                    <Stack
                        sx={{
                            width: "100%",
                            minHeight:{xs:"fit-content",md:"800px"},
                            backgroundColor: "rgb(0 0 0/var(--tw-bg-opacity,1))",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            gap: "40px",
                            padding: "50px 20px"
                        }}
                    >
                        {/* Heading Section */}
                        <Stack sx={{ maxWidth: "800px" }}>
                            <Typography variant="h3" color="white">
                                Trusted by Hundreds of Happy Customers
                            </Typography>
                            <Typography variant="h6" color="gray">
                                Our commitment to excellence has empowered businesses of all sizes with innovative solutions that drive success.
                            </Typography>
                        </Stack>

                        {/* Testimonials Grid */}
                        <Grid container spacing={3} sx={{ width: "90%", maxWidth: "1200px", justifyContent: "center" }}>
                            {testimonials.map((testimonial, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card
                                        sx={{
                                            backgroundColor: "transparent",
                                            border: "2px solid #726eba",
                                            borderRadius: "20px",
                                            padding: "2rem",
                                            textAlign: "center",
                                            transition: "0.3s",
                                            "&:hover": { transform: "scale(1.05)", boxShadow: "0px 4px 20px rgba(114, 110, 186, 0.5)" }
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="h5" sx={{ color: "white", mb: 1 }}>
                                                {testimonial.title}
                                            </Typography>
                                            <Typography sx={{ color: "white" }}>{testimonial.text}</Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Stack>


                    <Stack>
                        <Footer />
                    </Stack>


                </Stack>

            </Stack>


        </>

    )
}

export default PokerContent
