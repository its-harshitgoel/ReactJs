import React from "react";
import { useState } from "react";

export default class Counter extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("mounting....");
  }

  componentWillUnmount() {
    console.log("unmounting");
  }

  Increament = () => {
    this.setState({ count: this.state.count + 1 });
  };

  Decreament = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increament}>Increase</button>
        <button onClick={this.Decreament}>Decrease</button>
      </div>
    );
  }
}

// function Counter({initialCount}) {
//   const [count, setCount] = useState(initialCount);

//   const Increament = () => {
//     setCount(count + 1);
//   };

//   const Decreament = () => {
//     setCount(count - 1);
//   };

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={Increament}>Increase</button>
//       <button onClick={Decreament}>Decrease</button>
//     </div>
//   );
// }

// export default Counter;
