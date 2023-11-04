import React, { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(-1);
  const [editedTodo, setEditedTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditIndex(index);
    setEditedTodo(todos[index]);
  };

  const updateTodo = () => {
    if (editedTodo.trim() !== "") {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = editedTodo;
      setTodos(updatedTodos);
      setEditIndex(-1);
      setEditedTodo("");
    }
  };

  return (
    <div className='container mt-4'>
      <h1 className='text-center'>Todo App</h1>
      <div className='input-group mb-3'>
        <input
          type='text'
          className='form-control'
          placeholder='Add a new Todo'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <div className='input-group-append'>
          <button className='btn btn-primary' onClick={addTodo}>
            Add
          </button>
        </div>
      </div>
      <ul className='list-group'>
        {todos.map((todo, index) => (
          <li
            key={index}
            className='list-group-item d-flex justify-content-between align-items-center'
          >
            {editIndex === index ? (
              <input
                type='text'
                className='form-control'
                value={editedTodo}
                onChange={(e) => setEditedTodo(e.target.value)}
              />
            ) : (
              todo
            )}
            <div>
              {editIndex === index ? (
                <button className='btn btn-success' onClick={updateTodo}>
                  Save
                </button>
              ) : (
                <button
                  className='btn btn-warning'
                  onClick={() => editTodo(index)}
                >
                  Edit
                </button>
              )}
              <button
                className='btn btn-danger'
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
