import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { filterByCarType, sortCars } from "../../redux/actions.js"

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


    return (
        <Box sx={{ minWidth: 140 }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={carType}
                    label="CarTypeOptions"
                    onChange={handleFilterChange}
                >
                    <MenuItem value="all">Todos</MenuItem>
                    {filterOptions ? filterOptions.map(opt => {
                        return (
                            <MenuItem value={opt}>{opt}</MenuItem>
                        )
                    }) : ''}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel id="demo-simple-select-label">Filtrar por</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={orderBy}
                    label="CarTypeOptions"
                    onChange={handleSortingChange}
                >
                    <MenuItem value="none">Nada</MenuItem>
                    {["De menor a mayor precio", "De mayor a menor precio", "Mas nuevos primero", "Más viejos primero"].map(opt => {
                        return (
                            <MenuItem value={opt}>{opt}</MenuItem>
                        )
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}