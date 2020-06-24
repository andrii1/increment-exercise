import React from "react";
import Counter from "./Counter";
import Buttons from "./Buttons";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.onCountIncrement = this.onCountIncrement.bind(this);
    this.onCountDecremenent = this.onCountDecremenent.bind(this);
    this.reset = this.reset.bind(this);
  }

  onCountIncrement() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  onCountDecremenent() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    return (
      <div>
        <Counter count={this.state.count} />
        <Buttons
          increment={this.onCountIncrement}
          decrement={this.onCountDecremenent}
          reset={this.reset}
        />
      </div>
    );
  }
}

export default App;
