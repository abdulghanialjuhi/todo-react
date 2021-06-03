import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, id, completed } = this.props.todo;
    return (
      <li
        className={
          (this.props.todo.completed
            ? "allClasses completed "
            : "allClasses active ") + (this.props.todo.isActive ? "" : "show")
        }
        id={this.props.todo.isCompleted ? "hide" : ""}
        onClick={this.props.markComplete.bind(this, id)}
        onDoubleClick={this.props.removeTodo.bind(this, id, completed)}
      >
        {title}
      </li>
    );
  }
}

export default TodoItem;
