import React, { Component } from "react";

class MainForm extends Component {
  // state = {
  //   points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //   active: 10,
  //   inputValue: "",
  // };

  // handleClick = (element) => {
  //   // Lấy được giá trị e đang click vào
  //   // và set ngược trở lại vào trong state active
  //   this.setState({
  //     active: element,
  //   });
  // };

  // handleSubmit = () => {
  //   let newFeedback = {
  //     id: Math.floor(Math.random() * 100000000),
  //     content: this.state.inputValue,
  //     point: this.state.active,
  //   };

  //   return newFeedback;
  // };

  render() {
    // let { points, active, inputValue } = this.state;
    let {
      points,
      active,
      inputValue,
      handleClick,
      handleSubmit,
      handleChange,
    } = this.props;
    return (
      <div className="form-container">
        <h1 className="title">Thầy Phú dạy có hay không????</h1>
        <div className="point-container">
          {points.map((e, i) => (
            <div
              onClick={() => handleClick(e)}
              key={i}
              className={`point ${e === active ? "active" : ""}`}
            >
              {e}
            </div>
          ))}
        </div>
        <form
          className="main-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            // logic tạo ra 1 fb mới và add vào state fb ở trên App
          }}
        >
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleChange(e.target.value)}
            />
            <button>Send</button>
          </div>
        </form>
      </div>
    );
  }
}

export default MainForm;
