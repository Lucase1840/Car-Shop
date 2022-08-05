import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { filterByCarType, sortCars } from "../../redux/actions.js"
import FilterTabs from "../FilterTabs/FilterTabs.jsx"

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MenuList } from '@mui/material';

export default function Filters() {
    const [carType, setcarType] = React.useState('');
    const [orderBy, setorderBy] = React.useState('');
    const dispatch = useDispatch();
    const filterOptions = useSelector(state => state.carTypeOptions)


    const handleFilterChange = (event) => {
        setcarType(event.target.value);
        setorderBy('')
        dispatch(filterByCarType(event.target.value))
    };

    const handleSortingChange = (event) => {
        setorderBy(event.target.value);
        dispatch(sortCars(event.target.value))
    };

    const screenWidth = useMediaQuery('(max-width:375px)')


    return (
        <Box sx={{ display: "flex", justifyContent: { xs: "space-around", xl: 'flex start' }, mt: 2, borderBottom: { xl: 1 }, borderColor: 'divider', width: { xl: "90%" }, ml: { xl: 9 } }}>
            {screenWidth && <FormControl sx={{ maxWidth: { xs: "160px" }, minWidth: { xs: "160px" } }}>
                <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={carType}
                    label="CarTypeOptions"
                    onChange={handleFilterChange}
                    sx={{ fontWeight: "bold", backgroundColor: "rgba(209, 214, 214, 0.2)" }}
                >
                    <MenuItem value="all">Todos</MenuItem>
                    {filterOptions ? filterOptions.map(opt => {
                        return (
                            <MenuItem value={opt}>{opt}</MenuItem>
                        )
                    }) : ''}
                </Select>
            </FormControl>}

            {/* <Box sx={{ display: "flex", borderBottom: 1, borderColor: 'divider', minWidth: '90%', bgcolor: 'background.paper', ml: "75px", justifyContent: "space-around" }}> */}
            {!screenWidth && <FilterTabs />}

            <FormControl sx={{ maxWidth: { xs: "160px" }, minWidth: { xs: "160px" }, }}>
                <InputLabel id="demo-simple-select-label">Ordenar por</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orderBy}
                    label="CarTypeOptions"
                    onChange={handleSortingChange}
                    sx={{ fontWeight: "bold", backgroundColor: "rgba(209, 214, 214, 0.2)" }}
                >
                    <MenuItem value="none">Nada</MenuItem>
                    {["De menor a mayor precio", "De mayor a menor precio", "Mas nuevos primero", "Más viejos primero"].map(opt => {
                        return (
                            <MenuItem value={opt} >{opt}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
            {/* </Box> */}
        </Box>
    );
}