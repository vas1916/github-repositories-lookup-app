import React from 'react';
import { makeStyles, useScrollTrigger, Zoom } from "@material-ui/core";
import { ScrollType } from "../Types/UserRepositoriesTypes";

const useStyles = makeStyles(() => ({
    transitionTop: {
      position: 'fixed',
      bottom: 20,
      right:20, 
    },
  }));

export function ScrollTop(props:ScrollType){
    const { children, window } = props;
    const classes = useStyles();
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event:any) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

        if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.transitionTop}>
            {children}
            </div>
        </Zoom>
        );
}