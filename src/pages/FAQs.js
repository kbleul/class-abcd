import Footer from "../components/Footer"
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
    return (
        <main>
            <h2 className="mt-32 text-center text-5xl font-mono mb-8">FAQs</h2>


            <article className="w-4/5 ml-[10%]">

                <h2 className="mt-32  text-3xl font-mono mb-8 font-bold text-gray-700">Top 6 Frequently asked questions</h2>

                <Accordion sx={{ marginTop: "5vh" }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>1. What technology requirements are needed to take courses on your online education site?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            In general, you'll need a computer or mobile device with a stable internet connection and a web browser. Some courses may have additional technology requirements, such as specific software or hardware, which will be noted in the course description.
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion sx={{
                    marginTop: "8vh",
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>2. How do I enroll in a course?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            To enroll in a course, simply browse our course catalog and select the course you'd like to take. Then, click the "Enroll" button and follow the prompts to create an account and pay for the course.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                    marginTop: "8vh",

                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>3. What kind of support is available if I have questions or issues during the course ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Our online education site offers a variety of support options, including email support, live chat, and a community forum where you can connect with other students and instructors. Many courses also have dedicated support staff who can help you with course-specific questions.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                    marginTop: "8vh",
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>4.  Do I have to complete the course within a certain timeframe ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Generally, you'll have access to the course materials for a certain amount of time (which will be specified in the course description) and can complete the course at your own pace within that timeframe. Some courses may have specific start and end dates, so be sure to check the course details before enrolling.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                    marginTop: "8vh",
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>5. Will I receive a certificate or other credential upon completing a course ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Many of our courses offer certificates of completion or other credentials to demonstrate your mastery of the material. Be sure to check the course description to see if a certificate is offered for the course you're interested in.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{
                    marginTop: "8vh",
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        sx={{
                            '& .MuiTypography-root': {
                                fontWeight: 'bold'
                            }
                        }}
                    >
                        <Typography>6.  What is the refund policy if I'm not satisfied with the course ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            We offer a satisfaction guarantee for our courses, which means that if you're not satisfied with the course for any reason, you can request a refund within a certain timeframe (which will be specified in our refund policy). Be sure to review the refund policy before enrolling in a course.
                        </Typography>
                    </AccordionDetails>
                </Accordion>



                {/* <section className="leading-8">

                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">2. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">3. Consectetuer adipiscing elit Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">4. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">5. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">6. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">7. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">8. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">9. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-orange-500 text-lg mb-4">10. The standard Lorem Ipsum passage Etiam faucibus viverra libero vel efficitur. Ut semper nisl ut laoreet ultrices ?</h3>
                        <p>Tincidunt ut laoreet dolore At vero eos et Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
                    </div>

                </section> */}
            </article>
            <Footer />

        </main>
    )
}

export default FAQs