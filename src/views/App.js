import React from 'react';
import Routes from 'router/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BottomNav from 'components/bottomNav/BottomNav';
import '../mock/index'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import Shopcar from 'reducers/index'
const store = createStore(Shopcar)
class AppComponent extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
            <Routes/>
            <BottomNav/>
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default AppComponent;
