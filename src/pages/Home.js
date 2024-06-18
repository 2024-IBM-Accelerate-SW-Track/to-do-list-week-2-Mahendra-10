import React, { Component } from "react";
import Todos from "../component/todos";
import AddTodo from "../component/AddTodo";
import "../pages/Home.css";

class Home extends Component {
  // Create a default state of this component with an empty list of todos.
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  // the addTodo function checks if the task already exists before adding it to the list
  addTodo = (todo) => {
    // Check if the todo with the same content already exists
    const exists = this.state.todos.find((t) => t.content === todo.content);

    if (exists) {
      alert("Task already exists!");
      return; // Exit function if the task already exists
    }

    // Generate a unique id for the new todo
    todo.id = Math.random();

    // Create a new array that contains the current array and the new todo item
    let new_list = [...this.state.todos, todo];

    // Update the local state with the new array
    this.setState({
      todos: new_list,
    });
  };

  // Function to delete a todo item based on its id
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="Home">
        <h1>Todo's </h1>
        {/* When passing the AddTodo component, addTodo is a prop that is used in the 
        AddTodo.js file when handling the submit */}
        <AddTodo addTodo={this.addTodo} />
        {/* When returning the Todos component, todos is a prop passed to the Todos.js file
         to format and render the current todo list state */}
        {/* Pass deleteTodo as a prop to Todos */}
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default Home;
