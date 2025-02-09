import { makeAutoObservable } from "mobx";

class CounterStore {
  count: number = 0; // The State

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

export const counterStore = new CounterStore();