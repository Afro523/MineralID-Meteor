import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MineralCard from './MineralCard';

injectTapEventPlugin();
// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
          <MineralCard/>
      </MuiThemeProvider>
    );
  }
}
