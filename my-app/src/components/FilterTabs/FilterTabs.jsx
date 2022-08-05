import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from "react-redux"
import { filterByCarType } from "../../redux/actions.js"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


export default function FilterTabs() {
    const dispatch = useDispatch();
    const filterOptions = useSelector(state => state.carTypeOptions)
    const [value, setValue] = React.useState(0);

    const onClick = (event) => {
        setValue(event.target.innerText);
        dispatch(filterByCarType(event.target.innerText))
    };

    return (
        <List
            sx={{ width: '100%', bgcolor: 'background.paper', display: "flex", }}
        >
            <ListItem sx={{ minWidth: "550px", maxWidth: "650px", }}>
                <Typography sx={{ fontWeight: "bold", textAlign: "center", mr: 2 }}>Filtrar por</Typography>
                <ListItemButton onClick={onClick} sx={{ borderRadius: 50, p: 1, textAlign: "center", justifyContent: "center" }} >
                    Todos
                </ListItemButton>
                {filterOptions ? filterOptions.map((opt, i) => {
                    return (
                        <ListItemButton onClick={onClick} sx={{ borderRadius: 50, p: 1, textAlign: "center", justifyContent: "center" }} key={i}>
                            {opt}
                        </ListItemButton>
                    )
                }) : ""}
            </ListItem>
        </List>
    );
}