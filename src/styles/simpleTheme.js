import {createMuiTheme} from '@material-ui/core/styles'

export const simple = {
  light: '#D9B310', // Gold Leaf
  main: '#91BFFF', // Summer Sky,
  dark: '#0B3C5D', // Prussian Blue
  contrastText: '#fff',
}

const simpleTheme = createMuiTheme({
  palette: {
    primary: simple,
    secondary: simple,
  },
  typography: {
    useNextVariants: true,
  },
})

export default simpleTheme
