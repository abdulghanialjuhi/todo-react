import React, { Component } from 'react';
import TodoItem from './Todoitem'


class Todo extends Component {
    render() { 
        return this.props.todo.map((todo) => (
        <TodoItem 
        key={todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete} 
        removeTodo={this.props.removeTodo}
        
        />
        ));     
    }
}
 
export default Todo;