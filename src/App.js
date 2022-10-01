import React from "react";
import "./styles.css";

class PollComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: parseInt(this.props.num1),
      n2: parseInt(this.props.num2),
      result: 0
    };
  }

  addNums = () => {
    this.setState({ result: this.state.n1 + this.state.n2 });
  };
  subNums = () => {
    this.setState({ result: this.state.n1 - this.state.n2 });
  };
  mulNums = () => {
    this.setState({ result: this.state.n1 * this.state.n2 });
  };
  divNums = () => {
    this.setState({ result: this.state.n1 / this.state.n2 });
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>{this.state.result}</h2>
        <button onClick={this.addNums}>Add </button>
        <button onClick={this.subNums}>Subtract </button>
        <button onClick={this.mulNums}>Multiply </button>
        <button onClick={this.divNums}>Divide </button>
        &nbsp;
      </div>
    );
  }
}
export default PollComp;
