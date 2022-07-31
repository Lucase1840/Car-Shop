import { Box, Grid, Typography, ImageListItem, Button } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom';
import { getCarDetails } from "../../redux/actions.js"
import {
    makeStyles,
} from "@material-ui/core/styles";


export default function CarDetails() {
    const dispatch = useDispatch();
    const detailsOfSelectedCar = useSelector(state => state.carDetails);
    const { carId } = useParams();

    useEffect(() => {
        dispatch(getCarDetails(carId))
    }, [detailsOfSelectedCar.name])

    console.log(detailsOfSelectedCar)
    return (
        <Box>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 4 }} columns={{ xs: 1, sm: 2, md: 2, xl: 2 }}>
                <Grid item xs={1}>
                    <Box sx={{
                        // display: 'flex',
                        // flexDirection: "column",
                        // justifyContent: "center",
                        // alignItems: "center",
                        // width: "280px",
                        // height: "132px"
                    }}>
                        <ImageListItem   >
                            <img src={detailsOfSelectedCar.photo} alt={detailsOfSelectedCar.name} />
                        </ImageListItem>
                    </Box>
                </Grid>
                <Grid item xs={1}>
                    <Box sx={{ backgroundColor: '#efefee' }}>{detailsOfSelectedCar.name}</Box>
                </Grid>
            </Grid>
        </Box>
    )
}