import React from "react";
import {firebase} from './firebase2';
import '../assets/css/todo.css';
export default function AddTodo() {
  const [title, setTitle] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "") {
      await firebase.firestore().collection('Todos').add({
        title:title,
        completed:false,
      })
      setTitle('');
    }
  };
  return (
    <form id='form'>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="btn_container">
        <button onClick={handleSubmit}>Add task</button>
      </div>
    </form>
  );
}