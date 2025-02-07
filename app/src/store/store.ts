import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";
import { todosReducer } from "./features/todos/todosSlice";
import { counterReducer } from "./features/counter/counterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      todos: todosReducer,
      counter: counterReducer,
    },
    // preloadedState
    /**
     * middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
     * enhancers: [monitorReducersEnhancer]
     */
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
