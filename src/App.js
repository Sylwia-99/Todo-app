import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Media from 'react-media';

function App() {
  return (
    <Media query="(min-width: 450px)">
      {matches => {
        return matches ? 
        <div className='todo-app'>
        <TodoList />
        </div> 
        :
        <div className='todo-app1'>
        <TodoList />
        </div>
      }}
    </Media>
  );
}

export default App;