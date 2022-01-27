import React from "react";
import {Paper, Typography} from "@mui/material";

const Disc = ({disc: {name, manufacturer, type, tag, speed, glide, turn, fade}}) => {
 return (
     <Paper square>
         <Typography variant="h4">{name}</Typography>
         <Typography variant="h6">{manufacturer}</Typography>
         <Typography variant="body">{speed},</Typography>
         <Typography variant="body">{glide},</Typography>
         <Typography variant="body">{turn},</Typography>
         <Typography variant="body">{fade}</Typography>
     </Paper>
 )
}

export default Disc