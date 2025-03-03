import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import meanStackImg from '../../images/mearnStack.webp'
import khiladiadda from '../../images/khiladiadda.webp'
import CardSlider from './CardSlider'
import FAQuestion from './FAQuestion'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const MearnStack = () => {
    return (
        <>
        <Navbar/>
            <Stack
                sx={{ width: "100%", height: "auto" ,marginTop:"50px"}}
            >

                <Stack
                    sx={{
                        width: "80%",
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: "center",
                        alignItems: "start",
                        margin: "auto",
                        gap: "50px"

                    }}
                >

                    <Stack  >
                        <Typography variant='h3'>
                            Web & App Development +
                        </Typography>
                        <Typography variant='h3'>
                            Digital & Growth Marketing +
                        </Typography>
                        <Typography variant='h3'>
                            Lead Generation
                        </Typography>
                        <Typography variant='h6'>
                            Your end-to-end partner to build, scale, and transform businesses with technology.
                        </Typography>

                    </Stack>
                    <Button variant='contained' sx={{ width: "fit-content" }}>Get Estimate</Button>


                    <Stack
                        sx={{
                            width: "90%",
                            maxHeight: "400px",
                            // backgroundImage:`url(${meanStackImg})`
                        }}
                    >
                        <img src={meanStackImg} alt="" width={"90%"} height={"500px"} />

                    </Stack>



                </Stack>

                <Stack
                    sx={{
                        width: "100%",
                        margin: "auto",
                        // marginTop:"200px"

                    }}
                    gap={2}
                >
                    <Stack>
                        <div class="line-text">Trusted by conglomerates, enterprises, and startups alike</div>
                    </Stack>

                    <Stack sx={{ width: "80%", margin: "auto" }}>
                        <img src={khiladiadda} alt="" width="100px" height="100px" />

                    </Stack>

                </Stack>


                <Stack
                    sx={{
                        width: "100%",
                        margin: "auto",
                        marginTop: "100px",
                        marginBottom: "50px"

                    }}
                    gap={2}
                >
                    <Stack sx={{ width: '80%', margin: "auto" }}>
                        <Typography variant='h4'>OUR END-TO-END CUSTOM WEB DEVELOPMENT SERVICES</Typography>
                    </Stack>

                    <Stack sx={{ width: "80%", margin: "auto" }}>
                        <Typography variant='h6'>
                            Choose Taab Solutions for expert MEAN Stack development, leveraging MongoDB, Express.js, Angular, and Node.js to create dynamic, efficient web applications. Our team ensures scalable, responsive solutions that are robust and future-ready. Propel your business with our advanced MEAN Stack expertise.
                        </Typography>

                    </Stack>

                </Stack>


                <Stack
                    sx={{ width: "80%", margin: "auto" }}
                >

                    <CardSlider />

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
                        gap: "50px"
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

                        <Button sx={{
                            backgroundColor: "black",
                            color: "white",
                            width: "fit-content",

                        }}>
                            Contact Us
                        </Button>
                    </Stack>



                </Stack>

                <Stack
                    sx={{ width: "100%", marginTop: "100px", marginBottom: "100px", background: "" }}
                >
                    <Stack sx={{
                        width: "80%",
                        margin: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: 'center',

                    }}>

                        <FAQuestion />
                    </Stack>
                </Stack>


                <Stack>
                    <Footer />
                </Stack>




            </Stack>
        </>
    )
}

export default MearnStack
