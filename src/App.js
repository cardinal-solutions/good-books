import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';

import Header from './components/Header';
import './App.css';

import entryRoutes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
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
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <div className="App__body">
            <Switch>{renderRoutes()}</Switch>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
