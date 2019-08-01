import React, {Component, Fragment} from 'react';

import Header from "./components/header/Header";
import RouterComponent from "./components/router/router-component";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      courses: []
     }
  }
  render() { 
    return (
      <Fragment>
        <Header />
        <RouterComponent courses={this.props.courses} />
      </Fragment>
    )
  }
}
 
export default App;


