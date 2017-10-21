/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { Switch , Route } from 'react-router-dom';
import HomePage from '../containers/Home';
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    // run homepage at any route
    return (
      <div>
        <Switch>
          <Route component={HomePage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
