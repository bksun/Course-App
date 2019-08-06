import React, {Component, Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import Header from "./components/header/Header";
import RouterComponent from "./components/router/router-component";
import './App.css';

import configureStore from "./store/store";

export const store = configureStore()


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      courses: []
     }
  }
  render() { 
    return (
      <BrowserRouter>
        <Provider store={store} >
          <Fragment>
            <Header />
            <RouterComponent store={store} courses={this.props.courses} />
          </Fragment>
        </Provider>
    </BrowserRouter>

    )
  }
}
 
export default App;


