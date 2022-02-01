import { makeStyles } from '@material-ui/styles';



export default makeStyles((theme) => ({
    root: {                           // - The TextField-root
        // - For demonstration: set the TextField-root border
           padding: '3px', 
           width: '60%',
           marginBottom: '20px', 
           borderRadius: "30px",
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
       button: {
           variant: "outlined",
           backgroundColor: theme.palette.primary.main,
           color: "#fff",
           borderRadius: "30px",
           textAlign: 'center',
           margin: '4px 2px',
           padding: "10px 60px",
           fontWeight:"bold",
           marginBottom: "40px",
           color: "#fff",
           textAlign: "center",    
           fontWeight: "bold",
           marginBottom:"50px",
       },
        button1: {
           borderColor: theme.palette.primary.main,
           color: "#000000",
           borderRadius: '30px',
           textAlign: 'center',
           margin: '1px 1px',
           padding: '15px 35px',
           fontWeight:"bold",
           width:"130px",
           marginBottom:"50px",
     
       },
       buttonSelected :{
         
         backgroundColor: theme.palette.primary.main,
         color: "#ffffff",
         borderRadius: '30px',
         textAlign: 'center',
         margin: '1px 1px',
         padding: '15px 35px',
         fontWeight:"bold",
         width:"130px", 
       },
}))