import { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import { AppBar,Typography } from "@material-ui/core";

export const Header : FunctionComponent = ()=> {
    return(
        <Box>
            <AppBar position="static">
                <Typography align= "center" variant="h6" color="inherit">
                    Welcome to Git hub Repositories Finder app
                </Typography>
            </AppBar>
        </Box>
    )

}