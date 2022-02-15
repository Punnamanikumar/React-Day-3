import React from "react";
import "./App.css";
import ClassComp from './day3/ClassComp'
import FunctionalComp from './day3/FunctionalComp'
class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <ClassComp/>
        <FunctionalComp/>
      </div>
    );
  }
}
export default App;
