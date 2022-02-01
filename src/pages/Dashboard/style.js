import { makeStyles } from '@material-ui/styles';
import { alpha } from '@material-ui/core/styles';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import Button from '@material-ui/core/Button';

export default makeStyles((theme) => ({
       sidebarActive :{
          backgroundColor: theme.palette.primary.main,
          width: '250px',
          height: '100%',
          borderBottomRightRadius: '40px',
          borderTopRightRadius:'40px',
          boxShadow: "5px 3px 10px #9E9E9E",
          transition: 'width .2s ease-in', 
       },
       sidebarMenu : {
          marginLeft: '2rem',
          fontSize: '2rem',
          height: '80px',
          display: 'inline-block',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop:'30px',
          marginBottom:'-50px', 
          cursor: 'pointer',
          
       },
       sidebarCloseMenu : {
        marginLeft: '12rem',
        fontSize: '2rem',
        height: '80px',
        display: 'inline-block',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop:'30px',
        marginBottom:'-50px', 
        cursor: 'pointer',
      },
       sidebarContent : {
          display:"flex",
          lex: 1, 
          flexDirection: "column",
          position: "absolute",
          marginLeft: '2rem',
          position: 'relative',
          maxHeight: '250px',
          margin: '5px 0',

      },
       buttonStyle : {
         width: "60px",
         height: "60px",
         display: 'inline-block',
         borderRadius: "100%",
         color: '#FFF',
         marginLeft: '-55px',
         fontSize: '2rem',
         textAlign: 'center',
         justifyContent: 'flex-start',
         alignItems: 'center',
         cursor: 'pointer',
         backdroundColor:'#000',
      },
       buttonActive :{
          backgroundColor: 'none',
          width: "60px",
          height: "60px",
          display: 'inline-block',
          marginLeft: '-50px',
          color: '#FFF',
          marginBottom:'10px',
          padding: '5px',
          fontSize: '2rem',
          lineHeight: '40px',
          textAlign: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
      },
       buttonInactive:{
         width: "60px",
         height: "60px",
         display: 'inline-block',
         color: '#FFF',
         marginLeft: '-55px',
         fontSize: '2rem',
         textAlign: 'center',
         justifyContent: 'flex-start',
         alignItems: 'center',
         cursor: 'pointer',
         backdroundColor:'#000'
      },
       sidebarInactive : {
          width:'100px',
          height: '100%',
          backgroundColor: theme.palette.primary.main,
          borderBottomRightRadius: '40px',
          borderTopRightRadius:'40px',
          boxShadow: "5px 3px 10px #9E9E9E", 
          transition: 'width .2s ease-in',      
      },
       logoImg : {
          width:'130px', 
          height: '130px', 
          marginLeft:'-50px', 
          marginBottom:'10px',
          marginTop:'30px',
          paddingTop:'30px',
          background:'none',
          display: 'inline-block',
      },
       menuItem : {
         color: '#FFF',
         textDecoration: 'none',
         fontSize: '15px',
         display: 'block',
         fontWeight: '600',
         cursor:'pointer',
      },
       menuIcon : {
         display: 'inline-block',
         width: '60px',
         height: '60px',
         fontSize: '40px',
         lineHeight: '40px',
         textAlign: 'center',
      }, 

       li : {
         listStyle: 'none',
      },
       spanActive : {
         position: 'absolute',
         display: 'inline-block',
         lineHeight: '40px',
         opacity: '1',
         transition: 'opacity .2s ease-in',
      },
       spanInactive : {
         opacity: '0',
         width: '0',
         height: '0',
         overflow: 'hidden',
     },
       root: {                      
            width: '220px',
            height: '100vh', 
            position: 'absolute',
            backgroundColor: theme.palette.primary.main,
            borderBottomRightRadius: '40px',
            borderTopRightRadius:'40px',
            boxShadow: "5px 3px 10px #9E9E9E", 
            left: "0",
            zIndex: "99",
            transition: "0.4s ease-in",
            lineHeight: "20px",
            fontWeight: "bold",
            fontSize: "22px",
            cursor: "pointer",
     },
    
    app : {
        minHeight: "20px",
        color: "#f3f3f3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: "15px",
        position:"absolute",
        right:"200px",
        float:"right",
        top:"40px"

    },
      
    svg : {
        margin: "0 5px",
        fontSize: "20px",
        textTransform: "capitalize",
        fontWeight: "20px",
        width: "20px",
        height: "20px",
    },
      
    p : {
        paddingTop: "5px",
        margin: "0 5px",
        textTransform: "capitalize",
        fontWeight: "5px",
        color:"#000"
      },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    },
    searchIcon: {
        padding: '0px 150px',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
    },
   
    logotext : {
      fontSize: "20px",
      padding: "0 20px",
      color: "#000",
      fontWeight: "bold",
    },
    avatar: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      marginLeft:"10px"
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    firstdiv :{
      display:"flex",
      flex:1,
      flexDirection:"column",
      justifyContent:"center", 
      borderRadius:"20px",
      marginLeft:"20px"
   },
   seconddiv : {
      display:"flex",
      maxHeight:300,
      flex:1,
      padding:5,
      alignItems: 'center',
      flexDirection:"column" ,
      overflowY:"scroll" 
   },
   thirddiv : {
      width:"50px",
      height:"80px",
      display:"flex",
      flex:1,
      position:"absolute" 
   },
   fourdiv : {
      width:"80px",
      height:"80px",
      display:"flex",
      flexDirection:"column",
      marginLeft:"55px"  
    },
    h5div : {
        marginBottom:"-20px",
        marginTop:"20px"  
      },
    fivediv :{
        width:"80px",
        height:"80px",
        display:"flex",
        flexDirection:"column",
        marginLeft:"35px",
    },
    sevendiv :{
        width:"100px",
        height:"80px",
        display:"flex",
        flexDirection:"column",
        marginLeft:"25px"
    },
    eightdiv :{
        width:"100px",
        height:"80px", 
        display:"flex",
        flexDirection:"column",
        marginLeft:"25px"
    },
}))