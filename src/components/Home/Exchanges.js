import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
});

export default function Exchanges({ exchanges, removeEx }) {

    const classes = useStyles();

    return (
        <div>
            {exchanges.map((ex, index) =>{
                return (
                    <div>
                        
                        <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        # {index + 1}
        </Typography>
        <Typography variant="h5" component="h2">
        from {ex.from} to {ex.to}
          <br />
          {ex.quantity} = {ex.result}
        </Typography>
      </CardContent>
      <CardActions>
          <DeleteIcon onClick={()=>{removeEx(index)}} />
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>

                    </div>
                )
            })}


<Card className={classes.root} >
      
      </Card>
  
        </div>
    )
}
