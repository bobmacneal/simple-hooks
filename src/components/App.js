import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core'
import {MuiThemeProvider} from '@material-ui/core/styles'
import React from 'react'
import Resource from './Resource'
import simpleTheme from '../styles/simpleTheme'
import 'typeface-roboto'

const App = () => (
  <MuiThemeProvider theme={simpleTheme}>
    <AppBar color="primary" elevation={1} position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          color="inherit"
          children="simple-hooks"
        />
      </Toolbar>
    </AppBar>
    <div style={{margin: '80px 15px 15px 15px'}}>
      <Resource />
    </div>

  </MuiThemeProvider>
)

const globalStyles = {
  '@global': {
    'html': {
      backgroundColor: '#fff',
      fontFamily: '"Roboto", sans-serif',
    },
    'body': {
      backgroundColor: '#fff',
    },
  },
}

export default withStyles(globalStyles)(App)

