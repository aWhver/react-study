import React from 'react';
import Routes from 'router/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNav from 'components/bottomNav/BottomNav';
import '../mock/index'
class AppComponent extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Routes/>
          <BottomNav/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppComponent;
