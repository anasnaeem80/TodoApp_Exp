import React, { useState } from "react";

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className='mt-4'>
      <div className='input-group'>
        <input
          type='text'
          className='form-control'
          placeholder='Add a new todo'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className='input-group-append'>
          <button className='btn btn-primary' type='submit'>
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
