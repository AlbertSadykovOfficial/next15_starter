"use client";
import { useState } from "react";

export default function Typescript() {
  interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const [fetchedTodos, setFetchedTodos] = useState<ToDo[]>([]);

  const message = "Print Hello To Console!";

  // functions
  function logMessage() {
    console.log(message);
  }

  function fillToDo() {
    setFetchedTodos([
      {
        userId: 1,
        id: 1,
        title: "string",
        completed: false,
      },
      {
        userId: 2,
        id: 3,
        title: "string2",
        completed: true,
      },
    ]);
  }

  /* Typescript Error
  // setFetchedTodos('hello')
  function fillToDo2 () {
    setFetchedTodos([
      {
        userId: '1',
        id: '1',
        title: 123,
        completed: 'safa'
      }
    ])
  }
  */

  return (
    <div>
      <div>TypeScript Page</div>
      <button onClick={() => logMessage()}>{message}</button>
      <hr />
      ToDoList:
      {fetchedTodos.length && (
        <div>
          {fetchedTodos.map((item, i) => (
            <div key={i}>{i}</div>
          ))}
        </div>
      )}
      <hr />
      <button onClick={() => fillToDo()}>Fill</button>
    </div>
  );
}
