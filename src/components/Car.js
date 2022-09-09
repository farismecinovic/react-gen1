import React from "react";

export default class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      make: this.props.make,
      color: "red",
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    this.setState((prev) => ({ ...prev, color: "blue" }));
  }

  componentWillMount() {
    console.log("KOMPONENTA CE BITI MOUNTOVANA");
  }

  componentDidMount() {
    console.log("Komponenta je mountovana");
    this.changeColor();
  }

  render() {
    console.log("RENDER");
    return (
      <div>
        <h2>
          Hi, I am a {this.props.make}, color is {this.state.color}!
        </h2>
        <button>Change color</button>
      </div>
    );
  }
}
