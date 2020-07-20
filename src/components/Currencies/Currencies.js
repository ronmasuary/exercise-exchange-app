import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      height: '5ch'
    },
  },
  button: {
    width: '25ch',
    height: '6.5ch'
  }
}));


 


export default function Coins({ coins,addNewCoin }) {

    const classes = useStyles();

    let type;
    let value;

    const handleType = e =>{
        type = e.target.value;
    }

    const handleValue = e =>{
        value = Number(e.target.value);
    }
    return (
        <div>

        {coins.map((c)=>{
            return(
                <div>
                    {c.type}
                    <br/>
                  {  c.value}
                </div>
            )
        })}

<form className={classes.root} noValidate >


      <TextField id="outlined-basic" label="type" variant="outlined" onChange={ handleType } />


      <TextField id="outlined-basic" label="value" variant="outlined" onChange={ handleValue } />




           <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<SaveIcon />}
        onClick={()=>{addNewCoin(type,value)}}
      >
        Save
      </Button>

      </form>
        </div>
    )
}
