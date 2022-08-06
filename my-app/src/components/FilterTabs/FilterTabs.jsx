import * as React from 'react';
import { useDispatch, useSelector } from "react-redux"
import { filterByCarType } from "../../redux/actions.js"
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';



export default function FilterTabs({ setorderBy }) {
    const dispatch = useDispatch();
    const filterOptions = useSelector(state => state.carTypeOptions);
    const [value, setValue] = React.useState(0);

    const onClick = (event) => {
        setValue(event.target.innerText);
        setorderBy('');
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