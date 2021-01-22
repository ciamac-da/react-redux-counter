import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import myStyle from "./CounterStyle";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const Counter = () => {
const classes = myStyle()
    return ( 
        <>
            <div className={classes.root}>
            <Paper variant="outlined" square>
            <div className={classes.myIcons}>
            <img src="https://img.icons8.com/color/96/000000/redux.png"/>
            </div>
            <Typography variant="h2" className={classes.myH2}>
            Redux is easier, than you think!</Typography>
            
            <ButtonGroup className={classes.btnGroup}>
          <Button
          className={classes.btnMinus}
            aria-label="reduce"
          >
            <RemoveIcon fontSize="small" />
          </Button>
          <Button
            aria-label="increase"
          className={classes.btnPlus}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

            
            </Paper>
        </div>
        </>
     );
}
 
export default Counter;