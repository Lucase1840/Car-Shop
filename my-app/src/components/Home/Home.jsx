import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CarCards from "../CarCards/CarCards.jsx"
import Filters from "../Filters/Filters.jsx"
import NavBar from '../NavBar/NavBar.jsx';


export default function Home() {
    return (
        <Box sx={{ display: 'flex', flexDirection: "column", maxWidth: `100%` }}>
            <NavBar />
            <Typography className="car-name" sx={{ mt: { xs: "85px", xl: "150" }, fontSize: { xs: "2rem", xl: "3rem" }, ml: { xl: "80px", xs: "10px" }, mb: { xs: "25px" }, fontWeight: "bold" }}>Descubrí todos los modelos</Typography>
            <Filters />
            <CarCards />
            <Box
                sx={{
                    width: '100vw',
                    maxWidth: { xs: "100%", xl: "100%" },
                    background: "black",
                    height: "50px",
                    position: { xl: "fixed" },
                    bottom: 0,
                    mt: { xs: "65px" }
                }}
            ></Box>
        </Box >
    );
}
