import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/header";
import Todo from "./component/Todo";
import AddForm from "./component/addForm";
import { v4 as uuidv4 } from "uuid";
import ShowCat from "./component/Catagore";
import Footer from "./component/Footer";

class App extends Component {
  state = {
    Todo: [],

    cat: {
      showAll: true,
      showActive: false,
      showCompleted: false,
    },
  };

  Random = () => {
    const math = Math.random() * 10;

    console.log(math);
  };

  markComplete = (id) => {
    this.setState({
      Todo: this.state.Todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  removeTodo = (id) => {
    this.setState({
      Todo: [...this.state.Todo.filter((todo) => todo.id !== id)],
    });
  };

  addTodo = (title) => {
    if (title) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
        isActive: false,
        isCompleted: false,
      };
      this.setState({ Todo: [...this.state.Todo, newTodo] });
      //   const json = JSON.stringify(newTodo);
      // const xml = new XMLHttpRequest();
      // xml.open("POST", "json.json", true);
      // xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      // const params = "name:" + newTodo;
      // console.log(params);
      // xml.send(params);
    }
  };

  componentDidUpdate = () => {
    const { cat } = this.state;
    localStorage.setItem("cat1", JSON.stringify(cat));

    const { Todo } = this.state;

    localStorage.setItem("todos", JSON.stringify(Todo));
  };

  componentDidMount() {
    const cat1 = JSON.parse(localStorage.getItem("cat1"));
    this.setState({ cat: { ...cat1 } });

    const local = JSON.parse(localStorage.getItem("todos"));

    if (local) {
      return this.setState({ Todo: [...local] });
    }
  }

  showAll = () => {
    this.setState({
      cat: {
        showAll: true,
        showActive: false,
        showCompleted: false,
      },
    });
    this.setState({
      Todo: this.state.Todo.map((todo) => {
        if (todo) {
          todo.isActive = false;
          todo.isCompleted = false;
        }
        return todo;
      }),
    });
  };
  showActive = () => {
    this.setState({
      cat: {
        showAll: false,
        showActive: true,
        showCompleted: false,
      },
    });
    this.setState({
      Todo: this.state.Todo.map((todo) => {
        todo.isActive = false;
        todo.isCompleted = false;

        if (todo.completed) {
          todo.isCompleted = false;
          todo.isActive = true;
        }
        return todo;
      }),
    });
  };
  showCompleted = () => {
    this.setState({
      cat: {
        showAll: false,
        showActive: false,
        showCompleted: true,
      },
    });
    this.setState({
      Todo: this.state.Todo.map((todo) => {
        todo.isActive = false;
        todo.isCompleted = false;

        if (!todo.completed) {
          todo.isCompleted = true;
          todo.isActive = false;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="container">
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddForm addTodo={this.addTodo} />
                  <ShowCat
                    todo={this.state.Todo}
                    Active={this.state}
                    showAll={this.showAll}
                    showActive={this.showActive}
                    showCompleted={this.showCompleted}
                  />
                  <ul className="todos">
                    <Todo
                      todo={this.state.Todo}
                      markComplete={this.markComplete}
                      removeTodo={this.removeTodo}
                    />
                  </ul>
                </React.Fragment>
              )}
            />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
