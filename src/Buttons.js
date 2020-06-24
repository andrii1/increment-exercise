import React from "react";

class Buttons extends React.Component {
  render() {
    const { increment, decrement, reset } = this.props;
    return (
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
  }
}

export default Buttons;
