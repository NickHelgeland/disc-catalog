import React, {useEffect, useState} from "react";
import {FormControl, Grid, InputLabel, MenuItem, Select, Typography} from "@mui/material";
import DiscList from "../DiscList";
import axios from "axios";

const DiscCatalog = () => {
    const p2 = {
        name: "P2",
        manufacturer: "Discmania",
        type: "Putter",
        tag: "Neutral",
        speed: 2,
        glide: 3,
        turn: 0,
        fade: 1
    }

    const [brandFilter, setBrandFilter] = useState('None')
    const [typeFilter, setTypeFilter] = useState('None')
    const [tagFilter, setTagFilter] = useState('None')
    const [discList, setDiscList] = useState([])
    const [filteredList, setFilteredList] = useState([])

    const handleBrandFilter = (event) => {
        setBrandFilter(event.target.value)
    }

    const handleTypeFilter = (event) => {
        setTypeFilter(event.target.value)
    }

    const handleTagFilter = (event) => {
        setTagFilter(event.target.value)
    }

    const checkFilter = (disc) => {
        let brand = true
        let type = true
        let tag = true

        if (brandFilter !== 'None') {
            brand = disc.manufacturer === brandFilter
        }
        if (typeFilter !== 'None') {
            type = disc.type === typeFilter
        }
        if (tagFilter !== 'None') {
            tag = disc.tag === tagFilter
        }
        return brand && type && tag
    }

    useEffect(() => {
        setFilteredList(discList.filter(checkFilter))
    }, [brandFilter, typeFilter, tagFilter])

    useEffect(() => {
        axios.get('http://localhost:8080/getDiscs').then((response) => {
            console.log(response)
            setDiscList(response.data)
            setFilteredList(response.data)
        })
    }, [])

    return (
        <div>
            <Typography variant="h2">Disc Catalog</Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                spacing={2}
                style={{padding: '10px'}}
            >
                <Grid item xs={12} sm={4} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="brandLabel">Brand</InputLabel>
                        <Select
                            labelId="brandLabel"
                            onChange={handleBrandFilter}
                            style={{minWidth: '100%'}}
                        >
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="Discmania">Discmania</MenuItem>
                            <MenuItem value="Discraft">Discraft</MenuItem>
                            <MenuItem value="Dynamic Discs">Dynamic Discs</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="typeLabel">Type</InputLabel>
                        <Select
                            labelId="typeLabel"
                            onChange={handleTypeFilter}
                        >
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="Putter">Putter</MenuItem>
                            <MenuItem value="Midrange">Midrange</MenuItem>
                            <MenuItem value="Fairway">Fairway Driver</MenuItem>
                            <MenuItem value="Distance">Distance Driver</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <FormControl fullWidth variant="outlined">
                        <InputLabel id="tagLabel">Stability</InputLabel>
                        <Select
                            labelId="tagLabel"
                            onChange={handleTagFilter}
                        >
                            <MenuItem value="None">None</MenuItem>
                            <MenuItem value="Understable">Understable</MenuItem>
                            <MenuItem value="Neutral">Neutral</MenuItem>
                            <MenuItem value="Stable">Stable</MenuItem>
                            <MenuItem value="Overstable">OverStable</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <DiscList discs={filteredList} />
        </div>
    )
}

export default DiscCatalog