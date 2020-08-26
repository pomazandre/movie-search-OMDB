import React, { Component } from "react";
import Header from './components/Header';
import Content from './components/Content';

export class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('>> рендер app...');
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;

