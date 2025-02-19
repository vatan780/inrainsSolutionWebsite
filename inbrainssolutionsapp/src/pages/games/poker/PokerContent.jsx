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
// import realTimeimg from "../../../images/realtime.png"


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
                            width:"100%",
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



                </Stack>



            </Stack>
        </>
    )
}

export default PokerContent
