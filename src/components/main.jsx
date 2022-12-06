import React, { Component } from "react";

class Main extends Component {
  state = {
    people: [
      "Shashi Koshy",
      "Dhriti Taneja",
      "Dipa Mishra",
      "Ansh Thakkar",
      "Lakshmi Thaker",
      "Sushila Matthai",
      "Shresth Nigam",
      "Bhavana Biswas",
      "Vasudha Mangat",
      "Priya Saran",
      "Bhrrrrrr by",
    ],
    i1: false,
    i2: false,
    i3: false,
  };
  render() {
    let newPeople = this.state.people;
    if (this.state.i1) newPeople = newPeople.filter((pr) => pr.length > 14);
    if (this.state.i2)
      newPeople = newPeople.filter(
        (pr) => pr.includes("R") || pr.includes("r")
      );
    if (this.state.i3)
      newPeople = newPeople.filter((pr) => pr.startsWith("Bh"));

    return (
      <React.Fragment>
        <input
          onChange={() => this.handleLength()}
          type="checkbox"
          name="length"
          id="length"
        />
        <label htmlFor="length">Length more than 14</label>
        <input
          onChange={() => this.handleR()}
          type="checkbox"
          name=""
          id="withR"
        />
        <label htmlFor="withR">Includes R or r</label>
        <input
          onChange={() => this.handleStart()}
          type="checkbox"
          name=""
          id="startsWith"
        />
        <label htmlFor="startsWith">Starts with Bh</label>
        <div>
          {newPeople.map((pr, index) => (
            <p key={index}>{pr}</p>
          ))}
        </div>
      </React.Fragment>
    );
  }
  handleLength = () => {
    this.setState({ i1: !this.state.i1 });
  };
  handleR = () => {
    this.setState({ i2: !this.state.i2 });
  };

  handleStart = () => {
    this.setState({ i3: !this.state.i3 });
  };
}

export default Main;
