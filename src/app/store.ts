import { combineReducers, configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const rootReducer = combineReducers({
  todo: todoReducer,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
