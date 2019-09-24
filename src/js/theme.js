import { createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import grey from '@material-ui/core/colors/grey';

export default createMuiTheme({
  palette: {
    primary: lightBlue,
    secondary: grey,
  },
  status: {
    danger: 'orange',
  },
});