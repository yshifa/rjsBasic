import React from 'react';

class Playground extends React.Component{
  state={
    count:0
  };
  componentDidMount() {
    console.log("Component did mount");
  }
  increment = () => {
    this.setState({count:this.state.count + 1 });
    return;
  }
  decrement = () => {
    this.setState({count:this.state.count - 1});
  };
  reset = () => {
    this.setState({count:0});
  }

    render() {
      console.log("Render method");

    return(
      <div>
        
        <h2>{this.state.count}</h2>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
        <button onClick={this.reset}>reset</button>


      </div>
    );
  }
  }

  export default Playground;



  