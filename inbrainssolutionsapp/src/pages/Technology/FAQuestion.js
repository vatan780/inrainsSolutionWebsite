import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

const FAQuestion = () => {
    return (
        <>
            <Stack>
                <Typography variant='h3'>FREQUENTLY ASKED QUESTIONS</Typography>
                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        <Typography component="span" variant='h6'>What is MEAN Stack Development? Mention the Technologies Involved.</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        MEAN Stack Development is a comprehensive approach to building dynamic web applications using a robust combination of MongoDB, Express.js, Angular, and Node.js.
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        <Typography component="span" variant='h6'>What are the Benefits of Using MEAN Stack for Development?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        MEAN Stack Development offers numerous benefits, including a uniform language, open-source components, scalability, and full-stack JavaScript capabilities, streamlining development and enhancing productivity.
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography component="span" variant='h6'>What Types of Applications are Suitable for MEAN Stack Development?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        MEAN Stack is suitable for developing a wide range of web applications, including SPAs, real-time apps, social media platforms, CMS, e-commerce sites, and data-driven applications.
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{ width: '100%' }}>
                    <AccordionSummary
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        <Typography component="span" variant='h6'>What Skills and Expertise are Required for MEAN Stack Development?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        To effectively develop MEAN Stack applications, developers should be proficient in JavaScript, MongoDB, Express.js, Angular, Node.js, and have a good understanding of HTML, CSS, and web development principles.
                    </AccordionDetails>
                </Accordion>

            </Stack>
        </>
    )
}

export default FAQuestion
