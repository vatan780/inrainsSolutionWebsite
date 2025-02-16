import { Stack } from '@mui/material'
import React from 'react'
import astroImg from "../../../images/astronaut3.webp"

const PokerContent = () => {
    return (
        <>
            <Stack sx={{
                width: "100%",
                minHeight:"85vh",
                backgroundImage:`url(${astroImg})`,
                backgroundSize:"cover",
                backgroundPosition:"center",
                backgroundAttachment:"fixed",

                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                color:"white",
                position:"relative"
            }}>

                <Stack sx={{width:"100%"}}>
                    



                </Stack>



            </Stack>
        </>
    )
}

export default PokerContent
