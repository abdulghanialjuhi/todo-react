import React, { Component } from "react";

class ShowCat extends Component {
  render() {
    return (
      <div className="buttons">
        <button
          className={this.props.Active.cat.showAll ? "active1" : ""}
          onClick={this.props.showAll}
        >
          All
        </button>
        <button
          className={this.props.Active.cat.showActive ? "active1" : ""}
          onClick={this.props.showActive}
        >
          Active
        </button>
        <button
          className={this.props.Active.cat.showCompleted ? "active1" : ""}
          onClick={this.props.showCompleted}
        >
          Completed
        </button>
      </div>
    );
  }
}

export default ShowCat;
