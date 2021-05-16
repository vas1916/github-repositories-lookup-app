import { FunctionComponent } from "react";
import Box from "@material-ui/core/Box";
import { AppBar,  makeStyles,Typography } from "@material-ui/core";
import { styles } from '../Styles/styles';

const useStyles = makeStyles(styles);

export const Header : FunctionComponent = ()=> {
    const classes = useStyles();
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