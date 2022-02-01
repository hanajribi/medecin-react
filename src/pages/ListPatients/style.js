
import { makeStyles } from '@material-ui/styles';
import { alpha } from '@material-ui/core/styles';
import { borderColor } from '@material-ui/system';



export default makeStyles((theme) => ({
    root: {                           // - The TextField-root
        // - For demonstration: set the TextField-root border
           padding: '30px', 
           width: '60%',
           marginBottom: '20px', 
                    // - Make the border more distinguishable
           // (Note: space or no space after & matters. See SASS "parent selector".)
           '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
               '& fieldset': {            // - The <fieldset> inside the Input-root
                   borderColor: theme.palette.primary.main ,   // - Set the Input border
               },
               '&:hover fieldset': {
                   borderColor: theme.palette.primary.main , // - Set the Input border when parent has :hover
               },
               '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                   borderColor: theme.palette.primary.main,
               },
           },
    },
      divContainer:{
         width:"100vw", 
         height: "100vh", 
         display:"flex", 
         backgroundColor:"#f5f9ff", 
         position:"fixed"
      },
      sidebarActive :{
          position:"fixed",
          backgroundColor: theme.palette.primary.main,
          width: '180px',
          height: '100%',
          borderBottomRightRadius: '40px',
          borderTopRightRadius:'40px',
          boxShadow: "5px 3px 10px #9E9E9E",
          transition: 'width .2s ease-in', 
      },
      sidebarInactive : {
          width:'80px',
          height: '100%',
          backgroundColor: theme.palette.primary.main,
          borderBottomRightRadius: '40px',
          borderTopRightRadius:'40px',
          boxShadow: "5px 3px 10px #9E9E9E", 
          transition: 'width .2s ease-in',
        
      },
      sidebarMenu : {
          position: "relative",
          marginLeft: '20px',
          fontSize: '1rem',
          height: '80px',
          width:'30px',
          display: 'inline-block',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop:'30px',
          cursor: 'pointer',    
      },
      sidebarCloseMenu : {
          position: "relative",
          marginLeft: '8rem',
          fontSize: '2rem',
          height: '80px',
          display: 'inline-block',
          justifyContent: 'flex-start',
          marginTop:'30px', 
          cursor: 'pointer',
      },
    
      buttonActive :{
          backgroundColor: 'none',
          width: "60px",
          height: "60px",
          display: 'inline-block',
          color: '#FFF',
          fontSize: '2rem',
          textAlign: 'center',
          justifyContent: 'flex-start',
          cursor: 'pointer',
          marginBottom:"-10px",
          marginLeft:"-30px"

      },
      buttonInactive:{
          width: "60px",
          height: "60px",
          display: 'inline-block',
          color: '#FFF',
          fontSize: '2rem',
          textAlign: 'center',
          justifyContent: 'flex-start',
          alignItems: 'center',
          cursor: 'pointer',
          backdroundColor:'#000',
          marginBottom:"15px",
          marginLeft:"-33px"
      },
      logoImgActive: {
          position: "relative",
          width:'110px', 
          height: '110px', 
          marginBottom:'30px',
          marginTop:'30px',
          background:'none',
          display:"flex",
          flex: 1,
          display: 'inline-block',
          justifyContent: 'flex-start', 
          cursor: 'pointer',
          marginLeft:"-20px"
      },
      logoImgInactive: {
          position: "relative",
          width:'130px', 
          height: '130px',  
          marginBottom:'10px',
          marginTop:'30px',
          background:'none',
          display: 'inline-block',
          justifyContent: 'flex-start', 
          cursor: 'pointer',
          marginLeft:"1.5rem"
      },
      menuItem : {
         color: '#FFF',
         textDecoration: 'none',
         fontSize: '15px',
         display: 'block',
         fontWeight: '600',
         cursor:'pointer',
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
      patientdiv :{
            width:"1100px",
            height:"510px",
            display:"flex",
            flex:1,
            position: "fixed",
            flexDirection:"column",
            display: 'inline-block',
            boxShadow: "0px 5px 15px #9E9E9E",
            borderRadius:"100px 0px",
            justifyContent:"center",
            marginLeft:"200px",
            marginTop:"120px",
            backgroundColor: 'white',
           
      },
      listdiv : {
            position: "absolute",
            width:"1000px",
            height:"350px",
            display:"flex",
            flex:1,
            position: "fixed",
            flexDirection:"column",
            display: 'inline-block',
            top:'280px',
            right:'110px',
            overflowY:"scroll"
      },
    
      typographydiv : {
            width:"230px",
            height:"200px",
            display:"flex",
            flex:1,
            position: "absolute",
            flexDirection:"column",
            margin:"45px 230px",
            paddingBottom:"30px",
      },
      button1: {
        borderColor: theme.palette.primary.main,
        color: "#000000",
        borderRadius: '20px',
        textAlign: 'center',
        margin: '1px 1px',
        padding: '15px 35px',
        fontWeight:"bold",
        width:"130px"
  
    },
     buttonSelected :{
      
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        borderRadius: '20px',
        textAlign: 'center',
        margin: '1px 1px',
        padding: '15px 35px',
        fontWeight:"bold",
        width:"130px"
    },
    field: {
       margin: '10px 0',
    },
    countryList: {
        ...theme.typography.body1,
    },
}))