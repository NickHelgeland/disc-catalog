import React from "react";
import {Grid} from "@mui/material";
import Disc from "../Disc";

const DiscList = ({ discs }) => {
    return (
        <Grid
            container
            direction="row"
            justifyContent="flex-start"
            spacing={2}
            style={{padding: '10px'}}
        >
            {discs.map(disc => {
                return (
                    <Grid item lg={3} md={3} sm={6} xs={12}>
                        <Disc disc={disc} />
                    </Grid>
                )
            })}
        </Grid>
    )
}

export default DiscList