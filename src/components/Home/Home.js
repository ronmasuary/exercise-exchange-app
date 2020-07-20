import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Exchanges from './Exchanges';
import FacebookLink from '../FacebookLink.js';
import StartBtn from './StartBtn.js';
import Button from '@material-ui/core/Button';
import { Grid, CardHeader, Checkbox } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Fade from '@material-ui/core/Fade';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '15ch',
        },
    },
  buttonGroup: {
    display: 'inline',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    // margin: theme.spacing(1),
    // minWidth: 120,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  
}));


export default function Home({ coins, addNewEx, exchanges, removeEx }) {


    const classes = useStyles();

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        if (checked === false){
            setChecked(true);
            return;
        }
        setChecked(false);
    };
   

   const [view,setView]=useState(false);
    let f;
    let t;
    let q;
    let res;



    const handleFrom = e =>{
        f = e.target.value;
    };

    const handleTo = e =>{
        t = e.target.value;
    };

    const handleQuan = e =>{
        q = Number(e.target.value);
    };

    const handleCalc = (event) =>{
        if ( f === '' || t === '' || q <=0 ){
            event.preventDefault();
            return;
        };
        let findFromValue = coins.findIndex(cf => cf.type === f);
        let fromValue = coins[findFromValue].value;

        let findToValue = coins.findIndex(ct => ct.type === t);
        let toValue = coins[findToValue].value;

        fromValue = fromValue*q;

        res = fromValue/toValue;

        alert(res);
        addNewEx( f, t, q, res);
    };

    const toggleView = () =>{
        if (view){
            setView(false);
            return;
        }
        setView(true);
    }






    return (
        <div style={{marginTop: "40px"}}>
            <form className={classes.root} >
               <Grid container> 

<Grid item  xs={12} sm={3}>
                <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">From:</InputLabel>
        <Select
          native
          onChange={handleFrom}
          name="from"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          {coins.map(coin=>{
                            return(
                            <option value={coin.type}>{coin.type}</option>
                            )
                        })}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
      </Grid>
                

                
 
               

      <Grid item  xs={12} sm={3}>
                <FormControl required className={classes.formControl}>
        <InputLabel htmlFor="age-native-required">To:</InputLabel>
        <Select
          native
          onChange={handleTo}
          name="to"
          inputProps={{
            id: 'age-native-required',
          }}
        >
          <option aria-label="None" value="" />
          {coins.map(coin=>{
                            return(
                            <option value={coin.type}>{coin.type}</option>
                            )
                        })}
        </Select>
        <FormHelperText>Required</FormHelperText>
      </FormControl>
                   
                </Grid>

                

                       
<Grid item  xs={12} sm={3}> 
        <TextField
          id="outlined-number"
          label="quantity"
          type="number"
          InputLabelProps={{
          }}
          variant="outlined"
          onChange={handleQuan} 
        />
      </Grid>

                  
                

                
<Grid item  xs={12} sm={3}>
                    <StartBtn handleCalc={handleCalc} />
                  </Grid>


                    </Grid>
            </form>

            <div className={classes.buttonGroup}>
               


                    <div className={classes.root}>
                    <Tooltip title="show">
      <FormControlLabel 
        control={<Checkbox
           icon={ <VisibilityIcon />} 
           checked={checked} 
           checkedIcon={ <VisibilityOffIcon /> } 
           onChange={handleChange} 
           />}
      />
      </Tooltip>
      <div className={classes.container}>
        <Fade in={checked}>
            <div style={{ textAlign: "center" }}>
        <Exchanges exchanges={exchanges} removeEx={removeEx} />
        </div>
        </Fade>
      </div>
   </div>

   
                    </div>

                 
        </div>
    )
}
