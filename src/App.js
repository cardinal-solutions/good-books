import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  MuiThemeProvider,
  createMuiTheme,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/header';
import './App.css';

import entryRoutes from './routes';

const theme = createMuiTheme({
  palette: {
    divider: '#FFEB3B',
    primary: {
      main: '#9E9E9E',
      dark: '#616161',
      light: '#F5F5F5',
    },
    // secondary: {},
    // error: will use the default color
  },
});

class App extends Component {
  handleError = () => {
    console.log('there was an error');
  };
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <div className="app">
            <Header />
            <div className="app__body">
              <Switch>
                {entryRoutes.map((data, key) => {
                  return <Route key={key} {...data} />;
                })}
              </Switch>
            </div>
          </div>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
