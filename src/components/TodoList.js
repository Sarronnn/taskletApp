import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    /**Handles the case where if nothing is typed, it is not added to your to-do list */
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];
    /**set value to new to-dos */
    setTodos(newTodos);
  };

  const updatedTodo = (todoId, newValue) => {
    /**Handles the case where if nothing is typed, it is not added to your to-do list */
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    /**If id is ==, set to new value, if not, set to item */
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  /**function to remove a tassk upon click */
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updatedTodo={updatedTodo}
      />
    </div>
  );
}

export default TodoList;
