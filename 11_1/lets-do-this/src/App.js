import React, { Component } from 'react';
import './App.css';

const tasksArray = [
  'Botar roupas para lavar',
  'Estender roupas',
  'Varrer o quarto',
  'Estudar',
]

const task = (value) => {
  return (
    value.map(task => {
    return <li>{task}</li>;
    })

    // <li>{value}</li>
  );
}

class TaskList extends Component {
  render() {
    return (
      <ul>{task(tasksArray)}</ul>
    )
  }
}

function App() {
  return (
    <TaskList />
  );
}

export default App;
