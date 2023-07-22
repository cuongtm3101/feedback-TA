import React, { Component } from "react";
import Navbar from "./components/Navbar";
import MainForm from "./components/MainForm";
import FbItem from "./components/FbItem";

class App extends Component {
  state = {
    feedbacks: [],
    points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    active: 10,
    inputValue: "",
    isEdit: -1,
  };

  handleClick = (element) => {
    // Lấy được giá trị e đang click vào
    // và set ngược trở lại vào trong state active
    this.setState({
      active: element,
    });
  };

  handleSubmit = () => {
    if (this.state.isEdit >= 0) {
      let edit = {
        ...this.state.feedbacks[this.state.isEdit],
        content: this.state.inputValue,
        point: this.state.active,
      };
      let feedbacks = [...this.state.feedbacks];
      feedbacks[this.state.isEdit] = edit;
      this.setState({
        feedbacks: [...feedbacks],
        inputValue: "",
        active: 10,
        isEdit: -1,
      });
    } else {
      let newFeedback = {
        id: Math.floor(Math.random() * 100000000),
        content: this.state.inputValue,
        point: this.state.active,
      };
      this.setState({
        feedbacks: [...this.state.feedbacks, newFeedback],
        inputValue: "",
        active: 10,
        isEdit: -1,
      });
    }
  };

  handleChange = (e) => {
    this.setState({ inputValue: e });
  };
  // handleAddFeedback = (newFb) => {
  //   this.setState({ feedbacks: [...this.state.feedbacks, newFb] });
  // };

  handleEdit = (id) => {
    console.log(id);
    let index = this.state.feedbacks.findIndex((e, i) => e.id === id);
    let editElement = this.state.feedbacks[index];
    this.setState({
      inputValue: editElement.content,
      active: editElement.point,
      isEdit: index,
    });
  };

  render() {
    let { feedbacks } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="section-feedback-form container">
          <MainForm
            // handleAddFeedback={this.handleAddFeedback}
            points={this.state.points}
            active={this.state.active}
            inputValue={this.state.inputValue}
            handleClick={this.handleClick}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
        <div className="section-total-review">
          <div className="total-review-container">
            <span>4 Reviews</span>
            <span>Average Rating: 9.3</span>
          </div>
        </div>
        <div className="section-feedback-item container">
          <div className="feedback-container">
            {feedbacks.map((e, i) => (
              <FbItem
                key={i}
                id={e.id}
                content={e.content}
                point={e.point}
                handleEdit={this.handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
