import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
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
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';


export default function AppBarButtons({ handleHomeClicked, homeClicked }) {
    return (
        <Fragment>
            
            <ButtonGroup size="large" color="inherit" aria-label="large outlined primary button group">
            <Tooltip title="show">
            <IconButton
            color="inherit" 
            component={Link}
            to='/'
         linkButton={true}>         
           { homeClicked? <HomeIcon onClick={handleHomeClicked} /> : < HomeOutlinedIcon onClick={handleHomeClicked} /> } 
         </IconButton>
         </Tooltip>

          <Tooltip title="show">
          <IconButton
            color="inherit" 
            component={Link}
            to='/currencies'
         linkButton={true}>         
           { homeClicked? <AddBoxOutlinedIcon onClick={handleHomeClicked} />
            :
             < AddBoxIcon onClick={handleHomeClicked} /> } 
         </IconButton>
      </Tooltip>

      { homeClicked?  <Tooltip title="share on facebook" >
      <IconButton
            color="inherit" 
            href='https://www.facebook.com'
         linkButton={true}>         
          <FacebookIcon  />
         </IconButton>
         </Tooltip>
          : 
          [] }
         
</ ButtonGroup >


        </Fragment>
    )
}
