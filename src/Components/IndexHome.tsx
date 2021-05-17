import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import React from 'react';
import { Header } from './Header';
export const IndexHome=()=>{
    return <Box>
        <Header/>
        <Typography align="center">
        <>Please enter user name in the url path to see the repositories 
                <br /> Example: <a href='http://18.217.29.18:5439/vas1916'>Repos for Sreeni
                </a>
            </>
        </Typography>
    </Box>
}