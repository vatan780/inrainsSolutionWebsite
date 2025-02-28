import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material';

import meatingImg from '../../images/contactForm.avif'
import bgimg from '../../images/contactForm2.jpg'
import map from '../../images/map.png'
import axios from 'axios'


const ContactComponent = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        messages: "",
        privacyChecked: false,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.mobile.trim()) newErrors.mobile = "Contact Number is required";
        if (!formData.messages.trim()) newErrors.messages = "Message is required";
        if (!formData.privacyChecked) newErrors.privacyChecked = "You must agree to the privacy policy";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if no errors
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted:", formData);
            // You can add your API call or form submission logic here
            axios.post('https://ludo.invinciblebrains.com/clientQuery',formData) // Replace with your API endpoint
                .then((response) => {
                    console.log("response.data========>",response.data)
                    alert("response.data")
                    // setData(response.data);
                    // setLoading(false);
                })
                .catch((error) => {
                    console.log("error========>",error)
                    // setError(error.message);
                    // setLoading(false);
                });
        }
    };







    return (
        <>
            <Stack sx={{}}>

                <Stack direction={"row"}
                    sx={{
                        width: "100%",
                        // backgroundImage: `url(${meatingImg})`,
                        backgroundImage: `url(${bgimg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "900px"
                    }}
                    justifyContent={"center"}
                    alignContent={"center"}
                    gap={20}
                >

                    <Stack sx={{ width: "40%", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }} gap={2} justifyContent={"center"} alignContent={"center"}>

                        <Typography variant='h2' sx={{ fontWeight: "600" }}>
                            Unleash the Power of Digital: Drive Results with Invincible Brains Solutions.
                        </Typography>

                        <Typography variant='h5'>
                            Invincible Brains Solutions was born from the vision to lead India's charge in the online gaming arena and drive a gaming revolution that transcends boundaries.
                        </Typography>

                        <Button sx={{
                            alignSelf: "start",
                            background: "white",
                            fontSize: "20px",
                            color: "black",
                            padding: "5px 20px",
                            fontWeight: "600"
                        }}>Contact Us</Button>

                    </Stack>

                    <Stack
                        sx={{
                            width: "40%",
                            backgroundColor: "white",
                            height: "600px",
                            marginTop: "200px",
                            padding: "20px",
                            boxShadow: 3,
                            borderRadius: "8px",
                        }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Box
                            component="form"
                            sx={{ width: "100%" }}
                            noValidate
                            autoComplete="off"
                            onSubmit={handleSubmit}
                        >
                            <Stack sx={{ width: "100%" }} spacing={2}>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                    sx={{ width: "80%", alignSelf: "center" }}
                                />

                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                    sx={{ width: "80%", alignSelf: "center" }}
                                />

                                <TextField
                                    label="Contact Number"
                                    variant="outlined"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    error={!!errors.mobile}
                                    helperText={errors.mobile}
                                    sx={{ width: "80%", alignSelf: "center" }}
                                />

                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    name="messages"
                                    multiline
                                    rows={3}
                                    value={formData.messages}
                                    onChange={handleChange}
                                    error={!!errors.messages}
                                    helperText={errors.messages}
                                    sx={{ width: "80%", alignSelf: "center" }}
                                />

                                <FormControlLabel
                                    sx={{ alignSelf: "center" }}
                                    control={<Checkbox name="privacyChecked" checked={formData.privacyChecked} onChange={handleChange} />}
                                    label="* I confirm that I have read, understand and agree to the privacy policy"
                                />
                                {errors.privacyChecked && (
                                    <Typography variant="caption" color="error">
                                        {errors.privacyChecked}
                                    </Typography>
                                )}

                                <Button
                                    variant="contained"
                                    type="submit"
                                    sx={{
                                        width: "80%",
                                        alignSelf: "center"
                                    }}

                                >
                                    Submit
                                </Button>
                            </Stack>
                        </Box>
                    </Stack>


                </Stack>


                <Stack
                    sx={{
                        width: "100%",
                        // margin:"auto",
                        padding: "20px 100px",



                    }}

                >
                    <Stack
                        gap={10}
                    >
                        <Typography variant='h3'>GET IN TOUCH WITH OUR TEAM</Typography>

                        <Stack
                            sx={{
                                backgroundImage: `url(${map})`,
                                backgroundSize: "cover",
                                width: "100%",
                                height: "1000px",
                                backgroundPosition: "center"

                            }}
                        >

                        </Stack>

                    </Stack>
                </Stack>

            </Stack>

        </>
    )
}

export default ContactComponent
