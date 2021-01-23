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
import {useSelector ,useDispatch} from "react-redux";
import { decrement, increment } from '../../actions/counter';

const Counter = () => {

  const counter = useSelector(state=>state)
  const dispatch = useDispatch();
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
               <Badge className={classes.badge}   color="secondary">
               {counter}
                 <ShoppingCartIcon />
               </Badge>
             </IconButton>




            <ButtonGroup className={classes.btnGroup}>
          <Button className={classes.btnMinus} aria-label="reduce"  onClick={ ()=> dispatch(decrement()) }>
            <RemoveIcon fontSize="small" />
          </Button>
          <Button className={classes.btnPlus} aria-label="increase" onClick={ ()=> dispatch(increment()) }>
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>

            
            </Paper>
        </div>
        </>
     );
}
 
export default Counter;