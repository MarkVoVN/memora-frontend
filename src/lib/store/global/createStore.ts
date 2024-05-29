import { createStore } from "zustand/vanilla";
import { TodoSlice, createTodoSlice } from "../slices/todoSlice";
import { CounterSlice, createCounterSlice } from "../slices/counterSlice";

export type GlobalStore = CounterSlice & TodoSlice;

export const createGlobalStore = () => {
  return createStore<GlobalStore>()((...a) => ({
    ...createCounterSlice(...a),
    ...createTodoSlice(...a),
  }));
};
