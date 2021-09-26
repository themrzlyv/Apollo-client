import { createTheme, ThemeOptions } from "@material-ui/core";


const Theme: ThemeOptions = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00ADB5'
    },
    secondary: {
      main: '#EEEEEE'
    },
    text: {
      primary: '#222831'
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0
        }
      }
    },
    MuiGrid: {
      item: {
        overflow: "hidden",
        borderRadius: 4,
      }
    }
  }
});

export default Theme;