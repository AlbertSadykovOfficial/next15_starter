import React from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { todoToggled } from "@/store/features/todos/todosSlice";

const CountViewer = () => {
  const dispatch = useAppDispatch();
  const toDoState = useAppSelector((state) => state.todos);
  const setComplete = (todo) => {
    dispatch(todoToggled(todo));
  };
  return (
    <div className="flex flex-col gap border border-1 border-black p-20">
      <div>To DO List:</div>
      <table>
        <thead className="font-bold">
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Complete</th>
          </tr>
        </thead>
        <tbody>
          {toDoState.map((todo) => (
            <tr key={`list-item-${todo.id}`}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td onClick={() => setComplete(todo)}>
                {String(todo.completed)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CountViewer;
