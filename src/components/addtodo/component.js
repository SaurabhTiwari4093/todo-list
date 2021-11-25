import React, { useState } from "react";

export default function Addtodo({ addTodo }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  

  const submit = (e) => {
    e.preventDefault();
    if (!title) {
      alert("Title cannot be blank");
    }
    /*else if (!desc) {
        alert("Description cannot be blank");
    }
    else if (!date) {
        alert("Due Date cannot be blank");
      }
    else if (!time) {
        alert("Due Time cannot be blank");
      }*/ 
    else {
      addTodo(title, desc , date, time);
    }
    setTitle("");
    setDesc("");
    setDate("");
    setTime("");
  };

  return (
    <div className="container my-3">
      <h3 className="text-center">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            className="form-control"
            id="description"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
        </div>
        <div class="row">
          <div class="col-sm"><div className="mb-3">
          <label htmlFor="date" className="form-label">
            Todo Due Date
          </label>
          <input
            type="date"
            value={date}
            className="form-control"
            id="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
        </div></div>
          <div class="col-sm"><div className="mb-3">
          <label htmlFor="time" className="form-label">
            Todo Due Time
          </label>
          <input
            type="time"
            value={time}
            className="form-control"
            id="time"
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
        </div></div>
        </div>
        <button type="submit" className="btn btn-primary my-2">
          Add Todo
        </button>
      </form>
    </div>
  );
}
