import React, { Fragment } from 'react';
import {  withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#39ad31',
    borderColor: '#39ad31',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#10fc00',
      borderColor: '#10fc00',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#10fc00',
      borderColor: '#10fc00'
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    }
  }
})(Button);



const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));



export default function StartBtn({ handleCalc }) {

        const classes = useStyles();

        return (
          <Fragment>
      
            <BootstrapButton onClick={handleCalc} variant="contained" color="primary" disableRipple className={classes.margin}>
              = START = 
            </BootstrapButton>
          </Fragment>
        );
    
}
