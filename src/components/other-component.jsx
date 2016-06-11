import React from 'React';

export default class OtherComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <label>Count: {this.state.count}</label>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}