import React, { FunctionComponent } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Box, ListItem, makeStyles, Typography } from '@material-ui/core';
import { styles } from '../Styles/styles';
import { ListLink } from '../Types/UserRepositoriesTypes';
import { useParams } from 'react-router-dom';


const useStyles = makeStyles(styles);
const ListItemLink:FunctionComponent<ListLink> = (props) => <ListItem alignItems="center"  component="a" {...props} />;
  export const UserDisplay : FunctionComponent=()=>{
    const classes = useStyles();
    const {userId} = useParams<{userId: string}>();
    return(
        <Box className={classes.user}alignItems="center" justifyContent="center" flexDirection="row" display="flex"  >
            <Avatar className={classes.avatar} alt="Remy Sharp" src= {`https://avatars.githubusercontent.com/${userId}`} />
            <Typography variant="h3" align="center" display="inline"> 
                <ListItemLink align="center" href={`https://www.github.com/${userId}`} target={'_blank'} >
                    {userId}   
                </ListItemLink>
            </Typography>                      
        </Box>
      
    )
}


