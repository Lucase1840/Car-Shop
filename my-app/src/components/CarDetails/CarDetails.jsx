import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { getCarDetails } from "../../redux/actions.js"
import Carousel from "../Carousel/Carousel.jsx"
import NavBar from "../NavBar/NavBar.jsx"

export default function CarDetails() {
    const dispatch = useDispatch();
    const carDetails = useSelector(state => state.carDetails);
    const { carId } = useParams();

    useEffect(() => {
        dispatch(getCarDetails(carId))
    }, [carId, dispatch]);

    return (
        <>
            <NavBar />
            <Grid container spacing={{ xs: 1, sm: 1, md: 3, xl: 4 }} columns={{ xs: 1, sm: 1, md: 2, xl: 2 }} sx={{
                display: 'flex',
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "end",
                width: '100vw',
            }} >
                <Box
                    component="img"
                    sx={{
                        mt: "20px",
                        backgroundColor: "white",
                        display: 'block',
                        overflow: 'hidden',
                        width: '100vw',
                        maxWidth: { xs: "100%", xl: 800 },
                        borderRadius: 3,
                        p: 1,
                        height: { xs: "250px", xl: "500px" },
                        objectFit: "contain"

                    }}
                    src={carDetails.photo}
                    alt={carDetails.name}
                />
                <Grid item xs={1}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        ml: { xs: "15px", xl: "65px" },
                        width: '100%',
                    }}>
                        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xl: "2rem" } }}>{carDetails.name}</Typography>

                        <Typography variant="h5" sx={{ fontWeight: "bold", fontSize: { xl: "3rem" }, width: { xl: "70%" }, mr: { xs: 1 }, pr: { xs: 1 } }}>{carDetails.title}</Typography>

                        <Typography dangerouslySetInnerHTML={{ __html: carDetails.description }} sx={{ fontSize: { xs: "5vw", xl: "1.5rem" }, width: { xl: "70%" }, mr: { xs: 1 }, pr: { xs: 2 } }}></Typography>
                    </Box>
                </Grid>

                <Box
                    sx={{
                        width: '100vw',
                        maxWidth: { xs: "100%", xl: "100%" },
                    }}
                >
                    <Carousel carouselData={carDetails.model_features} />
                </Box>

                {carDetails ? carDetails.model_highlights?.map((highlight, i) => {
                    let direction = i % 2 === 0 ? { xl: "row", xs: "column" } : { xl: "row-reverse", xs: "column" }
                    return (
                        <Box sx={{
                            display: 'flex',
                            flexDirection: direction,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            backgroundColor: "white;",
                            width: { xs: "100%", xl: "70%" },
                            p: { xs: 2, xl: 6 },
                            mt: { xl: "20px" }
                        }}>
                            <Box sx={{
                                width: { xs: "100%", xl: "30%" },
                                align: "center",
                                padding: 1,
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "20px", mt: "10px" }}>{highlight.title}</Typography>

                                <Typography dangerouslySetInnerHTML={{ __html: highlight.content }} sx={{ fontSize: { xs: "16px" } }}></Typography>
                            </Box>
                            <Box
                                component="img"
                                sx={{
                                    display: 'block',
                                    overflow: 'hidden',
                                    width: '100%',
                                    maxWidth: "600px",
                                    borderRadius: 3,
                                }}
                                src={highlight.image}
                                alt={highlight.name}
                            />
                        </Box>
                    )
                }) : ''}

                <Box
                    sx={{
                        minWidth: '100vw',
                        maxWidth: { xs: "100%", xl: "100%" },
                        background: "black",
                        height: "50px",
                        mt: "35px",
                        mb: "-20px",
                        ml: { xs: "8px", xl: "15px" }
                    }}
                ></Box>
            </Grid>

        </>
    )
}