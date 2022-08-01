import { Box, Grid, Typography, ImageListItem, Button, Paper } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { getCarDetails } from "../../redux/actions.js"
import {
    makeStyles,
} from "@material-ui/core/styles";
import Carousel from "../Carousel/Carousel.jsx"

export default function CarDetails() {
    const dispatch = useDispatch();
    const carDetails = useSelector(state => state.carDetails);
    const { carId } = useParams();

    useEffect(() => {
        dispatch(getCarDetails(carId))
    }, [carId, dispatch]);


    console.log(carDetails)
    return (
        <>
            <Grid container spacing={{ xs: 1, sm: 1, md: 3, xl: 4 }} columns={{ xs: 1, sm: 1, md: 2, xl: 2 }} sx={{
                display: 'flex',
                backgroundColor: "white",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "end",
            }} >
                <Box
                    component="img"
                    sx={{
                        mt: "20px",
                        backgroundColor: "white",
                        display: 'block',
                        overflow: 'hidden',
                        width: '100%',
                        maxWidth: { xs: 600, md: 800 },
                        borderRadius: 3,
                    }}
                    src={carDetails.photo}
                    alt={carDetails.name}
                />
                {/* <img src={carDetails.photo} alt={carDetails.name} sx={{
                        width: "100%"
                    }} />
                </Paper> */}
                <Grid item xs={1}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                        width: "60%",
                        ml: "50px",
                    }}>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>{carDetails.name}</Typography>
                        <Typography variant="h4" sx={{ fontWeight: "bold" }}>{carDetails.title}</Typography>
                        <p dangerouslySetInnerHTML={{ __html: carDetails.description }}></p>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Carousel carouselData={carDetails.model_features} />
            </Box>
            {carDetails ? carDetails.model_highlights?.map((highlight, i) => {
                let direction = i % 2 === 0 ? { xl: "row", xs: "column" } : { xl: "row-reverse", xs: "column" }
                return (
                    < Box sx={{
                        display: 'flex',
                        flexDirection: direction,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: "white;",
                        width: "100%",
                    }}>
                        <Box sx={{
                            width: "100%",
                            align: "center",
                            padding: 1,
                        }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "20px" }}>{highlight.title}</Typography>
                            <p dangerouslySetInnerHTML={{ __html: highlight.content }}></p>
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
        </>
    )
}