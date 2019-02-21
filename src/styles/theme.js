import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

// This palette is similar to Material's "Light Blue", but darkened
// so that the main hue can have white contrast text.
const darkerLightBlue = {
  50: '#e1f1f9',
  100: '#b3dbf1',
  200: '#81c4e8',
  300: '#4eacdf',
  400: '#289ad8',
  500: '#0288d1',
  600: '#0280cc',
  700: '#0175c6',
  800: '#016bc0',
  900: '#0158b5',
  A100: '#deecff',
  A200: '#abceff',
  A400: '#78b1ff',
  A700: '#5ea2ff',
  contrastText: '#fff',
  dark: '#0175c6',
  light: '#289ad8',
  main: '#0288d1',
}

const theme = createMuiTheme({
  palette: {
    primary: darkerLightBlue,
    secondary: teal,
  },
  nexus: {
    appBar: {
      backgroundColor: '#22c9ec',
      backgroundColorDark: '#0b4963',
    },
    listColumn: {
      backgroundColor: '',
      width: 320,
    },
    nav: {
      backgroundColor: '#8f8f8f',
      width: 70,
    },
    search: {
      backgroundColor: '#f9f9fe',
    },
  },
})

export default theme
