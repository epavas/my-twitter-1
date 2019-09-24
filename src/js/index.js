import React from 'react';
import Public from './Public';
import Private from './Private';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

function Main() {
  return (
    <main>
        <MuiThemeProvider theme={theme}>
          <Public />
          <Private />
        </MuiThemeProvider>
    </main>
  );
}

export default Main;
