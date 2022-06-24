import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ToDoForm = () => {
  const [todo, setTodo] = useState('');
  const addTodo = (t) => {
    if (t === '') {
      alert('The Todo is empty');
    }
    setTodo('');
    console.log(t);
    setTodo('');
  };
  return (
    <div>
      {/* <Form> */}
      <input
        type="text"
        placeholder="Enter Todo"
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button variant="primary" type="submit" onClick={() => addTodo(todo)}>
        Submit
      </Button>
      {/* </Form> */}
    </div>
  );
};

export default ToDoForm;
