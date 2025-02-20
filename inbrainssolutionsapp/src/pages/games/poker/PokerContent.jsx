import { Button, Card, CardActions, CardContent, Stack, Typography } from '@mui/material'
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








const PokerContent = () => {
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

                    <Stack sx={{
                        width: "100%",
                        minHeight: "100vh",

                        // height: "1000px",
                        backgroundImage: `url(${pokerbackGroundImg})`,
                        // position: "relative"
                        backgroundSize: "cover",
                        backgroundPosition: "center",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "flex-start"
                    }}>

                        <Stack sx={{ width: "30%", marginLeft: "10%", }} gap={2}>

                            <Stack sx={{ width: "100%" }}>
                                <Typography variant='h2'>
                                    Launch Your Poker Empire
                                </Typography>
                                <Typography variant='h2'>
                                    Build, Brand, & Dominate
                                </Typography>


                            </Stack>

                            <Typography variant='h6'>
                                Craft your dream poker platform with our adaptable White-Label Poker Software Solutions.
                            </Typography>

                            <Button sx={{ backgroundColor: "black", textTransform: "none" }}>
                                <a href="/contact" style={{ color: "white", textDecoration: "none", width: "fit-content" }}>Request A Demo</a>
                            </Button>

                        </Stack>

                    </Stack>


                    <Stack sx={{
                        width: "100%",
                        backgroundImage: `url(${pokerParaImg})`,
                        // height: "1000px",
                        minHeight: "100vh",

                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: 'center',
                        gap: "100px"

                    }}>

                        <Stack sx={{ width: "80%", display: "flex", justifyContent: "center", alignItems: "center", gap: "20px" }}>
                            <Typography variant='h3'>Welcome To Poker Solutions</Typography>
                            <Typography variant='h6'>W
                                Explore the key features and benefits that make our platform the top
                                choice for poker players at all levels.
                            </Typography>
                            <Typography variant='h6'>
                                Our services include game licensing, development, and web and
                                app creation
                            </Typography>

                        </Stack>

                        <Stack direction={"row"} sx={{ width: "80%" }} justifyContent={'center'} alignItems={"center"} gap={10}>


                            <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                    <Typography gutterBottom sx={{ color: 'white', fontSize: "30px" }}>
                                        Branding
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: "white", fontSize: "20px" }}>
                                        Tailor every aspect of the user
                                        interface and experience with your own branding, creating a
                                        unique and visually appealing online poker platform.
                                    </Typography>

                                </CardContent>
                            </Card>

                            <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                    <Typography gutterBottom sx={{ color: 'white', fontSize: '30px' }}>
                                        Turnkey Platform
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: 'white', fontSize: '20px' }}>
                                        Get a complete and ready-to-launch platform that includes
                                        integrated payment systems, user management, game logic, and
                                        back-office tools.
                                    </Typography>

                                </CardContent>
                            </Card>
                            <Card sx={{ backgroundColor: 'transparent', border: "2px solid #726eba", padding: "3rem", borderRadius: "20px" }}>
                                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                                    <Typography gutterBottom sx={{ color: 'white', fontSize: "30px" }}>
                                        WScalability and
                                        Suppor
                                    </Typography>
                                    <Typography gutterBottom sx={{ color: 'white', fontSize: "20px" }}>
                                        Benefit from scalable solutions
                                        that grow with your business and ongoing support that
                                        includes updates and advanced security measures.
                                    </Typography>

                                </CardContent>
                            </Card>


                        </Stack>

                    </Stack>



                    <Stack sx={{ width: "100%", minHeight: "100vh", color: "black", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px" }}>

                        <Stack sx={{ width: "80%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                            <Typography variant='h3'>Anywhere Poker</Typography>
                            <Typography variant='h6'>Explore the exceptional features and advantages that set our poker game apart,</Typography>
                            <Typography variant='h6'>making it the top choice for avid poker players seeking thrilling gameplay.</Typography>
                        </Stack>

                        <Stack sx={{ width: "80%" }}>
                            <img src={mobileAnimg} alt="" />
                        </Stack>

                    </Stack>


                    <Stack sx={{
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

                    </Stack>


                    {/* <Stack
                        sx={{
                            minHeight: "100vh",
                            backgroundImage: `url(${cloudImg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",

                        }}>

                    </Stack> */}

                    <Stack
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

                    </Stack>



                    <Stack
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

                    </Stack>



                    <Stack
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



                    </Stack>


                    <Stack
                        sx={{
                            width: "100%",
                            height: "633px",
                            backgroundColor: "#f6f5ff",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: '70px 0px',
                            gap: "50px"
                        }}
                    >
                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px",
                                color: "black"
                            }}
                        >
                            <Typography variant='h3'>
                                Our Current Technology Stack
                            </Typography>
                            <Typography variant='h6'>
                                Elevate user experience across diverse devices with our Cocos & Socket.IO-powered applications.
                            </Typography>
                        </Stack>

                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px",
                                color: "black",
                                flexDirection: "row"
                            }}
                        >

                            <img src={nodeimg} alt="" />
                            <img src={angularimg} alt="" />
                            <img src={reactimg} alt="" />
                            <img src={expressimg} alt="" />


                        </Stack>



                        <Stack
                            sx={{
                                width: "90%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "30px",
                                color: "black",
                                flexDirection: "row"
                            }}
                        >

                            <img src={nestimg} alt="" />
                            <img src={mongodbimg} alt="" />
                            <img src={cocos1img} alt="" />
                            <img src={pameloimg} alt="" />
                            <img src={socketioimg} alt="" />
                        </Stack>

                    </Stack>




                    <Stack
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


                            </Stack><Stack sx={{ width: '30%' }}>
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

                    </Stack>

















                </Stack>





            </Stack>
        </>
    )
}

export default PokerContent
