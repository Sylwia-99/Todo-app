import React, { useState, useEffect, useRef } from 'react';
import Media from 'react-media';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <Media query="(min-width: 450px)">
     {matches => {
        return matches ? 
        <form onSubmit={handleSubmit} className='todo-form'>
        {props.edit ? (
          <>
            <input
              placeholder='Zaktualizuj zadanie'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit'
            />
            <button onClick={handleSubmit} className='todo-button edit'>
              Aktualizuj
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Dodaj zadanie'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button'>
              Dodaj Zadanie
            </button>
          </>
        )}
      </form>
      :
      <form onSubmit={handleSubmit} className='todo-form1'>
        {props.edit ? (
          <>
            <input
              placeholder='Zaktualizuj zadanie'
              value={input}
              onChange={handleChange}
              name='text'
              ref={inputRef}
              className='todo-input edit1'
            />
            <button onClick={handleSubmit} className='todo-button edit1'>
              Aktualizuj
            </button>
          </>
        ) : (
          <>
            <input
              placeholder='Dodaj zadanie'
              value={input}
              onChange={handleChange}
              name='text'
              className='todo-input1'
              ref={inputRef}
            />
            <button onClick={handleSubmit} className='todo-button1'>
              Dodaj
            </button>
          </>
        )}
      </form>
    }}
    </Media>
    
  );
}

export default TodoForm;