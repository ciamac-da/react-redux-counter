import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import myStyle from "./CounterStyle";
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

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

            <Typography variant="h3" className={classes.myH3}>
            Counter!</Typography>
            
            <IconButton aria-label="cart" className={classes.headBadge}>
               <Badge className={classes.badge} badgeContent={4} color="secondary">
                 <ShoppingCartIcon />
               </Badge>
             </IconButton>




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