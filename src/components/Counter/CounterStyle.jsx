import { makeStyles } from '@material-ui/core/styles';
import Badge from '@material-ui/core/Badge';


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
    myH3:{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        paddingTop: "100px"
    },
    myIcons:{
        display:"flex",
        justifyContent:"center",
        backgroundColor:"orange"
    },
    btnGroup:{
    display: "flex !important",
    justifyContent: "center !important",
    paddingTop: "50px !important",
    },
    btnMinus:{
        backgroundColor:"red !important",
        color:"white !important",
    },
    btnPlus:{
        backgroundColor:"green !important",
        color:"white !important",
    },
    badge: {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px"
      },
      headBadge:{
        display: "flex !important",
        justifyContent: "center !important",
        margin: "auto !important"
      }
  }));

  export default useStyles;