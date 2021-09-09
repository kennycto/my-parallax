import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';
import { HomePage } from '../pages';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const history = createHistory();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">My Parallax</Typography>
          </Toolbar>
        </AppBar>
        <Route path="/" exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
