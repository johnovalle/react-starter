import React from 'react';

const Todo = ({todo, remove}) => {
  // Each Todo
  //<li onClick(remove(todo.id))>{todo.text}</li>
  return (<li onClick={()=> remove(todo.id)}>{todo.text}</li>);
}

export default Todo;
