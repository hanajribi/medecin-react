import { createTheme } from '@material-ui/core/styles';
//import { red } from "@material-ui/core/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1F95EE"
    },
    secondary: {
      main: "#6D76C6"
    },
    inherit:{
      main: "#6D76C6"
    },
    error: {
      main: "#F44336",
    },
    background: {
      default: "#fff"
    },
    backgroundC: {
      default: "#F5F9FFff"
    },
    backgroundNavbar: {
      default: "#1F95EEff"
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif'
  }
});
export default theme;