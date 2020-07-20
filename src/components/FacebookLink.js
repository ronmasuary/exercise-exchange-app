import React, { Fragment } from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

// const useStyles = makeStyles(theme => ({
    
//     facebookIcon: {
//       color: '#fff',
//     //   fontSize: "40px",
//     //   alignSelf: 'center'
//     }
// }));



export default function FacebookLink() {

    // const classes = useStyles();

    return (
        <Fragment>
              <Tooltip title="share on facebook" >
         <a  href='https://www.facebook.com'>
             <FacebookIcon  style={{ color: "#fff" }} />
         </a>
         </Tooltip>
        </Fragment>
    )
}
