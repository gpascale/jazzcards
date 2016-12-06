import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import QuizPage from '../components/quizpage/QuizPage';

require('../scss/bundle.scss');

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  appBar: {
    height: 40,
  }
});


ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path="/">
        <Route path="quiz" component={QuizPage} />
        <IndexRedirect to="quiz" query={{ }} />
      </Route>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('react-root')
);