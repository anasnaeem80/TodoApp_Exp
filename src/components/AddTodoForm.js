import React, { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzFYVzqPF6lGr87DxKuAdbFO75qKtFf_U",
  authDomain: "todoappexp-6e66d.firebaseapp.com",
  projectId: "todoappexp-6e66d",
  storageBucket: "todoappexp-6e66d.appspot.com",
  messagingSenderId: "842621533629",
  appId: "1:842621533629:web:d939781dfd48659e1426d4",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const db = getFirestore();

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");
  const ref = collection(db, "todos");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTodo(text);
    setText("");

    let data = {
      todo: text,
    };

    try {
      await addDoc(ref, data);
      console.log("Document successfully written!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
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
