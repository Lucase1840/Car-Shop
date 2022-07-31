import { Box, Grid, Typography, ImageListItem, Button } from '@mui/material';
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
        <Box >
            <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }} columns={{ xs: 1, sm: 2, md: 2, xl: 2 }} sx={{
                display: 'flex',
                backgroundColor: "#F2F2F2;",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "end",
            }} >
                <Box sx={{
                    height: "420px",
                }}>
                    <img src={carDetails.photo} alt={carDetails.name} />
                </Box>
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
                let direction = i % 2 === 0 ? "row" : "row-reverse"
                return (
                    < Box sx={{
                        padding: 3,
                        display: 'flex',
                        flexDirection: direction,
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        backgroundColor: "#F2F2F2;",
                    }}>
                        <Box sx={{
                            width: "400px",
                            align: "center",
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
        </Box >
    )
}