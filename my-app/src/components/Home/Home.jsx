import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCars } from "../../redux/actions.js"
import CarCards from "../CarCards/CarCards.jsx"
import { ReactComponent as Logo } from "../../publicImages/LogoEgo.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import { width } from '@mui/system';
import Filters from "../Filters/Filters.jsx"
import { useLocation } from 'react-router-dom';
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
