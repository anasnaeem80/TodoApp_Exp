import React, { useState } from "react";

const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleEditSave();
    }
  };

  return (
    <div className={`card my-2 ${todo.completed ? "bg-light" : ""}`}>
      <div className='card-body d-flex justify-content-between align-items-center'>
        {isEditing ? (
          <input
            type='text'
            value={editText}
            onChange={handleEditChange}
            onKeyDown={handleKeyDown}
            autoFocus
            onBlur={handleEditSave}
            className='form-control'
          />
        ) : (
          <span>{todo.text}</span>
        )}
        <div className='btn-group'>
          <button
            className='btn btn-primary'
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
          <button className='btn btn-danger' onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
