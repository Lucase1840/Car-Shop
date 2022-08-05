import { Box, Grid, Typography, ImageListItem, Button } from '@mui/material';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { getAllCars } from "../../redux/actions.js"
import {
    makeStyles,
} from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
        "& .hidden-button": {
            opacity: 0,
            padding: "5px",
            rounding: "round",
            color: "white",
        },
        "&:hover .hidden-button": {
            opacity: 1,
            backgroundColor: "#191919",
            color: "white",
            padding: "5px",
            borderRadius: 50,
            width: "152px",
            fontWeight: 'bold'
        },
        "& .car-name": {
            fontWeight: 'bold',
        },
        "&:hover .car-name": {
            fontWeight: 'bold',
            color: "#f44336"
        }
    }
});

function CarCards() {
    const dispatch = useDispatch();
    const cars = useSelector(state => state.allCars)
    const filteredCarsByType = useSelector(state => state.filteredCarsByType)
    const sortingFlag = useSelector(state => state.sortFlag)
    const classes = useStyles();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    const carsToRender = filteredCarsByType.length ? filteredCarsByType : cars


    const hadleClick = (carId) => {
        navigate(`cardetails/${carId}`)
    }
    console.log(cars)
    return (
        <Box>
            <Grid container spacing={{ xs: 1, sm: 2, md: 3, xl: 1 }} columns={{ xs: 1, sm: 2, md: 3, xl: 4 }} >
                {carsToRender ? carsToRender.map((car) => (
                    <Grid item xs={1} key={car.id} className={classes.root} sx={{ mt: { xs: "60px", xl: "150px" } }}>
                        <Box sx={{
                            backgroundColor: '#efefee',
                            // width: { xs: "360px", xl: "280px" },
                            height: "260px",
                            display: 'flex',
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: 0,
                            // mt: { xs: "20px", xl: "140px" }
                        }}>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Typography variant="h4" className="car-name">{car.name}</Typography>
                                <Typography>{`${car.year} | ${car.argentinianPrice}`}</Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                width: { xs: "350px", xl: "280px" },
                                mt: { xs: "15px" },
                                height: "132px"
                            }}>
                                <ImageListItem   >
                                    <img src={car.photo} alt={car.name} />
                                </ImageListItem>
                            </Box>
                            <Button className="hidden-button" onClick={() => hadleClick(car.id)}>Ver Modelo</Button>
                        </Box>
                    </Grid>
                )) : ''}
            </Grid>
        </Box >
    );
}

export default CarCards;