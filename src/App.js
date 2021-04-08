import React from 'react';
import store from './store/store';
import homeLayout from './containers/homeLayout/homeLayout';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={homeLayout} />
          </Switch>
        </Router>
    </Provider>
  );
}

export default App;
