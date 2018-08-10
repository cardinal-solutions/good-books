import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/Header';
import './App.css';

import entryRoutes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: teal[500],
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#f73378',
      main: pink['A400'],
      dark: pink[900],
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});

const renderRoutes = () =>
  entryRoutes.map((data, key) => {
    return <Route key={key} {...data} />;
  });

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <div className="App__body">
              <Switch>{renderRoutes()}</Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
