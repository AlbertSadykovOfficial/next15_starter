import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ITodoItem {
  id: string;
  text: string;
  completed?: boolean;
}

const initialState: ITodoItem[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action: PayloadAction<ITodoItem>) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action: PayloadAction<ITodoItem>) {
      const todo = state.find((todo) => todo.id === action.payload.id);
      todo.completed = !todo.completed;
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
