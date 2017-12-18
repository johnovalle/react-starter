import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Title from './Title';
import axios from 'axios';

export default class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.apiUrl = 'http://5a373fbfbe179d00129701b5.mockapi.io/todos';
  }
  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }
  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val}
    // Update data
    axios.post(this.apiUrl, todo)
    .then((res) => {
      // Update state
      let todos = this.state.data.concat([res.data]);
      this.setState({data: todos});
    });
  }
  // Handle remove
  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
    .then((res) => {
      this.setState({data: remainder});
    })
  }

  render(){
    // Render JSX
    return (
      <div>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}
