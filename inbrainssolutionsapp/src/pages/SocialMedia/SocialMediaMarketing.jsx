import React from 'react'
import Navbar from '../navbar/Navbar'
import Footer from '../footer/Footer'
import khiladiadda from '../../images/khiladiadda.webp'
import meanStackImg from '../../images/mearnStack.webp'
import media1 from '../../snackLadderImage/media1.avif'


import media2 from '../../snackLadderImage/media2.jpg'
import media3 from '../../snackLadderImage/media3.jpg'
import media4 from '../../snackLadderImage/media4.jpg'
import media5 from '../../snackLadderImage/media5.jpg'
import media6 from '../../snackLadderImage/media6.jpg'
import media7 from '../../snackLadderImage/media7.jpg'
import media8 from '../../snackLadderImage/media8.jpg'
import media9 from '../../snackLadderImage/media9.jpg'
import media10 from '../../snackLadderImage/media10.jpg'
import media11 from '../../snackLadderImage/media11.jpg'

import { useNavigate } from 'react-router-dom'



import { Stack, Typography, Button, Box, ImageList, ImageListItem, useTheme, useMediaQuery } from '@mui/material'


const SocialMediaMarketing = () => {
  const navigate = useNavigate();

  let images = [
    media2, media3, media4, media5, media6, media7, media8, media9,
    media10, media11,

  ]


  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Navbar />


      <Stack
        sx={{ width: "100%", height: "auto", marginTop: "50px" }}
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
          <Button
            variant='contained'
            sx={{ width: "fit-content" }}
            onClick={() => navigate("/contact")}
          >Explore Our Services</Button>


          <Stack
            sx={{
              width: "90%",
              maxHeight: "400px",
              // backgroundImage:`url(${meanStackImg})`
            }}
          >
            <img src={media1} alt="" width={"90%"} height={"500px"} />

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

      </Stack>



      {/* <Stack
        sx={{
          width: "100%",
          height: "auto",
          marginTop: "50px"
        }}
      >
        <Stack sx={{width:"80%" , margin:"50px auto"}}>
          <Typography variant='h3'>Our Recent Work</Typography>
        </Stack>


        <Stack
          sx={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            margin: "auto",
            gap: "20px"
          }}
        >


          {arr.map((item) => {
            return <img
              style={{ minHeight: "200px", maxWidth: "30%" }}
              src={item}
              alt="" />
          })
          }



        </Stack>

      </Stack> */}



      {/* <Box sx={{ width: '100%', mt: 5 }}>
    <Box sx={{ width: '80%', mx: 'auto', mb: 5 }}>
      <Typography variant="h3">Our Recent Work</Typography>
    </Box>
    <ImageList
       sx={{
        width: '80%',
        mx: 'auto',
        '& .MuiImageListItem-root': {
          overflow: 'hidden',
        },
        '& img': {
          transition: 'transform 0.3s ease-in-out',
        },
        '& img:hover': {
          transform: 'scale(1.1)',
        },
      }}
      variant="masonry"
      cols={3}
      gap={20}
    >
      {images.map((src, index) => (
        <ImageListItem key={index}>
          <img
            src={`${src}?w=248&fit=crop&auto=format`}
            srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={`Image ${index + 1}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box> */}




      <Box sx={{ width: '100%', mt: 5 }}>
        <Box sx={{ width: '80%', mx: 'auto', mb: 5 }}>
          <Typography variant="h3">Our Recent Work</Typography>
        </Box>
        <ImageList
          sx={{
            width: '80%',
            mx: 'auto',
            '& .MuiImageListItem-root': {
              overflow: 'hidden',
            },
            '& img': {
              transition: 'transform 0.3s ease-in-out',
            },
            '& img:hover': {
              transform: 'scale(1.1)',
            },
          }}
          variant="masonry"
          cols={isMobile ? 1 : 3} // Adjust columns based on screen size
          gap={20}
        >
          {images.map((src, index) => (
            <ImageListItem key={index}>
              <img
                src={`${src}?w=248&fit=crop&auto=format`}
                srcSet={`${src}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={`Image ${index + 1}`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>











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
          marginBottom: "20px",
          padding: "20px"
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
            onClick={() => navigate('/contact')}
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
              padding: "20px 30px",
              // fontSize:"20px"

            }}>
            Contact Us
          </Button>
        </Stack>



      </Stack>

      <Footer />

    </>
  )
}

export default SocialMediaMarketing
