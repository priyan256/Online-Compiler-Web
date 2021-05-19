import React, { Component } from "react";
import Compiler from "./Components/Compiler/Compiler";
export default class App extends Component {
  render() {
    var i=5;
    return (
      <div>
        <h1>{i==1?'true':'false!'}</h1>
      </div>
    );
  }
}
