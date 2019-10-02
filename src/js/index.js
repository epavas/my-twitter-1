import React, {useState, useEffect} from 'react';
import Public from './Public';
import Private from './Private';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme';

function Main() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    const uid = sessionStorage.getItem("user");
    uid !== null && setIsAuth(true);
  },[isAuth]);
  const setAuthentication = val => { 
    sessionStorage.clear();
    setIsAuth(val);
  }


  return (
    <main>
        <MuiThemeProvider theme={theme}>
          {
            isAuth ?  
              <Private setAuthentication={setAuthentication} />
            :  
              <Public />
          }    
          
        </MuiThemeProvider>
    </main>
  );
}

export default Main;
