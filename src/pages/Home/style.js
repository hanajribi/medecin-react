import { makeStyles } from '@material-ui/styles';



export default makeStyles((theme) => ({
    root: {                           // - The TextField-root
    // - For demonstration: set the TextField-root border
        padding: '3px', 
        width: '300px',
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
    button: {   
        float:"right",
        left:"800px",
        top:'50px',
        height:"60px",
        padding: "15px 32px",
        color: theme.palette.primary.main , 
        borderRadius: "30px",
        backgroundColor: theme.palette.background.default,
        marginRight:"20px",
        boxShadow: "5px 3px 10px #9E9E9E", 
        fontFamily:"Arial",
        fontWeight:"bold",
        fontStyle:"normal",
    },
    button1: {
        variant: "outlined",
        width:"250px",
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        padding: '15px 20px',
        borderRadius: '20px',
        textAlign: 'center',
        fontWeight:"bold",
        marginLeft:"27px",
    },
    
    divContainer: { 
        width:"100vw", 
        height: "100vh", 
        display:"flex"
    }, 
    div1:{
        width:"100%", 
        height: "100%", 
        display:"flex",
        backgroundImage: "url(/images/wave1.png)", 
        backgroundSize:"100% 100%", 
        flex: 1, 
        flexDirection: "row",
        position: "relative"
    },
    divImg:{
        width:"200px", 
        height: "200px",
        float:"left", 
        top:'-50px',
        paddingLeft:"20px"
    },
    divButton:{
        width:"100%",
        height:"600px", 
        flex:1, 
        display:"flex", 
        position:"absolute"
    },
    divImg1:{
        height:"400px",
        bottom:"100px", 
        right:"50px", 
        position:"absolute"
    },
    divText:{
        width:"800px",
        height:"600px", 
        flex:1, 
        display:"flex", 
        position:"absolute", 
        flexDirection: "column"
    },
    divH1:{
        paddingTop: "170px", 
        paddingLeft:"150px", 
        color:"#fff",
        marginBottom:"5px"
    },
    divP:{
        paddingLeft:"150px",  
        color:"#fff"
    },
    divText2:{
        width:"100%", 
        height: "100%", 
        display:"flex", 
        position:"relative"
    },
    div2:{
        display:"flex", 
        flex: 1, 
        flexDirection: "column"
    },
    divTypography:{
        fontWeight:"bold", 
        paddingTop:"120px",
        paddingLeft:"150px", 
        marginBottom:"20px"
    },
    divImg2:{
        height:"400px", 
        paddingTop:"240px",
        left:"110px", 
        position:"absolute"
    },
    div3:{
        display:"flex", 
        flex: 1, 
        flexDirection: "column"
    },
    divH12:{
        paddingLeft:"-10px",
        paddingTop:"270px",
        fontWeight:"bold"
    },
    div4:{
        width:"100%", 
        height: "100%", 
        display:"flex", 
        position:"relative"
    },
    divImg3:{
        justifyItems:"center", 
        alignItems: "center",
        height:"450px", 
        paddingTop:"130px", 
        marginLeft:"460px"
    },
    divTp:{
        fontWeight:"bold", 
        paddingTop:"120px",
        paddingLeft:"150px", 
        marginBottom:"20px"
    },
    div5:{
        width:"100%", 
        height: "100%", 
        display:"flex", 
        position:"relative", 
        marginBottom:"350px"
    },
    divTyp:{
        fontWeight:"bold", 
        paddingTop:"180px",
        paddingLeft:"150px", 
        marginTop:"100px", 
        marginBottom:"70px"
    },
    div6:{
        height:"500px", 
        width:"800px", 
        alignItems: "center",  
        display:"flex", 
        justifyContent:"center" , 
        flex: 1, 
        flexDirection: "row",  
        marginLeft:"300px", 
        borderRadius:"30px",
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 20px"
    },
    div7:{
        height:"100%", 
        width:"50%", 
        display:"flex", 
        position:"relative", 
        flex: 1, 
        flexDirection: "column", 
        marginTop:"120px", 
        marginLeft:"30px"
    },
    div8:{
        height:"100%", 
        width:"50%",
        display:"flex", 
        position:"relative", 
        flex: 1, 
        flexDirection: "column", 
        marginTop:"70px", 
        marginRight:"30px"
    },
    div9:{
        width:"100%", 
        height: "100%",
        backgroundImage: "url(/images/wave2.png)",  
        backgroundSize:"100% 100%",
        position: "relative",
        marginTop:"50px"
    },
    div10:{
        width:"100%", 
        height: "100%", 
        display:"flex",
        flex: 1, 
        flexDirection: "row",
        position: "absolute"
    },
    div11:{
        width:"300px", 
        height: "400px", 
        display:"flex",
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        marginTop:"200px",
        marginLeft:"100px"
    },
    div12:{
        width:"300px", 
        height: "400px", 
        display:"flex",
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        marginTop:"200px",
        marginLeft:"465px"
    },
    div13:{
        width:"300px", 
        height: "400px", 
        display:"flex",
        flex: 1, 
        flexDirection: "column",
        alignItems: "center",
        position: "absolute",
        marginTop:"200px",
        marginLeft:"900px"
    },
}))
