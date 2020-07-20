import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import UndoIcon from '@material-ui/icons/Undo';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FacebookLink from '../FacebookLink.js';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AppBarButtons from './AppBarButtons.js';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
      flex: 1,
    },
    background: {
      backgroundColor: "#296e3b"
    }
  }));


export default function Header() {
    const classes = useStyles();

    const [homeClicked, setHomeClicked] = useState(true);
    

    const handleHomeClicked = () =>{
      if (homeClicked){
        setHomeClicked(false);
        return;
      }
      setHomeClicked(true);
    }

   
    return (     
        <AppBar className={classes.background} position="static">
          <Toolbar>
         
            <Typography variant="h4" className={classes.title}>
              Exchange
            </Typography>
         
          <AppBarButtons handleHomeClicked={ handleHomeClicked } homeClicked = { homeClicked } />
          
          </Toolbar>
        </AppBar>
    );
  }
  