import { makeStyles } from '@material-ui/styles';



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
        display:"flex"
    },
    div1:{
        width:"50%", 
        height: "100%",
        alignItems:"center", 
        display:"flex",
        justifyContent:"center"
    },
    divTypography:{
        alignItems: "center" , 
        position:"absolute",  
        paddingBottom: 450, 
        fontWeight:"bold"
    },
    divForm:{
        alignItems: "center",  
        display:"flex", 
        justifyContent:"center" , 
        flex: 1, 
        flexDirection: "column",
        marginBottom:"30px"
    },
    div2:{
        width:"50%", 
        height: "100%", 
        alignItems:"center", 
        display:"flex", 
        justifyContent:"center",
        backgroundImage: "url(/images/Pic.png)", 
        borderTopLeftRadius: 75, 
        borderBottomLeftRadius: 75 
    },
    divLink:{
        position: 'absolute', 
        height: '10px', 
        bottom:110, 
        fontWeight:"bold"
    },
    divImg:{
        width:"50%", 
        height: "50%", 
        alignItems:"center", 
        display:"flex", 
        justifyContent:"center"
    },
}))