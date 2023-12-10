import React, { useState } from "react";

function TodoForm(props) {
  /*The function that updates based on the user's input*/
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  /*to prevent page from reloading upon clicking the submit button*/
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      /**Create an id: a random number times 10000 makes it unlikely to have the same id */
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };
  /*Lets create our form*/
  return (
    /*handleSubmit is called here so functions upon clicking/sumbitting*/
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
          />
          <button className="todo-button">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a to-do"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
          />
          <button className="todo-button"> Add to-do</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
