import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { ButtonGroup } from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: "auto",
        width: theme.spacing(100),
        height: theme.spacing(100),
      },
      [theme.breakpoints.up('lg')]: {
        paddingTop: theme.spacing(10),
      },
    },
     myH2:{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor:"silver"

    },
    myIcons:{
        display:"flex",
        justifyContent:"center"
    },
    btnGroup:{
    display: "flex",
    justifyContent: "center",
    paddingTop: "50px",
    },
    btnMinus:{
        backgroundColor:"red !important",
        color:"white",
    },
    btnPlus:{
        backgroundColor:"green !important",
        color:"white",
    },
  }));

  export default useStyles;