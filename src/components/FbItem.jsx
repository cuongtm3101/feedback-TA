import React, { Component } from "react";

class FbItem extends Component {
  render() {
    let { id, content, point, handleEdit } = this.props;
    return (
      <div className="feedback-item-container">
        <p className="feedback-content">{content}</p>
        <span className="point">{point}</span>
        <div className="action-container">
          <button onClick={() => handleEdit(id)}>Edit</button>
        </div>
      </div>
    );
  }
}

export default FbItem;
