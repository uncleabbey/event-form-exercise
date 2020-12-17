import React, { Component } from "react";

const Input = ({ handleChange, value, label, name, type }) => (
  <div className="form-group">
    <label htmlFor={label}>{label}</label> <br />
    <input type={type} name={name} value={value} onChange={handleChange} />
  </div>
);
const DivForm = ({
  height,
  width,
  handleSubmit,
  handleChange,
  backgroundColor,
}) => {
  return (
    <form className="div-form" onSubmit={handleSubmit}>
      <Input
        type={"number"}
        label="Width (px)"
        value={width}
        name={"width"}
        handleChange={handleChange}
      />
      <Input
        type={"number"}
        label="Height (px)"
        value={height}
        name={"height"}
        handleChange={handleChange}
      />
      <Input
        type={"text"}
        label="Background Color"
        name={"backgroundColor"}
        value={backgroundColor}
        handleChange={handleChange}
      />
      <div className="form-group">
        <button type="submit" className="submit">
          Add
        </button>
      </div>
    </form>
  );
};

const Div = ({ width, height, backgroundColor }) => (
  <div className="div" style={{ width, height, backgroundColor }}></div>
);
export class DivAdder extends Component {
  state = {
    width: "",
    height: "",
    backgroundColor: "",
    divs: [],
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`,
      backgroundColor: this.state.backgroundColor,
    };
    console.log(data);
    this.setState({
      divs: [...this.state.divs, data],
    });
  };
  render() {
    return (
      <div>
        <h1 className="header">Divs Adding</h1>
        <DivForm
          backgroundColor={this.state.backgroundColor}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          height={this.state.height}
          width={this.state.width}
        />

        <div className="divs-container">
          {this.state.divs.map(({ width, height, backgroundColor }, index) => (
            <Div
              key={index}
              width={width}
              height={height}
              backgroundColor={backgroundColor}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DivAdder;
