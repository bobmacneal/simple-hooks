import { AppBar, Typography, withStyles,} from '@material-ui/core'
import Logo from '../images/logo-32x32.png'
import { MuiThemeProvider } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import Resource from './Resource'
import simpleTheme from '../styles/simpleTheme'
import 'typeface-roboto'

const App = ({classes}) => (
  <MuiThemeProvider theme={simpleTheme}>
    <AppBar color="primary" elevation={1} position="fixed" className={classes.appBar}>
      <React.Fragment>
        <div className={classes.logo}>
          <img src={Logo} alt="simple-hooks" />
        </div>
        <div className={classes.title}>
          <Typography
            align="right"
            variant="subtitle2"
            color="inherit"
          >
            {`simple-hooks v-${process.env.REACT_APP_VERSION}`}
          </Typography>
        </div>
      </React.Fragment>
    </AppBar>
    <div style={{margin: '80px 15px 15px 15px'}}>
      <Resource />
    </div>
  </MuiThemeProvider>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

const globalStyles = {
  appBar: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: '15px',
    paddingRight: '20px',
    height: '60px',
    flexDirection: 'row',
  },
  logo: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
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
